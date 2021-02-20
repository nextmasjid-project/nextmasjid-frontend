<template>
  <div class="result">
      <div class="search-list-view">
        <div class="search-list-view__inner">
          <search-list-view-item :progress-width="progressWidth" :root-classes="rootClasses" />
          <search-list-view-item :progress-width="progressWidth" :root-classes="rootClasses" />
          <search-list-view-item :progress-width="progressWidth" :root-classes="rootClasses" />
        </div>
      </div>
  </div>
</template>

<script>
import { bemMixin} from "@/components/ui";
export default {
  name: "search-list-view",
  mixins: [bemMixin('result-statistics__progress-bar')],
  data() {
    return {
      score: 50
    }
  },
  computed: {
    rootClasses() {
      const score = this.score;
      return this.bemIf(score <= 50 ,'red') ||
        this.bemIf(score > 50 && score < 70 ,'yellow') ||
        this.bemIf(score >= 70 ,'green')
    },
    progressWidth() {
      return {
        '--score-result': `${this.score}%`
      }
    }
  }
}
</script>

<style scoped>

</style>
