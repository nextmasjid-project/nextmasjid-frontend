export default function ({ app, store }) {
  const currentLocale = app.i18n.locales.find(el => el.code === app.i18n.locale);

  if ( process.client ) {
    store.dispatch('languages/setLangAction', currentLocale.code)
  }

}
