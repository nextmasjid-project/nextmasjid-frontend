<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="overlay__content">
      <button class="overlay__button" @click="$emit('close')">
        <!-- <ui-icon symbol="close-icon" /> -->
        {{ $t("modal.closeButton") }}
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
