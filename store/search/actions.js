import API from '@/services/api'
import {SET_CITIES, SET_REGION} from "../mutation-types";
import { URLS } from "@/services/urls";

/**
 * Fetch all regions
 * @param {function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @return {Array[]} list of regions
 */
export async function fetchRegionAction({state, commit}) {
  const { REGION_URL } = URLS
  const response = await API.get(REGION_URL('en'))
  let { data } = response;
  commit(SET_REGION, data)
}


/**
 * Fetch all cities that belong to a region
 * @param {function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {Object}  payload - locale and region id
 * @return {Array[]} list of cities that belong to a region
 */
export async function fetchCitiesAction({state, commit}, { locale, regionId }) {
  const { CITIES_URL } = URLS
  const response = await API.get(CITIES_URL(locale, regionId))
  let { data } = response;
  commit(SET_CITIES, data)
}
