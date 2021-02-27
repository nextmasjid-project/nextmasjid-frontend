<template>

</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t('meta.article.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.article.desc')
        }
      ]
    }
  }
}
</script>
