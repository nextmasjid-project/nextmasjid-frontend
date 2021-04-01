<template>
  <aside class="search-sidebar">
    <div class="search-sidebar__inner">
      <h2 class="search-sidebar__title">{{ $t('pages.search.sidebar.title') }}</h2>
      <p class="search-sidebar__text">{{ $t('pages.search.sidebar.description') }}</p>

      <!-- Filter  -->
      <form class="form search-sidebar__filter">
        <div class="form__control">
            <label for="areas" class="form__label">{{ $t('pages.search.sidebar.region') }}</label>
            <div class="form__wrapper">
              <icon class="form__icon" symbol="icon-arrow-down" size="small" />
              <select id="areas" class="form__input" v-model="region" @change="regionChangeHandler(region)">
                <option value="" selected>{{ $t('pages.search.sidebar.chooseRegion') }}</option>
                <option :value="region" v-for="region in getRegions" :key="region.id">{{ region.name }}</option>
              </select>
            </div>
        </div>
        <div class="form__control">
          <label for="cities" class="form__label">{{ $t('pages.search.sidebar.cities') }}</label>
          <div class="form__wrapper">
            <icon class="form__icon" symbol="icon-arrow-down" size="small" />
            <select id="cities" class="form__input" v-model="city" @change="cityChangeHandler">
              <option value="" selected>{{ $t('pages.search.sidebar.chooseCity') }}</option>
              <option :value="city" v-for="city in getCities" :key="city.id">{{ city.name }}</option>
            </select>
          </div>
        </div>
        <div class="control control--checkbox">
          <input type="checkbox" class="control__input" id="time1" v-model="editorChoice" @change="$emit('toggleEditorChoice', editorChoice)"/>
          <label class="control__label" for="time1">
            <span class="control__indicator"></span>
            <span>{{ $t('pages.search.sidebar.editorChoice') }}</span>
          </label>
        </div>
        <div class="control control--checkbox">
          <input type="checkbox" class="control__input" id="time2" v-model="currentMosques" @change="$emit('toggleCurrentMosques', currentMosques)" />
          <label class="control__label" for="time2">
            <span class="control__indicator"></span>
            <span>{{ $t('pages.search.sidebar.currentMosques') }}</span>
          </label>
        </div>
      </form>

    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { centerMap } from '../search-map/map-helpers';

export default {
  name: "search-sidebar",
  props: {
    GoogleMaps: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      searchItems: null,
      region: "",
      city: "",
      editorChoice: null,
      currentMosques: null,
      isClassActive: null
    }
  },
  computed: {
    ...mapGetters('search', ['getRegions', 'getCities', 'getComponentName']),
    ...mapGetters('languages', ['getLocale']),
  },
  methods: {
    ...mapActions('search', ['assignCitiesAction', 'setComponentName']),
    regionChangeHandler(region) {
      const { cities } = region
      this.city = "";
      this.assignCitiesAction(cities)
    },
    cityChangeHandler() {
      const { Map } = this.GoogleMaps;
      const { lat, lng } = this.city;
      if ( lat && lng ) {
        centerMap({Map}, {latlng: {lat, lng}, method: 'panTo', zoom: 10});
      }
    }
  }
}
</script>

