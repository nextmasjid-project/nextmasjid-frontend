import { SET_CONTACT_FORM_DATA } from "../mutation-types";
import API from "@/services/api";
import { URLS } from "@/services/urls";

/**
 * Set contact form data
 * @param {function} commit - The vuex commit function
 * @param {Object} payload - The contact form value
 * @return {Object} Set contact form state
 */
export async function setContactFormData({ state, commit }, payload) {
  const fd = new FormData();
  fd.append("Name", payload.fullName);
  fd.append("Email", payload.email);
  fd.append("Content", payload.message);

  const { CONTACT_URL } = URLS;
  const response = await API.post(CONTACT_URL, fd);
  let { data } = response;
  //   console.log(data);
  commit(SET_CONTACT_FORM_DATA, data);
}
