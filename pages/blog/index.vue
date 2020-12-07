<template>
  <div class="blog">
    <!-- Sub Hero -->
    <div class="blog-sub-hero">
      <sub-hero
          background-image="http://placehold.it/1920x768"
          :title="$t('pages.blog.subHero.title')"/>
    </div>

    <!-- Blog Tiles -->
    <div class="blog-tiles">
      <tile
          v-for="tile in $t('pages.blog.tiles')"
          :img="require(`@/assets/images/${tile.img}`)"
          :title="tile.title"
          :body="tile.body"
          :key="tile.title" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>
