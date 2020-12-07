<template>
  <div class="card">
    <icon v-if="icon" size="xxx-large" class="card__icon" :symbol="icon" />
    <h2 class="card__title">{{ title }}</h2>
    <div class="card__body">
      <p class="card__text" v-if="!Array.isArray(body)">{{ body }}</p>
      <ul class="card__list" v-else>
        <li class="card__item" v-for="item in body">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card",
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      body: {
        type: [String, Array],
        default: ''
      },
    }
  }
</script>
