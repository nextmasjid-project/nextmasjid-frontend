<template>
  <div class="search-container">
    <!--  Map  -->
    <div class="search-map">
      <div class="search-map__element" ref="mapElement"/>
    </div>

    <!-- Search Sidebar   -->
    <search-sidebar :google-maps="GoogleMaps" @toggle="toggleEditorSuggestionList" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import {
    createIcons,
    centerMap,
    setMarkerIcon,
    setMarkerVisibility
  } from './map-helpers';
  import {
    createMap,
    createLatLng,
    createHeatMapInstance,
    createInfoWindow,
    createMarker,
  } from './map-entities';
  import Vue from 'vue'
  import InfoWindowComponent from './search-map-info-window/search-map-info-window'

  export default {
    name: "search-map",
    props: {
      api: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        isActiveWindow: null,
        test: true,
        GoogleMaps: {
          Api: null,
          Icons: null,
          Markers: [],
          Map: null,
        },
      };
    },
    computed: {
      ...mapGetters('search', ['getCities', 'getHeatMapList', 'getEditorSuggestionList']),
    },
    mounted() {
      this.fetchAllEditorsSuggestion().then(() => {
        this.initMapComponents({Api: this.api})
      })
      // this.heatMapInit()
    },
    methods: {
      ...mapActions('search', ['fetchHeatMapList', 'fetchCurrentLocationData', 'fetchAllEditorsSuggestion']),
      initMapComponents({Api}) {
        this.GoogleMaps.Api = Api;
        this.createMap();
        this.GoogleMaps.Icons = createIcons(this.GoogleMaps);
      },
      toggleEditorSuggestionList(isChecked) {
        isChecked ? this.createMapMarkers() : this.resetMarkerIcons()
      },
      createMap() {
        this.GoogleMaps.Map = createMap(this.GoogleMaps, {element: this.$refs.mapElement});
        this.GoogleMaps.Map.addListener('bounds_changed', this.onBoundChanged.bind(this));
        this.GoogleMaps.Map.addListener('click', this.onClickHandler.bind(this));
      },
      updateMarkerIcon(marker) {
        const icon = this.GoogleMaps.Icons[this.getMarkerName()];
        setMarkerIcon({marker, icon});
      },
      getMarkerName() {
        return `MARKER_EDITOR_CHOICE`;
      },
      createMapMarkers() {
        this.GoogleMaps.Markers.forEach(marker => marker.setMap(null));
        this.GoogleMaps.Markers = this.getEditorSuggestionList?.map(this.createMapMarker);
      },
      createMapMarker(entry) {
        const {latitude, longitude} = entry;
        const marker = createMarker(this.GoogleMaps, {position: {lat: latitude, lng: longitude}});
        marker.setPosition(createLatLng(this.GoogleMaps, {lat: latitude, lng: longitude}));
        marker.addListener('click', this.onMarkerClicked.bind(this, marker, entry));
        this.updateMarkerIcon(marker);
        return marker;
      },
      onMarkerClicked(marker, {latitude, longitude}) {
        const {Map} = this.GoogleMaps;

        centerMap({Map}, {
          latlng: {lat: latitude, lng: longitude},
          method: 'panTo'
        });
      },
      resetMarkerIcons() {
        this.GoogleMaps.Markers.forEach(marker => setMarkerVisibility(this.GoogleMaps, {marker, toggle: false}));
      },
      onBoundChanged() {
        let bounds = this.GoogleMaps.Map.getBounds();
        const neLat = bounds.getNorthEast().lat();
        const neLng = bounds.getNorthEast().lng();
        const swLat = bounds.getSouthWest().lat();
        const swLng = bounds.getSouthWest().lng();
        const coordinates = {neLat, neLng, swLat, swLng};
        // this.fetchHeatMapList(coordinates).then(() => this.heatMapInit())
      },
      onClickHandler(e) {
        const { lat, lng } = e.latLng;
        this.fetchCurrentLocationData({lat: lat(), lng: lng()})
        .then((response) => {
          this.isActiveWindow && this.isActiveWindow.close();
          // Parse Info window vue component and mount it to the DOM
          let InfoWindow = Vue.extend(InfoWindowComponent);
          let instanceInfoWindow = new InfoWindow({propsData: { content: response }});
          instanceInfoWindow.$mount();

          let infoWindow = createInfoWindow(this.GoogleMaps, {
            content: instanceInfoWindow.$el,
            position: e.latLng
          });
          infoWindow.open(this.GoogleMaps.Map)
          this.isActiveWindow = infoWindow
        })
      },
      heatMapInit() {
        const HEAT_MAP_DATA = this.getHeatMapList.map(el => createLatLng(this.GoogleMaps, {lat: el.location.lat, lng: el.location.lng}))
        createHeatMapInstance({Api: this.GoogleMaps.Api, Map: this.GoogleMaps.Map}, HEAT_MAP_DATA)
      },
    }
  }
</script>
