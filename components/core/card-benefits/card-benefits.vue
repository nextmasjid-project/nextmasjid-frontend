<template>
  <div class="card-benefits">
    <img :src="img" :alt="title">
    <h2 class="card-benefits__title">{{ title }}</h2>
    <p class="card-benefits__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "card-benefits",
  props: {
    img: {
      type: String,
      default: 'http://placehold.it/60x60'
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
