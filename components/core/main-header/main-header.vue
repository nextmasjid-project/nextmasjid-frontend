<template>
  <header class="header">
    <div class="header__inner">
      <button class="header__hamburger" @click="menuHandler">
        <icon symbol="icon-hamburger"></icon>
      </button>

      <nuxt-link class="header__link" :to="localePath({name: 'index'})">
        <img class="header__logo" :src="require(`@/assets/images/${$t('header.logo')}`)" alt="NextMasjid">
      </nuxt-link>
    </div>

<!--    <div class="button-group">-->
<!--      <button class="button button&#45;&#45;primary">Start building</button>-->
<!--      <button class="button button&#45;&#45;outline">Start building</button>-->
<!--    </div>-->
<!--    <select class="header__lang-select" v-model="lang" @change="switchLang(lang)">-->
<!--      <option v-for="(lang, i) in availableLocales" :key="`Lang${i}`" :value="lang">{{ languages[lang] }}</option>-->
<!--    </select>-->
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      languages: {
        en: this.$t('languages-dropdown.en'),
        ar: this.$t('languages-dropdown.ar'),
      }
    }
  },
  computed: {
    ...mapGetters('languages', ['getLocale']),
    availableLocales () {
      return this.$i18n.locales.map(el => el.code)
    },
    lang: {
      get: function() {
        return this.getLocale
      },
      set: function(newVal) {
        this.setLangAction(newVal)
      }
    }
  },
  methods: {
    ...mapActions('languages', ['setLangAction']),
    ...mapActions('navigation', ['setMenuAction']),
    menuHandler() {
      this.setMenuAction(true)
    },
    switchLang(locale) {
      this.setLangAction(locale)
      import(`@/locales/${locale}.json`).then(module => {
        this.$i18n.locale = locale;
        this.$i18n.setLocaleMessage(locale, module.default);
        this.$router.replace(this.switchLocalePath(locale));
      });
    }
  }
}
</script>
