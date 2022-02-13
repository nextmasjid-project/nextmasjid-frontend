<template>
  <div class="social-share">
    <a
      v-for="share in shares"
      :key="share.name"
      class="resp-sharing-button__link"
      :href="share.href"
      target="_blank"
      rel="noopener"
      :aria-label="share.name"
    >
      <div
        class="resp-sharing-button"
        :class="`resp-sharing-button--${share.name}`"
      >
        <div aria-hidden="true" class="resp-sharing-button__icon">
          <icon :symbol="`icon-share-${share.name}`" />
        </div>
        {{ share.text }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["url", "content"],
  data() {
    return {
      shares: [
        {
          name: "twitter",
          text: "Twitter",
          href: `https://twitter.com/intent/tweet/?text=${this.content.meta.title}&url=${this.url}`,
        },
        {
          name: "whatsapp",
          text: "Whatsapp",
          href: `whatsapp://send?text=${this.content.meta.title}%20${this.url}`,
        },
      ],
    };
  },
};
</script>
