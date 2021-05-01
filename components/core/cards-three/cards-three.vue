<template>
  <div class="cards-three">
    <img
      :src="require(`@/assets/images/${icon}`)"
      :alt="`alt-${icon}`"
      class="cards-three__img"
    />
    <h2 class="cards-three__title">{{ title }}</h2>
    <p class="cards-three__body">{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "body", "index"]
};
</script>

<style></style>
