<template>
  <div class="sub-hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="sub-hero__content">
      <h1 class="sub-hero__title">{{ title }}</h1>
      <p class="sub-hero__text" v-if="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sub-hero",
    props: {
      backgroundImage: {
        type: String,
        default: 'https://placrhold.it/1920x450'
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
