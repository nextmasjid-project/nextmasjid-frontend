import * as actions from './actions';
import * as getters from './getters';
import {
  SET_CITIES,
  SET_REGION
} from '../mutation-types';


const mutations = {
  [SET_CITIES](state, payload) {
    state.cities = payload
  },
  [SET_REGION](state, payload) {
    state.region = payload
  },
};

const state = () => ({
  cities: null,
  region: null
});

export default {
  mutations,
  actions,
  getters,
  state,
};
