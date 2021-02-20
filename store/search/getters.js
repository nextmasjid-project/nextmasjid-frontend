/**
 * Get list of regions
 * @param {object} state - The vuex state object
 * @return {array[]} List of all regions
 */
export const getRegions = state => state.region;


/**
 * Get list of cities
 * @param {object} state - The vuex state object
 * @return {array[]} List of all cities
 */
export const getCities = state => state.cities;


/**
 * Get list of heat map list
 * @param {object} state - The vuex state object
 * @return {array[]} List of all heat map
 */
export const getHeatMapList = state => state.heatMap?.slice(0, 20);


/**
 * Get all editors suggestion where to build mosques
 * @param {object} state - The vuex state object
 * @return {array[]} List of all editors suggestion where to build mosques
 */
export const getEditorSuggestionList = state => state.editorSuggestion;


/**
 * Get all current mosques list
 * @param {object} state - The vuex state object
 * @return {array[]} List of all current mosques
 */
export const getCurrentMosquesList = state => state.currentMosques;


/**
 * Get mosque details information
 * @param {object} state - The vuex state object
 * @return {Object} contain mosque details information
 */
export const getMosqueDetails = state => state.mosqueDetails;


/**
 * Get component name
 * @param {object} state - The vuex state object
 * @return {string} component name
 */
export const getComponentName = state => state.componentName;
