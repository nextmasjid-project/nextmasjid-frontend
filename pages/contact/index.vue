<template>
  <div class="contact">
    <!-- Sub Hero -->
    <div class="contact-sub-hero">
      <sub-hero
        :background-image="require(`@/assets/images/open-data-bg.png`)"
        :title="$t('pages.contact.subHero.title')"
        :text="$t('pages.contact.subHero.description')"
      />
    </div>

    <!-- Form   -->
    <div class="contact__form">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form__row">
          <div class="form__col">
            <div class="form__control">
              <label class="form__label" for="fullName">
                {{ $t("pages.contact.form.fullName") }}
              </label>
              <input
                id="fullName"
                class="form__input"
                type="text"
                autocomplete="off"
                v-model="form.fullName"
                minlength="2"
                name="fullName"
                required
              />
            </div>
          </div>
          <div class="form__col">
            <div class="form__control">
              <label class="form__label" for="email">
                {{ $t("pages.contact.form.email") }}
              </label>
              <input
                id="email"
                class="form__input"
                type="email"
                autocomplete="off"
                v-model="form.email"
                name="email"
                required
              />
            </div>
          </div>
        </div>
        <div class="form__control">
          <label class="form__label" for="message">
            {{ $t("pages.contact.form.message") }}
          </label>
          <textarea
            id="message"
            class="form__textarea"
            v-model="form.message"
            minlength="5"
            name="message"
            required
          ></textarea>
        </div>

        <div class="contact__c2a">
          <button class="button button--primary" type="submit">
            {{ loading ? "جاري المعالجة" : $t("pages.contact.form.submit") }}
          </button>
        </div>
      </form>
    </div>

    <div v-if="showMessage">
      <overlay @close="handleCloseMessage">
        <div :class="error ? 'alert alert--error' : 'alert alert--success'">
          {{ error ? errorMessage : `Thank you! Your data was submitted.` }}
        </div>
      </overlay>
    </div>
  </div>
</template>

<script>
import overlay from "../../components/ui/components/overlay/overlay.vue";
import axios from "axios";

export default {
  components: { overlay },
  name: "index",
  head() {
    return {
      title: this.$t("meta.contact.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.contact.desc")
        }
      ]
    };
  },
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        message: ""
      },
      endpoint: "https://formspree.io/f/xwkawqea",
      loading: false,
      showMessage: false,
      error: null,
      errorMessage: ""
    };
  },
  methods: {
    handleSubmit() {
      this.loading = true;

      axios
        .post(this.endpoint, this.form)
        .then(res => {
          this.loading = false;
          this.showMessage = true;
          this.form.fullName = "";
          this.form.email = "";
          this.form.message = "";
        })
        .catch(err => {
          this.loading = false;
          this.error = true;
          this.errorMessage = err;
          this.showMessage = true;
        });
    },
    handleCloseMessage() {
      this.showMessage = false;
    }
  }
};
</script>
