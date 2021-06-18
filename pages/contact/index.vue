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
          <div v-if="loading">
            Loading...
          </div>
          <div v-else>
            <button class="button button--primary" type="submit">
              {{ $t("pages.contact.form.submit") }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <div v-if="showMessage">
      <overlay @close="handleCloseMessage">
        <div :class="error ? 'alert alert--error' : 'alert alert--success'">
          {{
            error
              ? `Ups! Submit Failed.`
              : `Thank you! Your data was submitted.`
          }}
        </div>
      </overlay>
    </div>
  </div>
</template>

<script>
import overlay from "../../components/ui/components/overlay/overlay.vue";
import axios from "axios";
// import API from "@/services/api";
// import { URLS } from "@/services/urls";

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
      endpoint: "https://formspree.io/f/xjvjrpvb",
      loading: false,
      showMessage: false,
      error: null
    };
  },
  methods: {
    async handleSubmit() {
      this.loading = true;

      const response = await axios.post(this.endpoint, this.form);
      let { data } = response;

      if (data.ok) {
        this.loading = false;
        this.form.fullName = "";
        this.form.email = "";
        this.form.message = "";
      } else {
        this.error = true;
      }

      this.showMessage = true;

      // const fd = new FormData();
      // fd.append("Name", this.form.fullName);
      // fd.append("Email", this.form.email);
      // fd.append("Content", this.form.message);

      // const { CONTACT_URL } = URLS;
      // const response = await API.post(CONTACT_URL, fd);
      // let { data } = response;
      // console.log(data);

      // this.error = true;

      // setTimeout(() => {
      //   this.showMessage = true;
      //   this.loading = false;
      // }, 1000);
      // }
    },
    handleCloseMessage() {
      this.showMessage = false;
    }
  }
};
</script>
