import API from '@/services/api'
import {
  SET_CITIES,
  SET_REGION,
  SET_HEAT_MAP,
  SET_EDITOR_SUGGESTION_LIST
} from "../mutation-types";
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

/**
 * Fetch all location that have heat map
 * @param {function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {Object}  payload - coordinates
 * @return {Array[]} list of location that have heat map
 */
export async function fetchHeatMapList({state, commit}, payload) {
  const { HEAT_MAP_URL } = URLS
  const response = await API.get(HEAT_MAP_URL(payload))
  let { data: { data} } = response;
  const TRANSFORMED_ARR = data.map(el => ({location: {lat: el.lat, lng: el.long}, weight: el.wegiht})).slice(0, 30)
  commit(SET_HEAT_MAP, TRANSFORMED_ARR)
  return Promise.resolve(TRANSFORMED_ARR)
}

/**
 * Fetch current location data
 * @param {function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {Object}  payload - coordinates
 * @return {object} contain the score and the address of the selected location
 */
export async function fetchCurrentLocationData({state, commit}, payload) {
  const { CURRENT_LOCATION_URL } = URLS
  const response = await API.get(CURRENT_LOCATION_URL(payload))
  let { data } = response;
  return Promise.resolve(data)
}


/**
 * Fetch all editors suggestion where to build mosques
 * @param {function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @return {Array[]} all editors suggestion where to build mosques
 */
export async function fetchAllEditorsSuggestion({state, commit}) {
  const { EDITOR_SUGGESTION_URL } = URLS
  const response = await API.get(EDITOR_SUGGESTION_URL)
  let { data } = response;
  commit(SET_EDITOR_SUGGESTION_LIST, data)
  return Promise.resolve(data)
}
