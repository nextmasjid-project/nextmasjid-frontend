import { createBounds, createIcon } from './map-entities';

/**
 * Create map icons
 * @param {any} Api
 * @return {any}
 */
export function createIcons({ Api }) {
  return {
    MARKER_BASE: createIcon({ Api }, { url: `${ process.env.PUBLIC_PATH }/Images/dummy_marker_dealer.svg` }),
    MARKER_ACTIVE: createIcon({ Api }, { url: `${ process.env.PUBLIC_PATH }/Images/dummy_marker_dealer_active.svg` }),
    MARKER_CENTER: createIcon({ Api }, { url: `${ process.env.PUBLIC_PATH }/Images/dummy_marker_dealer.svg` }),
    MARKER_CLIENT: createIcon({ Api }, { url: `${ process.env.PUBLIC_PATH }/Images/dummy_marker_dealer_client.svg` }),
  };
}

/**
 * Create a google maps bounds from a list of markers
 * @param {any} Api
 * @param {any[]} markers
 * @return {any} The google maps bounds object
 */
export function getBoundsOfMarkers({ Api }, { markers }) {
  const bounds = createBounds({ Api });

  markers.forEach(marker => {
    bounds.extend(marker.getPosition());
  });

  return bounds;
}

/**
 * Return a latlng position of a marker by its entry slug
 * @param {any[]} Markers
 * @param {string} slug
 * @return {any}
 */
export function getEntryLatLng(Markers, slug) {
  const Marker = Markers.find(m => m.entry.slug === slug);
  return Marker ? Marker.getPosition() : null;
}

/**
 * Center and zoom the map
 * @param {any} Map
 * @param {any} latlng
 * @param {string} method - The animation method (either `panTo` or `setCenter`)
 * @param {number} zoom - The new zoom level
 */
export function centerMap({ Map }, { latlng, method, zoom }) {
  if (!latlng) {
    return;
  }

  if (zoom && zoom !== Map.getZoom()) {
    Map.setZoom(zoom);
  }

  Map[method](latlng);
}

/**
 * Fit bounds to all visible markers
 * @param {any} Api
 * @param {any} Map
 * @param {any[]} Markers
 */
export function fitBounds({ Map }, { bounds, padding }) {
  Map.fitBounds(bounds, padding);
}

/**
 * Toggle the visibility of a marker
 * @param {any} map
 * @param {any} marker - The google maps Marker object
 * @param {boolean} toggle
 */
export function setMarkerVisibility({ Map }, { marker, toggle }) {
  if (!!marker.getMap() === toggle) {
    return;
  }

  marker.setMap(toggle ? Map : null);
}

/**
 * Toggle the icon of a marker
 * @param {any} marker - The google maps Marker object
 * @param {any} icon - The google maps Icon object
 */
export function setMarkerIcon({ marker, icon }) {
  const markerIcon = marker.getIcon();
  if (markerIcon && markerIcon.url === icon.url) {
    return;
  }

  marker.setIcon(icon);
}
