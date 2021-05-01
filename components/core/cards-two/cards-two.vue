<template>
  <div class="cards-two">
    <div class="cards-two-left">
      <img
        class="cards-two__icon"
        :src="require(`@/assets/images/${icon}`)"
        :alt="`alt-${icon}`"
      />
    </div>

    <!-- <hr /> -->

    <div class="cards-two-right">
      <h2 class="cards-two__title">
        {{ title }}
      </h2>
      <p class="cards-two__body" v-html="body" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "body"]
};
</script>

<style></style>
