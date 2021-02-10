<template>
  <div class="search-info" ref="mapInfoWindow">
    <div class="search-info__top">
      <h1 class="search-info__percentage">
        <span>{{ content.score }}</span>
        <span class="search-info__symbol">%</span>
      </h1>
      <div class="search-info__progress">
        <span class="search-info__bar" :class="rootClasses" :style="progressWidth"></span>
      </div>
      <div class="search-info__text">
        <h3 class="search-info__title">{{ content.address }}</h3>
        <p class="search-info__desc">-</p>
      </div>
    </div>
    <div class="search-info__bottom">
      <div class="search-info__group">
        <button class="button button--primary">Website visit</button>
        <button class="button button--outline button--aligned">
          <icon size="small" symbol="icon-share"></icon>
          <span>Share</span>
        </button>
      </div>
      <button class="button button--outline button--full">Share</button>
      <div class="search-info__center">
        <a href="" class="search-info__link">Report</a>
      </div>
    </div>
  </div>
</template>

<script>
import bemMixin from "@/components/ui/mixins/bem";

export default {
  name: "search-map-info-window",
  mixins: [bemMixin('search-info__bar')],
  props: {
    content: {
      type: Object
    }
  },
  computed: {
    rootClasses() {
      const { score } = this.content
      return this.bemIf(score <= 50 ,'red') ||
             this.bemIf(score > 50 && score < 70 ,'yellow') ||
             this.bemIf(score >= 70 ,'green')
    },
    progressWidth() {
      return { '--score': `${this.content.score}%` }
    },
  }
}
</script>
