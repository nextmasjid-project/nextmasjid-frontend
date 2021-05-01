<template>
  <div class="cards-grid">
    <img
      :src="require(`@/assets/images/${icon}`)"
      alt="data"
      class="cards-grid__icon"
    />
    <h2 class="cards-grid__title">
      <a :href="link" target="_blank" rel="noopener noreferrer">
        {{ title }}
      </a>
    </h2>
    <p class="cards-grid__body">
      {{ body }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "link", "body"]
};
</script>

<style></style>
