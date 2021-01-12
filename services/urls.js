export const URLS = {
  REGION_URL: lang => `/api/v1/${lang}/region`,
  CITIES_URL: (lang, cityId) => `/api/v1/${lang}/region/${cityId}/City`,
}
