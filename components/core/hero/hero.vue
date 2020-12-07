<template>
  <div class="hero">
    <client-only>
      <swiper class="swiper hero__swiper" :options="swiperOptions">
        <swiper-slide
          class="hero__slide"
          :key="slide.title"
          v-for="slide in $t('pages.home.hero.slider')">
          <img class="hero__img" :src="require(`@/assets/images/${slide.img}`)" :alt="slide.title">
          <div class="hero__content">
            <h1 class="hero__title">{{ slide.title }}</h1>
            <p class="hero__description">{{ slide.description }}</p>
            <div class="button-group">
              <button class="button button--outline">{{ slide.secondaryButton }}</button>
              <button class="button button--primary"> {{ slide.primaryButton }}</button>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'hero',
  data() {
    return {
      swiperOptions: {
        speed: 1200,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import "hero";
</style>
