<template>
  <div class="search">
    <!-- Search Map  -->
    <search-map />

    <!-- Search Sidebar   -->
    <search-sidebar />
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "search",
  computed: {
    ...mapGetters('languages', ['getLocale']),
  },
  mounted() {
    this.fetchRegionAction(this.getLocale)
  },
  methods: {
    ...mapActions('search', ['fetchRegionAction']),
  }
}
</script>
