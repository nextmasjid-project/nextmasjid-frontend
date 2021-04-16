<template>
  <div class="overlay">
    <div class="overlay__content">
      <button class="overlay__button" @click="$emit('close')">
        <ui-icon symbol="close-icon" />
      </button>

      <div class="overlay__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import UiIcon from "../icon/icon";

export default {
  components: { UiIcon }
};
</script>
