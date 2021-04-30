<template>
  <div
    class="text-content"
    :class="rootClasses"
    :style="[isImage ? { backgroundImage: `url(${backgroundImage})` } : null]"
  >
    <div class="text-content__inner">
      <template v-if="isImage && isBgWhite">
        <div class="text-content__wrapper">
          <h3>{{ title }}</h3>
          <p v-html="body" />
        </div>
      </template>
      <template v-else>
        <h3>{{ title }}</h3>
        <div v-html="body" />
      </template>
    </div>
  </div>
</template>

<script>
import bemMixin from "@/components/ui/mixins/bem";
export default {
  name: "text-content",
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    isImage: {
      type: Boolean,
      default: false
    },
    isColor: {
      type: Boolean,
      default: false
    },
    isBgWhite: {
      type: Boolean,
      default: false
    },
    backgroundImage: {
      type: String,
      required: false
    }
  },
  mixins: [bemMixin("text-content")],
  computed: {
    rootClasses() {
      return [
        this.bemIf(this.isImage, "bg-image"),
        this.bemIf(this.isColor, "bg-color"),
        this.bemIf(this.isBgWhite && this.isImage, "bg-white")
      ];
    }
  }
};
</script>
