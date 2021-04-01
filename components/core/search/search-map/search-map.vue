<template>
  <div class="search-container">
      <!-- Search Sidebar   -->
      <search-sidebar
        :google-maps="GoogleMaps"
        @toggleEditorChoice="toggleEditorSuggestionList"
        @toggleCurrentMosques="toggleCurrentMosquesList"
      />

      <!--  Map  -->
      <div class="search-map" v-show="getComponentName === 'search-map'">
        <div class="search-map__element" ref="mapElement"/>
      </div>
      <search-list-view v-show="getComponentName !== 'search-map'" />

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
        currentZoomLevel: 16,
        updatedZoomLevel: null,
        isCurrentMosquesChecked: false,
        GoogleMaps: {
          Api: null,
          Icons: null,
          Markers: {
            editorChoice: [],
            currentMosques: []
          },
          Map: null,
        },
        markerName: {
          editorChoice: 'MARKER_EDITOR_CHOICE',
          currentMosques: 'MARKER_CURRENT_MOSQUE'
        }
      };
    },
    computed: {
      ...mapGetters('search', [
        'getCities',
        'getHeatMapList',
        'getEditorSuggestionList',
        'getCurrentMosquesList',
        'getComponentName'
      ]),
      ...mapGetters('languages', ['getLocale']),
    },
    mounted() {
      this.fetchAllEditorsSuggestion(this.getLocale).then(() => {
        this.initMapComponents({Api: this.api})
      })
    },
    methods: {
      ...mapActions('search', [
        'fetchHeatMapList',
        'fetchCurrentLocationData',
        'fetchAllEditorsSuggestion',
        'setCoordsAction',
        'fetchCurrentMosques'
      ]),
      initMapComponents({Api}) {
        this.GoogleMaps.Api = Api;
        this.createMap();
        this.GoogleMaps.Icons = createIcons(this.GoogleMaps);
      },
      toggleEditorSuggestionList(isChecked) {
        if (isChecked) {
          this.setZoomLevel(10)
          this.createMapMarkers('editorChoice', this.getEditorSuggestionList, this.markerName.editorChoice)
        } else {
          this.setZoomLevel(7)
          this.resetMarkerIcons('editorChoice')
        }
      },
      toggleCurrentMosquesList(isChecked) {
        isChecked ? this.setZoomLevel(16) : this.setZoomLevel(7);
        this.isCurrentMosquesChecked = isChecked;
        if ((this.updatedZoomLevel >= this.currentZoomLevel) && this.isCurrentMosquesChecked) {
          this.createMapMarkers('currentMosques', this.getCurrentMosquesList, this.markerName.currentMosques)
        } else {
          this.resetMarkerIcons('currentMosques')
        }
      },
      createMap() {
        this.GoogleMaps.Map = createMap(this.GoogleMaps, {element: this.$refs.mapElement});
        this.GoogleMaps.Map.addListener('idle', this.onBoundChanged.bind(this));
        this.GoogleMaps.Map.addListener('click', this.onClickHandler.bind(this));
      },
      updateMarkerIcon(marker, markerName) {
        const icon = this.GoogleMaps.Icons[markerName];
        setMarkerIcon({marker, icon});
      },
      createMapMarkers(markerType, typeList, markerName) {
        this.GoogleMaps.Markers[markerType].forEach(marker => marker.setMap(null));
        this.GoogleMaps.Markers[markerType] = typeList?.map(el => this.createMapMarker(el, markerName));
      },
      createMapMarker(entry, markerName) {
        const {latitude, longitude} = entry;
        const marker = createMarker(this.GoogleMaps, {position: {lat: latitude, lng: longitude}});
        marker.setPosition(createLatLng(this.GoogleMaps, {lat: latitude, lng: longitude}));
        marker.addListener('click', this.onMarkerClicked.bind(this, marker, entry));
        this.updateMarkerIcon(marker, markerName);
        return marker;
      },
      onMarkerClicked(marker, {latitude, longitude}) {
        const {Map} = this.GoogleMaps;

        centerMap({Map}, {
          latlng: {lat: latitude, lng: longitude},
          method: 'panTo'
        });
      },
      resetMarkerIcons(markerType) {
        this.GoogleMaps.Markers[markerType].forEach(marker => setMarkerVisibility(this.GoogleMaps, {marker, toggle: false}));
      },
      onBoundChanged() {
        let bounds = this.GoogleMaps.Map.getBounds();
        const neLat = bounds.getNorthEast().lat();
        const neLng = bounds.getNorthEast().lng();
        const swLat = bounds.getSouthWest().lat();
        const swLng = bounds.getSouthWest().lng();
        const coordinates = {neLat, neLng, swLat, swLng};
        this.updatedZoomLevel = this.GoogleMaps.Map.getZoom();

        console.log("UPDATED ZOOM Level:", this.updatedZoomLevel);
        console.log("CURRENT ZOOM Level:", this.currentZoomLevel);

        if ((this.updatedZoomLevel >= this.currentZoomLevel)) {
          if (this.isCurrentMosquesChecked) {
            this.fetchCurrentMosques(coordinates).then(_ => {
              this.createMapMarkers('currentMosques', this.getCurrentMosquesList, this.markerName.currentMosques);
            });
          }
        } else {
          this.resetMarkerIcons('currentMosques')
        }
       // this.fetchHeatMapList(coordinates).then(() => this.heatMapInit())
      },
      onClickHandler(e) {
        const { lat, lng } = e.latLng;
        let payload = {lat: lat(), lng: lng(), lang: this.getLocale}
        const locale = {
          websiteVisit: this.$t('pages.search.infoWindow.websiteVisit'),
          share: this.$t('pages.search.infoWindow.share'),
          report: this.$t('pages.search.infoWindow.report'),
        }
        this.fetchCurrentLocationData(payload)
        .then((response) => {
          this.isActiveWindow && this.isActiveWindow.close();
          // Parse Info window vue component and mount it to the DOM
          let InfoWindow = Vue.extend(InfoWindowComponent);
          let instanceInfoWindow = new InfoWindow({propsData: { content: {...response, ...payload, locale} }});
          instanceInfoWindow.$mount();

          let infoWindow = createInfoWindow(this.GoogleMaps, {
            content: instanceInfoWindow.$el,
            position: e.latLng
          });
          infoWindow.open(this.GoogleMaps.Map)
          this.isActiveWindow = infoWindow;
          this.setCoordsAction({lat: lat(), lng: lng()})
        })
      },
      heatMapInit() {
        const HEAT_MAP_DATA = this.getHeatMapList.map(el => createLatLng(this.GoogleMaps, {lat: el.location.lat, lng: el.location.lng}))
        createHeatMapInstance({Api: this.GoogleMaps.Api, Map: this.GoogleMaps.Map}, HEAT_MAP_DATA)
      },
      setZoomLevel(level) {
        this.GoogleMaps.Map.setZoom(level)
      },
    }
  }
</script>
