<template>
  <div class="result" v-if="isInitialized">
    <!--  Map Starts -->
    <result-map :api="api" :coords="{lat: this.$route.query.lat, lng: this.$route.query.lng}" />
    <!--  Map Ends -->

    <!-- Result Container Starts -->
    <div class="result-container" v-if="details">
      <!-- Statistics Starts -->
      <div class="result-statistics">
        <div class="result-statistics__header">
          <h1 class="result-statistics__score">
            <span class="result-statistics__score-percentage">{{ details.score }}</span>
            <span class="result-statistics__score-symbol">%</span>
          </h1>
          <div class="result-statistics__progress">
            <span class="result-statistics__progress-bar" :class="rootClasses" :style="progressWidth"></span>
          </div>
        </div>
        <div class="result-statistics__body">
          <h2 class="result-statistics__body-title">{{ details.address }}</h2>
          <div class="result-statistics__body-inner">
            <div class="result-statistics__body-item">
              <icon class="result-statistics__body-item__icon" size="x-large" symbol="icon-direction"></icon>
              <p class="result-statistics__body-item__title">{{ $t('pages.result.statistics.mosqueDensity') }}</p>
              <p class="result-statistics__body-item__text">{{ details.mosqueDensity }}</p>
            </div>
            <div class="result-statistics__body-item">
              <icon class="result-statistics__body-item__icon" size="x-large" symbol="icon-nearest"></icon>
              <p class="result-statistics__body-item__title">{{ $t('pages.result.statistics.nearestMosqueDistance') }}</p>
              <p class="result-statistics__body-item__text">{{ details.nearestMosqueDistance }}</p>
            </div>
            <div class="result-statistics__body-item">
              <icon class="result-statistics__body-item__icon" size="x-large" symbol="icon-groups"></icon>
              <p class="result-statistics__body-item__title">{{ $t('pages.result.statistics.peopleDensity') }}</p>
              <p class="result-statistics__body-item__text">{{ details.peopleDensity }}</p>
            </div>
            <div class="result-statistics__body-item">
              <icon class="result-statistics__body-item__icon" size="x-large" symbol="icon-mosque-group"></icon>
              <p class="result-statistics__body-item__title">{{ $t('pages.result.statistics.possiblePrayers') }}</p>
              <p class="result-statistics__body-item__text">{{ details.possiblePrayers }}</p>
            </div>
          </div>
        </div>
        <div class="result-statistics__footer">
          <div class="button-group">
            <button class="button button--primary">Export</button>
            <button class="button button--outline">Share</button>
          </div>
          <nuxt-link class="result-statistics__footer-link" to="/">How to calc whatever</nuxt-link>
        </div>
      </div>
      <!-- Statistics Ends -->

      <!-- Cards Starts -->
      <div class="result-cards">
        <h2 class="result-cards__title">Location Mosques</h2>
        <div class="result-cards__inner">
          <div class="result-cards__item" v-for="card in details.nearestMosques" :key="card.name">
            <icon symbol="icon-mosque-v2" size="xxx-large"></icon>
            <h3 class="result-cards__item-name">{{ card.name }}</h3>
            <div class="result-cards__item-distance">10km</div>
          </div>
        </div>
      </div>
      <!-- Cards Ends -->
    </div>
    <!-- Result Container Ends -->

  </div>
</template>

<script>
import { bemMixin } from "@/components/ui";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "result",
  mixins: [bemMixin('result-statistics__progress-bar')],
  data() {
    return {
      isInitialized: false,
      api: null
    }
  },
  computed: {
    ...mapGetters('languages', ['getLocale']),
    ...mapGetters('search', ['getMosqueDetails']),
    details() {
      return this.getMosqueDetails;
    },
    rootClasses() {
      const score = this.details.score;
      return this.bemIf(score <= 50 ,'red') ||
        this.bemIf(score > 50 && score < 70 ,'yellow') ||
        this.bemIf(score >= 70 ,'green')
    },
    progressWidth() {
      return {
        '--score-result': `${this.details.score}%`
      }
    }
  },
  mounted() {
    const { lat, lng } = this.$route.query;
    this.fetchMosqueDetailsAction({lat, lng, lang: this.getLocale})
    .then(async(_) => {
      try {
        const googleInit = await this.$google();
        this.api = googleInit.maps
        this.isInitialized = true;
      } catch (e) {
        console.error(e);
      }
    })
  },
  methods: {
    ...mapActions('search', ['fetchMosqueDetailsAction']),
  }
}
</script>
