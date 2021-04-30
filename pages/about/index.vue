<template>
  <div class="about">
    <!-- Sub Hero -->
    <div class="about-sub-hero">
      <sub-hero
        :background-image="require('@/assets/images/home-slide-3.svg')"
        :title="$t('pages.about.subHero.title')"
        :text="$t('pages.about.subHero.description')"
      />
    </div>

    <!-- About Top Cards -->
    <div class="about-top">
      <div class="about-top__list">
        <div
          class="about-top__item"
          v-for="(card, index) in $t('pages.about.topTiles')"
          :key="`card-${index}`"
        >
          <!-- <card :icon="card.icon" :title="card.title" :body="card.body" /> -->
          <div>
            <img
              :src="require(`@/assets/images/${card.icon}`)"
              :alt="card.icon"
            />
          </div>
          <hr />
          <div>
            <h2>
              {{ card.title }}
            </h2>
            <p v-html="card.body"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- About Tiles -->
    <div class="about-tiles">
      <div
        v-for="(tile, index) in $t('pages.about.tiles')"
        :key="`tile-${index}`"
        class="about-tiles__item"
      >
        <img :src="require(`@/assets/images/${tile.icon}`)" :alt="tile.icon" />
        <h2>{{ tile.title }}</h2>
        <p>{{ tile.body }}</p>
      </div>
    </div>

    <!--  About How To Help  -->
    <div class="about-how">
      <div class="about-how-top">
        <h2>
          {{ $t("pages.about.HowToHelp.title") }}
        </h2>
        <p>
          {{ $t("pages.about.HowToHelp.body") }}
        </p>
      </div>
      <div class="about-how-bottom">
        <h1>
          {{ $t("pages.about.HowToHelp.value") }}
        </h1>
        <div class="about-progress">
          <div class="about-progress-completed"></div>
        </div>
      </div>
      <!-- <text-content
        :is-image="true"
        :is-bg-white="true"
        title="مؤشر المسجد القادم"
        :background-image="require('@/assets/images/nextmasjid-score.png')"
        body="مؤشر تقديري لتقييم المكان ومناسبته لبناء مسجد، يقدم تقييما من ٠ إلى ١٠٠ (حيث صفر عدم مناسبة المكان، و ١٠٠ مناسبة تامة). "
      /> -->
    </div>

    <!-- About Benefits -->
    <div class="about-benefits">
      <h2 class="about-benefits__title">
        {{ $t("pages.about.benefits.title") }}
      </h2>
      <div class="about-benefits__text">
        {{ $t("pages.about.benefits.description") }}
      </div>
      <div class="about-benefits__wrapper">
        <div
          v-for="(tile, i) in $t('pages.about.benefits.tiles')"
          :key="`benefits${i}`"
          class="about-benefits__item"
        >
          <h1>{{ tile.title }}</h1>
          <hr />
          <p>{{ tile.body }}</p>
        </div>
      </div>
    </div>

    <!-- White Divider -->
    <div class="about-white-divider"></div>

    <!--  About Text  -->
    <div class="about-text">
      <text-content
        :is-color="true"
        title=""
        :body="$t('pages.about.bottom.description')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t("meta.about.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.about.desc")
        }
      ]
    };
  }
};
</script>
