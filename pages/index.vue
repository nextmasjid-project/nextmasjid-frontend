<template>
  <hero />
</template>

<script>
export default {
  layout: 'home-page',
  head() {
    return {
      title: this.$t('meta.home.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.home.desc')
        }
      ]
    }
  }
}
</script>
