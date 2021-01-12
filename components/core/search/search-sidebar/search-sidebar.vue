<template>
  <aside class="search-sidebar">
    <div class="search-sidebar__inner">
      <h2 class="search-sidebar__title">How to build a Masjid</h2>
      <p class="search-sidebar__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quia.</p>
      <!-- Switcher  -->
      <div class="search-sidebar__switcher">
        <button class="search-sidebar__item search-sidebar__item--active">Map View</button>
        <button class="search-sidebar__item">Grid View</button>
      </div>


      <!-- Filter  -->
      <form class="form search-sidebar__filter">
        <div class="form__control">
            <label for="areas" class="form__label">Region</label>
            <div class="form__wrapper">
              <icon class="form__icon" symbol="icon-arrow-down" size="small" />
              <select id="areas" class="form__input" v-model="region" @change="regionChangeHandler(region.id)">
                <option value="" selected>Choose Region</option>
                <option :value="region" v-for="region in getRegions" :key="region.id">{{ region.name }}</option>
              </select>
            </div>
        </div>
        <div class="form__control">
          <label for="cities" class="form__label">Cities</label>
          <div class="form__wrapper">
            <icon class="form__icon" symbol="icon-arrow-down" size="small" />
            <select id="cities" class="form__input" v-model="city">
              <option value="" selected>Choose City</option>
              <option :value="city" v-for="city in getCities" :key="city.id">{{ city.name }}</option>
            </select>
          </div>
        </div>
        <div class="control control--checkbox">
          <input type="checkbox" class="control__input" id="time1" value="check2"/>
          <label class="control__label" for="time1">
            <span class="control__indicator"></span>
            <span>Choose editor</span>
          </label>
        </div>
          <div class="control control--checkbox">
            <input type="checkbox" class="control__input" id="time2" value="check1"/>
            <label class="control__label" for="time2">
              <span class="control__indicator"></span>
              <span>Choose editor</span>
            </label>
          </div>
      </form>

    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "search-sidebar",
  data() {
    return {
      region: "",
      city: "",
    }
  },
  computed: {
    ...mapGetters('search', ['getRegions', 'getCities']),
    ...mapGetters('languages', ['getLocale']),
  },
  methods: {
    ...mapActions('search', ['fetchCitiesAction']),
    regionChangeHandler(id) {
      console.log(id)
      this.city = "";
      !!Number(id) ? this.fetchCitiesAction({locale: this.getLocale, regionId: id}) : null
    }
  }
}
</script>

