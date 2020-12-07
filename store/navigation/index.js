import * as actions from './actions';
import * as getters from './getters';
import { SET_MENU_STATE } from '../mutation-types';


const mutations = {
  [SET_MENU_STATE](state, payload) {
    state.isOpened = payload
  }
};

const state = () => ({
  isOpened: false,
});

export default {
  mutations,
  actions,
  getters,
  state,
};
