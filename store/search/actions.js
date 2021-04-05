import API from '@/services/api'
import {
  SET_CITIES,
  SET_REGION,
  SET_HEAT_MAP,
  SET_EDITOR_SUGGESTION_LIST,
  SET_DETAILS_COORDS,
  SET_CURRENT_MOSQUES_LIST,
  SET_MOSQUE_DETAILS,
  SET_COMPONENT_NAME
} from "../mutation-types";
import { URLS } from "@/services/urls";


/**
 * Fetch all regions
 * @param {function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {string} payload - the current locale value
 * @return {Array[]} list of regions
 */
export async function fetchRegionAction({state, commit}, payload) {
  const { REGION_URL } = URLS
  const response = await API.get(REGION_URL(payload))
  let { data } = response;
  commit(SET_REGION, data)
}


/**
 * Fetch all cities that belong to a region
 * @param {Function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {string} locale - app locale
 * @param {Object[]} payload - list that contain cities that belong to the region
 * @return {Object[]} list of cities that belong to a region
 */
export async function assignCitiesAction({state, commit}, payload) {
  commit(SET_CITIES, payload)
}


/**
 * Fetch all location that have heat map
 * @param {Function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {Object}  payload - coordinates
 * @return {Object[]} list of location that have heat map
 */
export async function fetchHeatMapList({state, commit}, payload) {
  const { HEAT_MAP_URL } = URLS
  
  let step = 2
  let factor = 1
  let currentZoom = payload.zoom
  
  
  if(currentZoom >= 17)
    step= factor * 1;
  else if(currentZoom >= 16)
    step= factor * 4
  else if(currentZoom >= 15)
    step= factor * 8
  else if(currentZoom >= 14)
    step= factor * 16
  else if(currentZoom >= 13)
    step= factor * 36
  else if(currentZoom >= 12)
    step= factor * 64
  else if(currentZoom >= 11)
    step= 128
  else if(currentZoom >= 10)
    step= 256
  else if(currentZoom >= 6)
    step= 512
  else if(currentZoom >= 1)
    step= 1024  
  
    payload.currentZoom = step
  

  const response = await API.get(HEAT_MAP_URL(payload))
  let { data } = response;
  const TRANSFORMED_ARR = data.map(el => ({location: {lat: el.lat, lng: el.lng}, weight: el.value}));
  commit(SET_HEAT_MAP, TRANSFORMED_ARR)
  return Promise.resolve(TRANSFORMED_ARR)
}


/**
 * Fetch all current mosques
 * @param {Function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {Object}  payload - coordinates
 * @return {Object[]} list of current mosques
 */
export async function fetchCurrentMosques({state, commit}, payload) {
  const { CURRENT_MOSQUES_URL } = URLS
  const response = await API.get(CURRENT_MOSQUES_URL(payload))
  let { data } = response;
  commit(SET_CURRENT_MOSQUES_LIST, data)
  return Promise.resolve(data)
}


/**
 * Fetch current location data
 * @param {Function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {Object}  payload - coordinates
 * @return {Object} contain the score and the address of the selected location
 */
export async function fetchCurrentLocationData({state, commit}, payload) {
  const { CURRENT_LOCATION_URL } = URLS
  const response = await API.get(CURRENT_LOCATION_URL(payload))
  let { data } = response;
  return Promise.resolve(data)
}


/**
 * Fetch all editors suggestion where to build mosques
 * @param {Function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {string}  payload - The lang value
 * @return {Object[]} all editors suggestion where to build mosques
 */
export async function fetchAllEditorsSuggestion({state, commit}, payload) {
  const { EDITOR_SUGGESTION_URL } = URLS
  const response = await API.get(EDITOR_SUGGESTION_URL)
  let { data } = response;
  commit(SET_EDITOR_SUGGESTION_LIST, data)
  return Promise.resolve(data)
}


/**
 * Set lat, lng values when you click on any point on the map
 * @param {Function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {Object}  payload - lat, lng values
 * @return {Object} contain lat, lng values for the clicked position
 */
export function setCoordsAction({state, commit}, payload) {
  commit(SET_DETAILS_COORDS, payload)
}

/**
 * Set component name to toggle map view or list view
 * @param {Function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {string}  payload - component name
 * @return {string} component name
 */
export function setComponentName({state, commit}, payload) {
  commit(SET_COMPONENT_NAME, payload)
}


/**
 * Fetch mosque details
 * @param {Function} commit - The vuex commit function
 * @param {Object}  state - The vuex state object
 * @param {Object}  payload - lat, lng, lang values
 * @return {Object} contain mosque details information
 */
export async function fetchMosqueDetailsAction({state, commit}, payload) {
  const { MOSQUE_DETAILS_URL } = URLS
  const response = await API.get(MOSQUE_DETAILS_URL(payload))
  let { data } = response;
  commit(SET_MOSQUE_DETAILS, data)
  return Promise.resolve(data)
}
