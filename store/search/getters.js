/**
 * Get list of regions
 * @param {object} state - The vuex state object
 * @return {array[]} List of all regions
 */
export const getRegions = (state) => {
  return state.region
};


/**
 * Get list of cities
 * @param {object} state - The vuex state object
 * @return {array[]} List of all cities
 */
export const getCities = (state) => {
  return state.cities
};


/**
 * Get list of heat map list
 * @param {object} state - The vuex state object
 * @return {array[]} List of all heat map
 */
export const getHeatMapList = (state) => {
  return state.heatMap.slice(0, 20)
};


/**
 * Get all editors suggestion where to build mosques
 * @param {object} state - The vuex state object
 * @return {array[]} List of all editors suggestion where to build mosques
 */
export const getEditorSuggestionList = (state) => {
  return state.editorSuggestion
};
