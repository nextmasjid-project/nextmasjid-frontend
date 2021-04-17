<template>
  <div class="open-data">
    <!-- Sub Hero -->
    <div class="open-data-sub-hero">
      <sub-hero
        :background-image="require(`@/assets/images/open-data-bg.png`)"
        :title="$t('pages.openData.subHero.title')"
        :text="$t('pages.openData.subHero.description')"
      />
    </div>

    <!-- Blog Tiles -->
    <div class="open-data-tiles">
      <tile
        v-for="(tile, i) in $t('pages.openData.tiles')"
        :img="require(`@/assets/images/${tile.img}`)"
        :title="tile.title"
        :body="tile.body"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t("meta.openData.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.openData.desc")
        }
      ]
    };
  }
};
</script>
