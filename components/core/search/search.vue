<template>
  <div class="search" v-if="isInitialized">
    <!-- Search Map  -->
    <search-map :api="api"/>

  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "search",
  data() {
    return {
      isInitialized: false,
      api: null
    };
  },
  computed: {
    ...mapGetters('languages', ['getLocale']),
  },
  async mounted() {
    this.fetchRegionAction(this.getLocale);
    try {
      const googleInit = await this.$google();
      this.api = googleInit.maps
      this.isInitialized = true;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions('search', ['fetchRegionAction']),
  }
}
</script>
