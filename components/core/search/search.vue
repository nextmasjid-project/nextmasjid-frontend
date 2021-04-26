<template>
  <div class="search" v-if="isInitialized">
    <!-- Search Map  -->
    <search-map :api="api" />

    <div v-if="modal">
      <overlay @close="handleCloseModal">
        <div class="modal-container">
          <h2 class="modal-title">{{ $t("pages.search.firstModal.title") }}</h2>
          <div class="modal-tiles">
            <div v-for="tile in tiles" :key="tile.text">
              <img :src="require(`@/assets/images/${tile.img}`)" alt="" />
              <p>
                {{ tile.text }}
              </p>
            </div>
          </div>
        </div>
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
      modal: true,
      tiles: []
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

    this.tiles = this.$t("pages.search.firstModal.content");
  },
  methods: {
    ...mapActions("search", ["fetchRegionAction", "setGoogleMapApiAction"]),
    handleCloseModal() {
      this.modal = false;
    }
  }
};
</script>
