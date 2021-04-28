<template>
  <nav
    class="navigation"
    role="navigation"
    :class="{ 'is-opened': getMenuState }"
    @click="setMenuAction(false)"
  >
    <div class="navigation__inner" @click.stop :class="`is-${$t('direction')}`">
      <button class="navigation__close" @click="setMenuAction(false)">
        <icon symbol="icon-close" />
      </button>

      <ul class="navigation__list">
        <li
          class="navigation__item"
          v-for="item in $t('header.navigation')"
          :key="item.title"
        >
          <nuxt-link
            class="navigation__link"
            :to="localePath({ name: item.route })"
          >
            <icon class="navigation__icon" :symbol="item.icon"></icon>
            <h2 class="navigation__text">{{ item.title }}</h2>
          </nuxt-link>
        </li>
        <!-- <li class="navigation__lang">
          <nuxt-link class="navigation__lang-link" :to="switchLocalePath('ar')">
            <img class="navigation__lang-icon" src="@/assets/images/flags/ar.svg" :alt="$t('languages.ar')">
            <span class="navigation__lang-text">{{ $t('languages.ar') }}</span>
          </nuxt-link>
          <nuxt-link class="navigation__lang-link" :to="switchLocalePath('en')">
            <img class="navigation__lang-icon" src="@/assets/images/flags/en.svg" :alt="$t('languages.en')">
            <span class="navigation__lang-text">{{ $t('languages.en') }}</span>
          </nuxt-link>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "navigation",
  data() {
    return {
      languages: {
        en: this.$t("languages.en"),
        ar: this.$t("languages.ar")
      }
    };
  },
  watch: {
    $route: {
      handler: function() {
        this.setMenuAction(false);
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters("navigation", ["getMenuState"]),
    ...mapGetters("languages", ["getLocale"]),
    availableLocales() {
      return this.$i18n.locales.map(el => el.code);
    },
    lang: {
      get: function() {
        return this.getLocale;
      },
      set: function(newVal) {
        this.setLangAction(newVal);
      }
    }
  },
  methods: {
    ...mapActions("navigation", ["setMenuAction"]),
    ...mapActions("languages", ["setLangAction"]),
    switchLang(locale) {
      this.setLangAction(locale);
      import(`@/locales/${locale}.json`).then(module => {
        this.$i18n.locale = locale;
        this.$i18n.setLocaleMessage(locale, module.default);
        this.$router.replace(this.switchLocalePath(locale));
      });
    }
  }
};
</script>
