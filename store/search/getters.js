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
