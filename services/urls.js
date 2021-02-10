export const URLS = {
  REGION_URL: lang => `/api/v1/${lang}/region`,
  CITIES_URL: (lang, cityId) => `/api/v1/${lang}/region/${cityId}/City`,
  HEAT_MAP_URL: ({neLat, neLng, swLat, swLng}) => `/api/Mosque/api/v1/mosque/location/northEast/${neLat}/${neLng}/southWest/${swLat}/${swLng}`,
  CURRENT_LOCATION_URL: ({lat, lng}) => `/api/Mosque/api/v1/mosque/location/${lat}/${lng}/evaluation`,
  EDITOR_SUGGESTION_URL: '/api/Mosque/api/v1/mosque/suggestions'
}
