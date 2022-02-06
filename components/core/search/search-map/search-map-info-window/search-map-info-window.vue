<template>
  <div class="search-info" ref="mapInfoWindow">
    <div class="search-info__top">
      <h1 class="search-info__percentage">
        <span>{{ content.value }}</span>
        <span class="search-info__symbol">%</span>
      </h1>
      <div class="search-info__progress">
        <span
          class="search-info__bar"
          :class="rootClasses"
          :style="progressWidth"
        ></span>
      </div>
      <div class="search-info__text">
        <h3 class="search-info__title">{{ content.address }}</h3>
        <p class="search-info__desc">
          {{ message }}
          <br />
          {{ content.lat }} خط الطول <br />
          {{ content.lng }} خط العرض
        </p>
      </div>
    </div>
    <div class="search-info__bottom">
      <div class="search-info__group">
        <a :href="resultLink" class="button button--primary" target="_blank">
          {{ content.locale.websiteVisit }}
        </a>

        <div class="share-button__wrapper">
          <div v-show="showShare" class="share-button__container">
            <div
              class="share-button__item"
              v-for="share in shares"
              :key="share.network"
            >
              <ShareNetwork
                :network="share.network"
                :url="resultLink"
                :title="content.meta.title"
                :description="content.meta.description"
              >
                <icon :symbol="`icon-${share.icon}`" />
              </ShareNetwork>
            </div>
          </div>

          <button
            class="button button--outline button--aligned"
            @click="handleShare"
          >
            <icon size="small" symbol="icon-share"></icon>
            <span>{{ content.locale.share }}</span>
          </button>
        </div>
      </div>

      <button class="button button--outline button--full">
        {{ content.locale.export }} <br />
        ({{ content.locale.exportMessage }})
      </button>

      <div class="search-info__center">
        <a href="contact" class="search-info__link">
          {{ content.locale.report }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import bemMixin from "@/components/ui/mixins/bem";

export default {
  name: "search-map-info-window",
  mixins: [bemMixin("search-info__bar")],
  props: {
    content: {
      type: Object,
    },
  },
  data() {
    return {
      showShare: false,
      sharing: {
        title: "test title",
        description: "test desc",
      },
      shares: [
        {
          network: "twitter",
          icon: "twitter-blue",
          // hashtags: "vuejs,vite"
        },
        {
          network: "whatsapp",
          icon: "whatsapp",
        },
      ],
    };
  },
  computed: {
    rootClasses() {
      const { value } = this.content;
      return (
        this.bemIf(value <= 50, "red") ||
        this.bemIf(value > 50 && value < 70, "yellow") ||
        this.bemIf(value >= 70, "green")
      );
    },
    progressWidth() {
      return { "--score": `${this.content.value}%` };
    },
    resultLink() {
      const { lat, lng } = this.content;
      const DETAILS_URL = new URL(`${window.location.href}/result`);
      DETAILS_URL.searchParams.append("lat", lat);
      DETAILS_URL.searchParams.append("lng", lng);
      return DETAILS_URL.href;
    },
    message() {
      const { value, locale } = this.content;
      if (value >= 70) {
        return locale.message.ifHigh;
      } else if (value > 50) {
        return locale.message.ifLow;
      } else if (value === -1) {
        return locale.message.ifNotGood;
      } else {
        return locale.message.ifNot;
      }
    },
  },
  methods: {
    handleShare() {
      this.showShare = !this.showShare;
    },
  },
};
</script>
