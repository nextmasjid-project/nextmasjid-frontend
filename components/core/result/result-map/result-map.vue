<template>
  <div class="result-map">
    <div class="result-map__element" ref="resultMapElement"/>
  </div>
</template>

<script>
import {centerMap, createIcons, setMarkerIcon} from "@/components/core/search/search-map/map-helpers";
import {createLatLng, createMap, createMarker} from "@/components/core/search/search-map/map-entities";
import {mapGetters} from "vuex";

export default {
  name: "result-map",
  props: {
    api: {
      type: Object,
      required: true,
    },
    coords: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      zoomLevel: 16,
      GoogleMaps: {
        Api: null,
        Icons: null,
        Markers: {
          editorChoice: [],
          currentMosques: []
        },
        Map: null,
        HeatMap: null 
      },
      markerName: {
        editorChoice: 'MARKER_EDITOR_CHOICE',
        currentMosques: 'MARKER_CURRENT_MOSQUE'
      }
    }
  },
  computed: {
    ...mapGetters('search', ['getMosqueDetails']),
  },
  mounted() {
    this.initMapComponents({Api: this.api})
  },
  methods: {
    initMapComponents({Api}) {
      this.GoogleMaps.Api = Api;
      this.createMap();
      this.GoogleMaps.Icons = createIcons(this.GoogleMaps);
      this.createMapMarkers('editorChoice', [{latitude: +this.coords.lat, longitude: +this.coords.lng}], this.markerName.editorChoice)
      this.createMapMarkers('currentMosques', this.getMosqueDetails.nearestMosques, this.markerName.currentMosques)
    },
    createMap() {
      this.GoogleMaps.Map = createMap(this.GoogleMaps, {element: this.$refs.resultMapElement});
      this.GoogleMaps.Map.setZoom(this.zoomLevel)
      // this.GoogleMaps.Map.addListener('idle', this.onCenterChanged.bind(this));
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
      this.onMarkerClicked(marker, entry)
      return marker;
    },
    updateMarkerIcon(marker, markerName) {
      const icon = this.GoogleMaps.Icons[markerName];
      setMarkerIcon({marker, icon});
    },
    onMarkerClicked(marker, {latitude, longitude}) {
      const {Map} = this.GoogleMaps;

      centerMap({Map}, {
        latlng: {lat: latitude, lng: longitude},
        method: 'panTo'
      });
    },
    onCenterChanged() {
      const {Map} = this.GoogleMaps;
      console.log('map changed')
      centerMap({Map}, {
        latlng: {lat: +this.coords.lat, lng: +this.coords.lng},
        method: 'panTo'
      });
    }
  }
}
</script>
