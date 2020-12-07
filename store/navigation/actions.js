import { SET_MENU_STATE } from "../mutation-types";

/**
 * Set menu state
 * @param {function} commit - The vuex commit function
 * @param {string} payload - The new lang value
 * @return {boolean} Set menu state
 */
export async function setMenuAction({commit}, payload) {
  commit(SET_MENU_STATE, payload)
}
