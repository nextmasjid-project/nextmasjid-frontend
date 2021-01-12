import mapStyle from './map-styles.json';
import { fitBounds } from './map-helpers';

export const MINIMUM_ZOOM_LEVEL = 4;
export const MAXIMUM_ZOOM_LEVEL = 20;

const CUSTOM_MAP_TYPE_ID = 'COLLECTION_POINTS_MAP_STYLE';
const CUSTOM_MAP_TYPE_NAME = 'COLLECTION_POINTS';
const MAP_MARKER_CLUSTER_STYLES = [
  {
    width: 60,
    height: 60,
    url: `${ process.env.PUBLIC_PATH }/Images/dummy_marker_cluster.svg`,
  },
];

export function createMapOptions({ Api }) {
  return {
    mapTypeControlOptions: {
      mapTypeIds: [],
    },
    minZoom: MINIMUM_ZOOM_LEVEL,
    fullscreenControl: false,
    gestureHandling: 'cooperative',
    streetViewControl: false,
    zoomControl: true,
    zoomControlOptions: {
      position: Api.ControlPosition.TOP_LEFT,
    },
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
 * @return {any} The google maps Icon object
 */
export function createIcon({ Api }, { url }) {
  return {
    scaledSize: new Api.Size(32, 32),
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

/**
 * Set up a google maps instance and a marker
 * @param {object} Api - The API
 * @param {HTMLElement} element - The target element
 * @param {object} initialBounds - The initial bounds for the map to focus
 * @return {any} The google maps Map object
 */
export function createMap({ Api }, { element, initialBounds }) {
  const Map = new Api.Map(element, createMapOptions({ Api }));
  const CustomMapType = new Api.StyledMapType(mapStyle, { name: CUSTOM_MAP_TYPE_NAME });
  Map.mapTypes.set(CUSTOM_MAP_TYPE_ID, CustomMapType);
  Map.setMapTypeId(CUSTOM_MAP_TYPE_ID);

  fitBounds({ Map }, { bounds: initialBounds, padding: null });

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
 * Create a maps api MarkerCluster
 * @link http://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/markerclustererplus/docs/reference.html
 * @param {any} Map - The map object
 * @param {any} MarkerClusterer - The MarkerCluster constructor
 * @param {any[]} Markers - A list of google maps Marker objects
 * @return {any} The google maps MarkerCluster object
 */
export function createMarkerCluster({ Map, MarkerClusterer }) {
  return new MarkerClusterer(Map, [], {
    averageCenter: true,
    clusterClass: 'dealer-finder-map--marker-cluster',
    maxZoom: MAXIMUM_ZOOM_LEVEL,
    styles: MAP_MARKER_CLUSTER_STYLES,
    zoomOnClick: false,
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
