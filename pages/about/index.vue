<template>
  <div class="about">
    <!-- Sub Hero -->
    <div class="about-sub-hero">
      <sub-hero
        :background-image="require('@/assets/images/home-slide-1.svg')"
        :title="$t('pages.about.subHero.title')"
        :text="$t('pages.about.subHero.description')"
      />
    </div>

    <!-- About Top Cards -->
    <div class="about-top">
      <div class="about-top__list">
        <cards-two
          v-for="(card, index) in $t('pages.about.topTiles')"
          :key="`card-${index}`"
          :icon="card.icon"
          :title="card.title"
          :body="card.body"
        >
        </cards-two>
      </div>
    </div>

    <!-- About Tiles -->
    <div class="about-tiles">
      <cards-three
        v-for="(card, i) in $t('pages.about.tiles')"
        :key="`card-${i}`"
        :icon="card.icon"
        :title="card.title"
        :body="card.body"
        :index="i"
      >
      </cards-three>
    </div>

    <!--  About How To Help  -->
    <div class="about-how">
      <div class="about-how__wrapper">
        <div class="about-how__card">
          <div class="about-how-top">
            <h2 class="about-how__title">
              {{ $t("pages.about.HowToHelp.title") }}
            </h2>
            <p class="about-how__body">
              {{ $t("pages.about.HowToHelp.body") }}
            </p>
          </div>
          <div class="about-how-bottom">
            <h1 class="about-how__value">
              {{ $t("pages.about.HowToHelp.value") }}
            </h1>
            <div class="about-how__progress">
              <div class="about-how__progress__bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <text-content
      :is-image="true"
      :is-bg-white="true"
      title="مؤشر المسجد القادم"
      :background-image="require('@/assets/images/nextmasjid-score.png')"
      body="مؤشر تقديري لتقييم المكان ومناسبته لبناء مسجد، يقدم تقييما من ٠ إلى ١٠٠ (حيث صفر عدم مناسبة المكان، و ١٠٠ مناسبة تامة). "
    /> -->

    <!-- About Benefits -->
    <div class="about-benefits">
      <div class="about-benefits__wrapper">
        <h2 class="about-benefits__title">
          {{ $t("pages.about.benefits.title") }}
        </h2>
        <div class="about-benefits__text">
          {{ $t("pages.about.benefits.description") }}
        </div>
        <div class="about-benefits__item">
          <cards-four
            v-for="(card, i) in $t('pages.about.benefits.tiles')"
            :key="`card-${i}`"
            :title="card.title"
            :body="card.body"
          >
          </cards-four>
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
