<template>
  <div class="cards-grid">
    <img
      :src="require(`@/assets/images/${icon}`)"
      alt="data"
      class="cards-grid__icon"
    />
    <h2 class="cards-grid__title">
      <a :href="link" target="_blank" rel="noopener noreferrer" v-if="link">
        {{ title }}
      </a>

      <div v-else>Coming soon</div>
    </h2>
    <p class="cards-grid__body">
      {{ body }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "link", "body"],
};
</script>


