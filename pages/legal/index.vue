<template>

</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t('meta.legal.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.legal.desc')
        }
      ]
    }
  }
}
</script>
