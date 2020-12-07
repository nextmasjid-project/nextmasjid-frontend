<template>
  <div class="tile">
    <div class="tile__image" :style="{ backgroundImage: `url(${img})`}"></div>
    <div class="tile__body">
      <h2 class="tile__title">{{ title }}</h2>
      <p class="tile__text">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "tile",
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
  }
}
</script>
