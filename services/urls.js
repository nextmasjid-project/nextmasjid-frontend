export const URLS = {
  REGION_URL: lang => `/api/v1/${lang}/region`,
  CITIES_URL: (lang, cityId) => `/api/v1/${lang}/region/${cityId}/City`,
  HEAT_MAP_URL: ({neLat, neLng, swLat, swLng}) => `/api/Mosque/api/v1/mosque/location/northEast/${neLat}/${neLng}/southWest/${swLat}/${swLng}`,
  CURRENT_LOCATION_URL: ({lat, lng, lang}) => `/api/Mosque/api/v1/mosque/${lang}/location/${lat}/${lng}/evaluation`,
  EDITOR_SUGGESTION_URL: lang => `/api/Mosque/api/v1/mosque/${lang}/suggestions`,
  CURRENT_MOSQUES_URL: ({neLat, neLng, swLat, swLng}) => `/api/Mosque/api/v1/mosque/northEast/${neLat}/${neLng}/southWest/${swLat}/${swLng}`,
  MOSQUE_DETAILS_URL: ({lat, lng, lang}) => `/api/Mosque/api/v1/mosque/${lang}/${lat}/${lng}`
}
