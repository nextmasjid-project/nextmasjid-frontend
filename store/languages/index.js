import * as actions from './actions';
import * as getters from './getters';
import { SET_LANG } from '../mutation-types';


const mutations = {
  [SET_LANG](state, payload) {
    state.locale = payload
  }
};

const state = () => ({
  locale: 'en',
});

export default {
  mutations,
  actions,
  getters,
  state,
};
