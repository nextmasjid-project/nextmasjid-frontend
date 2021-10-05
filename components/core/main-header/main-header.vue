<template>
  <header class="main-header" :class="`is-${$t('direction')}`">
    <div class="main-header__inner">
      <nuxt-link class="main-header__link" :to="localePath({ name: 'index' })">
        <img
          class="main-header__logo"
          :src="require(`@/assets/images/${$t('header.logo')}`)"
          :alt="$t('header.logoAlt')"
        />
      </nuxt-link>

      <button class="main-header__hamburger" @click="menuHandler">
        <icon symbol="icon-hamburger"></icon>
      </button>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("navigation", ["setMenuAction"]),
    menuHandler() {
      this.setMenuAction(true);
    }
  }
};
</script>
