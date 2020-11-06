import { SET_LANG } from "../mutation-types";

/**
 *
 * @param {function} commit - The vuex commit function
 * @param {String} payload - The new lang value
 * @return {String} Set new lang
 */
export async function setLangAction({commit}, payload) {
  document.querySelector('html').setAttribute('lang', payload)
  commit(SET_LANG, payload)
}
