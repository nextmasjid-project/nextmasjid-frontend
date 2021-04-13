import mapStyle from './map-styles.json';

export const MINIMUM_ZOOM_LEVEL = 7;
export const MAXIMUM_ZOOM_LEVEL = 20;
const LAT_LNG = {lat: 24.712376311630543, lng: 46.67545729736327}

const CUSTOM_MAP_TYPE_ID = 'roadmap';
const CUSTOM_MAP_TYPE_NAME = 'COLLECTION_POINTS';

export function createMapOptions({ Api }) {
  return {
    mapTypeControlOptions: {
      mapTypeIds: [],
    },
    zoom: 14,
    clickableIcons: false,
    gestureHandling: "greedy",
    center: createLatLng({Api}, LAT_LNG),
    minZoom: MINIMUM_ZOOM_LEVEL,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: true,
    zoomControlOptions: {
      position: Api.ControlPosition.BOTTOM_TOP,
    },
    styles: mapStyle
  };
}

/**
 * Set up a google bounds instance
 * @param {any} Api - The API
 * @return {any} The google maps LatLngBounds object
 */
export function createBounds({ Api }) {
  return new Api.LatLngBounds();
}

/**
 * Create a maps api Icon
 * @param {any} Api - The API
 * @param {string} url - An icon url
 * @param {number} size - An icon size
 * @return {any} The google maps Icon object
 */
export function createIcon({ Api }, { url, size}) {
  return {
    scaledSize: new Api.Size(size, size),
    url,
  };
}

/**
 * Create a maps api LatLng object
 * @param {any} Api - The API
 * @param {number} lat
 * @param {number} lng
 * @return {any} The google maps LatLng object
 */
export function createLatLng({ Api }, { lat, lng }) {
  return new Api.LatLng({ lat, lng});
}

// export function createLatLngWeight({ Api }, { lat, lng, weight }) {
//   var loc = new Api.LatLng({ lat, lng});
//   return {location:loc, weight: weight};
// }


/**
 * Set up a google maps instance and a marker
 * @param {object} Api - The API
 * @param {HTMLElement} element - The target element
 * @return {any} The google maps Map object
 */
export function createMap({ Api }, { element}) {
  const Map = new Api.Map(element, createMapOptions({ Api }));
  const CustomMapType = new Api.StyledMapType(mapStyle, { name: CUSTOM_MAP_TYPE_NAME });
  Map.mapTypes.set(CUSTOM_MAP_TYPE_ID, CustomMapType);
  Map.setMapTypeId(CUSTOM_MAP_TYPE_ID);

  return Map;
}

/**
 * Create a maps api Marker
 * @param {any} Api - The API
 * @param {any} Map - The map object
 * @param {any} entry - The entry object
 * @return {any} The google maps Marker object
 */
export function createMarker({ Api, Map },  entry ) {
  return new Api.Marker({
    map: Map,
    optimized: false,
    entry,
  });
}


/**
 * Set up a google bounds instance
 * @param {any} Api - The API
 * @return {any} The google maps LatLngBoundsLiteral object
 */
export function createInitialBounds({ Api }) {
  return new Api.LatLngBoundsLiteral();
}


/**
 * Set up a google heatmap instance
 * @param {any} Api - The API
 * @param {any} Map - The map object
 * @param {any} list - The list of heatmap locations
 * @return {any} The google maps heatmap object
 */
export function createHeatMapInstance({ Api, Map }, list) {
  return new Api.visualization.HeatmapLayer({
    data: list,
    map: Map,
    radius: 50
  });
}

/**
 * Create info window
 * @param {any} Api - The API
 * @param {any} Map - The map object
 * @param {any} content - info window content
 * @return {any} The google maps info window
 */
export function createInfoWindow({ Api }, content) {
  return new Api.InfoWindow(content);
}
