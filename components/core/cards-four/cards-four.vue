<template>
  <div class="cards-four">
    <h1 class="cards-four__title">{{ title }}</h1>

    <hr />

    <p class="cards-four__body">{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "body"]
};
</script>

<style></style>
