<template>
  <div class="blog">
    <!-- Sub Hero -->
    <div class="blog-sub-hero">
      <sub-hero
        background-image="http://placehold.it/1920x768"
        :title="$t('pages.blog.subHero.title')"
        :text="$t('pages.blog.subHero.description')"
      />
    </div>

    <!-- Blog Tiles -->
    <div class="blog-tiles">
      <tile
        v-for="(tile, i) in $t('pages.blog.tiles')"
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
      title: this.$t("meta.blog.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.blog.desc")
        }
      ]
    };
  }
};
</script>
