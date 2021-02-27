<template>
  <search />
</template>

<script>
  export default {
    name: "index",
    layout: 'home-page',
    head() {
      return {
        title: this.$t('meta.search.title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('meta.search.desc')
          }
        ]
      }
    }
  }
</script>
