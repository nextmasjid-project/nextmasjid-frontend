import * as actions from './actions';
import * as getters from './getters';
import {
  SET_CITIES,
  SET_REGION,
  SET_HEAT_MAP,
  SET_EDITOR_SUGGESTION_LIST,
  SET_DETAILS_COORDS,
  SET_CURRENT_MOSQUES_LIST,
  SET_MOSQUE_DETAILS,
  SET_COMPONENT_NAME
} from '../mutation-types';


const mutations = {
  [SET_CITIES](state, payload) {
    state.cities = payload
  },
  [SET_REGION](state, payload) {
    state.region = payload
  },
  [SET_HEAT_MAP](state, payload) {
    state.heatMap = payload
  },
  [SET_EDITOR_SUGGESTION_LIST](state, payload) {
    state.editorSuggestion = payload
  },
  [SET_DETAILS_COORDS](state, payload) {
    state.coords = payload
  },
  [SET_CURRENT_MOSQUES_LIST](state, payload) {
    state.currentMosques = payload
  },
  [SET_MOSQUE_DETAILS](state, payload) {
    state.mosqueDetails = payload
  },
  [SET_COMPONENT_NAME](state, payload) {
    state.componentName = payload
  },
};

const state = () => ({
  cities: null,
  region: null,
  heatMap: null,
  editorSuggestion: null,
  currentMosques: [],
  mosqueDetails: null,
  coords: null,
  componentName: 'search-map'
});

export default {
  mutations,
  actions,
  getters,
  state,
};
