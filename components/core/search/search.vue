<template>
  <div class="search" v-if="isInitialized">
    <!-- Search Map  -->
    <search-map :api="api" />

    <div v-if="modal">
      <overlay @close="handleCloseModal">
        How to explore the map. Red areas are in most need for masjids.
      </overlay>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchMap from "@/components/core/search/search-map/search-map";
import SearchListView from "@/components/core/search/search-list-view/search-list-view";

export default {
  name: "search",
  components: {
    SearchMap,
    SearchListView
  },
  data() {
    return {
      isInitialized: false,
      api: null,
      modal: true
    };
  },
  computed: {
    ...mapGetters("languages", ["getLocale"]),
    ...mapGetters("search", ["getComponentName"]),
    currentProps() {
      if (this.getComponentName === "search-map") {
        return { api: this.api };
      }
    }
  },
  async mounted() {
    this.fetchRegionAction(this.getLocale);
    try {
      const googleInit = await this.$google();
      this.api = googleInit.maps;
      this.isInitialized = true;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions("search", ["fetchRegionAction", "setGoogleMapApiAction"]),
    handleCloseModal() {
      this.modal = false;
    }
  }
};
</script>
