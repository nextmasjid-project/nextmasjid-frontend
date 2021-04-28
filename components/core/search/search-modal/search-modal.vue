<template>
  <div class="search-modal">
    <h2>{{ $t("pages.search.firstModal.title") }}</h2>
    <div class="tiles">
      <div
        v-for="tile in $t('pages.search.firstModal.content')"
        :key="tile.text"
      >
        <img :src="require(`@/assets/images/${tile.img}`)" alt="maps" />
        <p>
          {{ tile.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
