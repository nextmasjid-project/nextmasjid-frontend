/**
 * Get menu state
 * @param {object} state - The vuex state object
 * @return {boolean} Menu state
 */
export const getMenuState = (state) => {
  return state.isOpened
};
