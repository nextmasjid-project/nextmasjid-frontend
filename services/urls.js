export const URLS = {
  REGION_URL: lang => `/province/${lang}`,
  CITIES_URL: (lang, cityId) => `/api/v1/${lang}/region/${cityId}/City`,
  HEAT_MAP_URL: ({ neLat, neLng, swLat, swLng, currentZoom }) =>
    `/score/byArea/${swLat}/${swLng}/${neLat}/${neLng}/${currentZoom}`,
  CURRENT_LOCATION_URL: ({ lat, lng, lang }) => `score/byPoint/${lat}/${lng}`,
  EDITOR_SUGGESTION_URL: `editorchoice/ar`,
  CURRENT_MOSQUES_URL: ({ neLat, neLng, swLat, swLng, lang }) =>
    `/masjid/${lang}/${swLat}/${swLng}/${neLat}/${neLng}`,
  MOSQUE_DETAILS_URL: ({ lat, lng, lang }) =>
    `/score/byPointDetails/${lang}/${lat}/${lng}`,
  CONTACT_URL: `/contact/submit`,
  // EXPORT_PDF_URL: `https://nextmasjid-exportpdf.herokuapp.com/api/v1/report/new`
  EXPORT_PDF_URL: `http://localhost:3000/api/v1/report/new`
};
