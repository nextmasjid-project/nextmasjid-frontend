<template>
  <h1>{{ $route.params.id }}</h1>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: this.$t('meta.blog.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.blog.desc')
        }
      ]
    }
  }
}
</script>
