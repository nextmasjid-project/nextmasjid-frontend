<template>
  <div class="search-map">
    <div class="search-map__element" ref="mapElement"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import googleMaps from '@/util/google-maps.js'

export default {
  name: "search-map",
  computed: {
    ...mapGetters('search', ['getCities']),
    mapOptions() {
      return {
        center: { lat: 24.751745, lng: 46.533665},
        zoom: 8,
      }
    },
    latLongList() {
      return this.getCities?.map(el => ({ lat: el.latitude, lng: el.longitude }))
    }
  },
  watch: {
    latLongList(val) {
      new google.maps.Marker({ position: [], map: this.map})
      this.latLongList.map(location => {
        if (location) {
          return new google.maps.Marker({ position: location, map: this.map})
        }
      })
    }
  },
  mounted() {
    this.initGoogleMaps()
  },
  methods: {
    initGoogleMaps() {
      googleMaps
        .load()
        .then(() => this.map = new google.maps.Map(this.$refs['mapElement'], this.mapOptions))
        .catch(e => {});
    }
  }
}
</script>
