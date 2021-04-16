<template>
  <svg class="icon" tabindex="-1" focusable="false" :class="rootClasses">
    <use v-bind="{ 'xlink:href': symbolName }" />
  </svg>
</template>

<script>
import bemMixin from "../../mixins/bem";

export default {
  mixins: [bemMixin("icon")],
  props: {
    symbol: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "medium"
    },
    dynamicSize: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rootClasses() {
      return [this.bemAdd(!this.dynamicSize ? this.size : "")];
    },
    symbolName() {
      return `#${this.symbol}`;
    }
  }
};
</script>
