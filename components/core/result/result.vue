<template>
  <div class="result" v-if="isInitialized">
    <!--  Map Starts -->
    <result-map
      :api="api"
      :coords="{ lat: this.$route.query.lat, lng: this.$route.query.lng }"
    />
    <!--  Map Ends -->

    <!-- Result Container Starts -->
    <div class="result-container" v-if="details">
      <!-- Statistics Starts -->
      <div class="result-statistics">
        <div class="result-statistics__header">
          <h1 class="result-statistics__score">
            <span class="result-statistics__score-percentage">{{
              details.value
            }}</span>
            <span class="result-statistics__score-symbol">%</span>
          </h1>
          <div class="result-statistics__progress">
            <span
              class="result-statistics__progress-bar"
              :class="rootClasses"
              :style="progressWidth"
            ></span>
          </div>
        </div>
        <div class="result-statistics__body">
          <h3 class="result-statistics__body-title">
            تقرير حول النقطة المختارة بالإحداثيات: {{ details.lng }},
            {{ details.lat }}
          </h3>
          <div class="result-statistics__body-inner">
            <div class="result-statistics__body-item">
              <icon
                class="result-statistics__body-item__icon"
                size="x-large"
                symbol="icon-direction"
              ></icon>
              <p class="result-statistics__body-item__title">
                {{ $t("pages.result.statistics.mosqueDensity") }}
              </p>
              <p class="result-statistics__body-item__text">
                {{ details.mosqueDensity }}
              </p>
            </div>
            <div class="result-statistics__body-item">
              <icon
                class="result-statistics__body-item__icon"
                size="x-large"
                symbol="icon-nearest"
              ></icon>
              <p class="result-statistics__body-item__title">
                {{ $t("pages.result.statistics.nearestMosqueDistance") }}
              </p>
              <p class="result-statistics__body-item__text">
                {{ details.nearestMosqueDistance }}
              </p>
            </div>
            <div class="result-statistics__body-item">
              <icon
                class="result-statistics__body-item__icon"
                size="x-large"
                symbol="icon-groups"
              ></icon>
              <p class="result-statistics__body-item__title">
                {{ $t("pages.result.statistics.populationDensity") }}
              </p>
              <p class="result-statistics__body-item__text">
                {{ details.populationDensity }}
              </p>
            </div>
            <div class="result-statistics__body-item">
              <icon
                class="result-statistics__body-item__icon"
                size="x-large"
                symbol="icon-mosque-group"
              ></icon>
              <p class="result-statistics__body-item__title">
                {{ $t("pages.result.statistics.expectedPrayers") }}
              </p>
              <p class="result-statistics__body-item__text">
                {{ details.expectedPrayers }}
              </p>
            </div>
          </div>
        </div>
        <div class="result-statistics__footer">
          <div class="button-group">
            <button class="button button--primary" @click="handleExportPdf">
              تصدير تقرير PDF
            </button>
            <button class="button button--outline">مشاركة</button>
          </div>
          <nuxt-link class="result-statistics__footer-link" to="/"
            >للتعرف على الخوارزمية المتبعة انقر هنا</nuxt-link
          >
        </div>
      </div>
      <!-- Statistics Ends -->

      <!-- Cards Starts -->
      <div class="result-cards">
        <h2 class="result-cards__title">المساجد القريبة</h2>
        <div class="result-cards__inner">
          <div class="result-cards__item">
            <icon symbol="icon-mosque-v2" size="xxx-large"></icon>
            <h3 class="result-cards__item-name">
              {{ details.firstNearestMasjidName }}
            </h3>
            <div class="result-cards__item-distance">
              {{ details.firstNearestMasjidDistance }}
            </div>
          </div>
          <div class="result-cards__item">
            <icon symbol="icon-mosque-v2" size="xxx-large"></icon>
            <h3 class="result-cards__item-name">
              {{ details.secondNearestMasjidName }}
            </h3>
            <div class="result-cards__item-distance">
              {{ details.secondNearestMasjidDistance }}
            </div>
          </div>
          <div class="result-cards__item">
            <icon symbol="icon-mosque-v2" size="xxx-large"></icon>
            <h3 class="result-cards__item-name">
              {{ details.thirdNearestMasjidName }}
            </h3>
            <div class="result-cards__item-distance">
              {{ details.thirdNearestMasjidDistance }}
            </div>
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
import { mapActions, mapGetters } from "vuex";
import API from "@/services/api";
import { URLS } from "@/services/urls";

export default {
  name: "result",
  mixins: [bemMixin("result-statistics__progress-bar")],
  data() {
    return {
      isInitialized: false,
      api: null
    };
  },
  computed: {
    ...mapGetters("languages", ["getLocale"]),
    ...mapGetters("search", ["getMosqueDetails"]),
    details() {
      return this.getMosqueDetails;
    },
    rootClasses() {
      const score = this.details.value;
      return (
        this.bemIf(score <= 50, "red") ||
        this.bemIf(score > 50 && score < 70, "yellow") ||
        this.bemIf(score >= 70, "green")
      );
    },
    progressWidth() {
      return {
        "--score-result": `${this.details.value}%`
      };
    }
  },
  mounted() {
    const { lat, lng } = this.$route.query;
    this.fetchMosqueDetailsAction({ lat, lng, lang: this.getLocale }).then(
      async _ => {
        try {
          const googleInit = await this.$google();
          this.api = googleInit.maps;
          this.isInitialized = true;
        } catch (e) {
          console.error(e);
        }
      }
    );
  },
  methods: {
    ...mapActions("search", ["fetchMosqueDetailsAction"]),
    async handleExportPdf() {
      // console.log(this.getMosqueDetails);
      const { EXPORT_PDF_URL } = URLS;
      const res = await API.post(EXPORT_PDF_URL, {
        scoreColor: "#ed462f",
        score: this.getMosqueDetails.value,
        prayersInPerimeter: this.getMosqueDetails.expectedPrayers,
        distanceToNearestMosque: this.getMosqueDetails.nearestMosqueDistance,
        populationDensity: this.getMosqueDetails.populationDensity,
        mosqueDensity: this.getMosqueDetails.mosqueDensity,
        long: this.getMosqueDetails.lng.toString(),
        lat: this.getMosqueDetails.lat.toString(),
        qrcodeUrl: "www.google.com",
        firstNearstMosque: "مسجد الحارثة بن صعب - 3.2 كلم, شمال غرب",
        secondNearstMosque: "مسجد الفضيل بن عياض - 3.3 كلم, شمال شرق",
        thirdNearstMosque: "مسجد - 3.9 كلم, جنوب"
      });
      const { data } = res;
      console.log(data);
    }
  }
};
</script>
