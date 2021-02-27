<template>
  <div class="about">
    <!-- Sub Hero -->
    <div class="about-sub-hero">
      <sub-hero
        background-image="http://placehold.it/1920x768"
        title="What is NextMasjid?"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequuntur doloremque eveniet exercitationem illo inventore labore possimus quas qui?"/>
    </div>

    <!-- About Top Cards -->
    <div class="about-top">
      <div class="about-top__list">
        <div class="about-top__item" v-for="(card, index) in $t('pages.about.topTiles')" :key="`card-${index}`">
          <card :icon="card.icon" :title="card.title" :body="card.body" />
        </div>
      </div>
    </div>

    <!-- About Tiles -->
    <div class="about-tiles">
      <tile
        v-for="(tile, index) in $t('pages.about.tiles')"
        :img="require(`@/assets/images/${tile.img}`)"
        :title="tile.title"
        :body="tile.body"
        :key="`tile-${index}`" />
    </div>

    <!--  About How To Help  -->
    <div class="about-how">
      <text-content :is-image="true" :is-bg-white="true" title="some title" background-image="http://placehold.it/1920x888/900" body="voluptatibus." />
    </div>

    <!-- About Benefits -->
    <div class="about-benefits">
      <h2 class="about-benefits__title">Benefits</h2>
      <div class="about-benefits__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloremque esse excepturi expedita inventore ipsam provident soluta. Error, praesentium, qui.</div>
      <div class="about-benefits__wrapper">
        <card-benefits title="Benefits 1" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, repudiandae."></card-benefits>
        <card-benefits title="Benefits 2" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, repudiandae."></card-benefits>
        <card-benefits title="Benefits 3" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, repudiandae."></card-benefits>
        <card-benefits title="Benefits 4" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, repudiandae."></card-benefits>
      </div>
    </div>

    <!--  About Text  -->
    <div class="about-text">
      <text-content :is-color="true" title="some title" body="Lorem" />
    </div>


  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t('meta.about.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.about.desc')
        }
      ]
    }
  }
}
</script>
