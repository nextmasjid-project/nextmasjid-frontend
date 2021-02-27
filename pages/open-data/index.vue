<template>

</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t('meta.openData.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.openData.desc')
        }
      ]
    }
  }
}
</script>
