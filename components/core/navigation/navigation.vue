<template>
  <nav class="navigation" role="navigation" :class="{'is-opened': getMenuState}" @click="setMenuAction(false)">
    <div class="navigation__inner" @click.stop>
      <button class="navigation__close" @click="setMenuAction(false)">
        <icon symbol="icon-close" />
      </button>

      <ul class="navigation__list" :class="`is-${$t('direction')}`">
        <li class="navigation__item" v-for="item in $t('header.navigation')" :key="item.title">
          <nuxt-link class="navigation__link" :to="{name: item.route}">
            <icon class="navigation__icon" :symbol="item.icon"></icon>
            <h2 class="navigation__text">{{ item.title }}</h2>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

  export default {
    name: "navigation",
    computed: {
      ...mapGetters('navigation', ['getMenuState']),
    },
    methods: {
      ...mapActions('navigation', ['setMenuAction']),
    }
  }
</script>
