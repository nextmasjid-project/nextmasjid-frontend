<template>
  <footer class="main-footer">
    <div class="main-footer__top">
      <div class="main-footer__text">
        <nuxt-link
          class="main-header__link"
          :to="localePath({ name: 'open-data' })"
        >
          <!-- {{ $t("footer.linkText") }} -->
          NextMasjid Open Data
        </nuxt-link>
        <span>{{ $t("footer.text") }}</span>
      </div>
      <nuxt-link class="main-footer__link" :to="localePath({ name: 'index' })">
        <img
          class="main-footer__logo"
          src="@/assets/images/logo-plain.svg"
          :alt="$t('header.logoAlt')"
        />
      </nuxt-link>
    </div>
    <div class="main-footer__bottom">
      <!-- <a :href="$t('footer.socialMedia.facebook')" target="_blank" class="main-footer__social-link main-footer__social-link--facebook">
        <icon class="main-footer__svg" symbol="icon-facebook"></icon>
      </a> -->
      <a
        href="http://twitter.com/nextmasjid"
        target="_blank"
        class="main-footer__social-link main-footer__social-link--twitter"
      >
        <icon class="main-footer__svg" symbol="icon-twitter"></icon>
      </a>
      <!-- <a :href="$t('footer.socialMedia.instagram')" target="_blank" class="main-footer__social-link main-footer__social-link--instagram">
        <icon class="main-footer__svg" symbol="icon-instagram"></icon>
      </a> -->
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
