<template>
  <div class="contact">
    <!-- Sub Hero -->
    <div class="blog-sub-hero">
      <sub-hero
        :background-image="require(`@/assets/images/open-data-bg.png`)"
        :title="$t('pages.contact.subHero.title')"
        :text="$t('pages.contact.subHero.description')"
      />
    </div>

    <!-- Form   -->
    <div class="contact__form">
      <form class="form" @submit="submitContact">
        <div class="form__row">
          <div class="form__col">
            <div class="form__control">
              <label class="form__label" for="fullName">{{
                $t("pages.contact.form.fullName")
              }}</label>
              <input
                id="fullName"
                class="form__input"
                type="text"
                autocomplete="off"
                v-model="form.fullName"
              />
            </div>
          </div>
          <div class="form__col">
            <div class="form__control">
              <label class="form__label" for="email">{{
                $t("pages.contact.form.email")
              }}</label>
              <input
                id="email"
                class="form__input"
                type="email"
                autocomplete="off"
                v-model="form.email"
              />
            </div>
          </div>
        </div>
        <div class="form__control">
          <label class="form__label" for="message">{{
            $t("pages.contact.form.message")
          }}</label>
          <textarea
            id="message"
            class="form__textarea"
            v-model="form.message"
          ></textarea>
        </div>

        <div class="contact__c2a">
          <button class="button button--primary" type="submit">
            {{ $t("pages.contact.form.report") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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
      }
    };
  },
  methods: {
    submitContact(e) {
      e.preventDefault();
      console.log(this.form);
    }
  }
};
</script>
