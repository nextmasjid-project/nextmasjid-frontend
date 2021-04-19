import * as actions from "./actions";
import { SET_CONTACT_FORM_DATA } from "../mutation-types";

const mutations = {
  [SET_CONTACT_FORM_DATA](state, payload) {
    state.contactForms = payload;
  }
};

const state = () => ({
  contactForms: {}
});

export default {
  mutations,
  actions,
  state
};
