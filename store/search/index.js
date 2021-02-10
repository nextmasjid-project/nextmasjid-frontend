import * as actions from './actions';
import * as getters from './getters';
import {
  SET_CITIES,
  SET_REGION,
  SET_HEAT_MAP,
  SET_EDITOR_SUGGESTION_LIST
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
};

const state = () => ({
  cities: null,
  region: null,
  heatMap: null,
  editorSuggestion: null,
});

export default {
  mutations,
  actions,
  getters,
  state,
};
