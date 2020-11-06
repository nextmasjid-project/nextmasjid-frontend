<template>
  <header class="main-header">
    <select class="header__lang-select" v-model="lang" @change="switchLang(lang)">
      <option v-for="(lang, i) in availableLocales" :key="`Lang${i}`" :value="lang">{{ languages[lang] }}</option>
    </select>
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
    switchLang(locale) {
      this.setLangAction(locale)
      import(`../../locales/${locale}.json`).then(module => {
        this.$i18n.locale = locale;
        this.$i18n.setLocaleMessage(locale, module.default);
        this.$router.replace(this.switchLocalePath(locale));
      });
    }
  }
}
</script>
