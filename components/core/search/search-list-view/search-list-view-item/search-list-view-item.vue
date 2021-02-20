<template>
  <div class="result-statistics">
    <div class="result-statistics__header">
      <h1 class="result-statistics__score">
        <span class="result-statistics__score-percentage">55</span>
        <span class="result-statistics__score-symbol">%</span>
      </h1>
      <div class="result-statistics__progress">
        <span class="result-statistics__progress-bar" :class="rootClasses" :style="progressWidth"></span>
      </div>
    </div>
    <div class="result-statistics__body">
      <h2 class="result-statistics__body-title">King Fahd District</h2>
      <p class="result-statistics__body-text">Lorem ipsum dolor sit amet, consectetur.</p>
    </div>
    <div class="result-statistics__footer">
      <button class="button button--primary">Print report</button>
      <button class="button button--outline">Share options</button>
      <button class="button button--outline">Add to favorite</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-list-view-item",
  props: {
    rootClasses: {
      type: String,
    },
    progressWidth: {
      type: Object
    }
  }
}
</script>
