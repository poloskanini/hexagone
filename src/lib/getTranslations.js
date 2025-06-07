export async function getTranslations(locale) {
  try {
    const translations = await import(`../locales/${locale}.json`)
    return translations.default
  } catch (e) {
    console.error(`❌ Erreur de chargement des traductions pour la locale "${locale}"`)
    return {}
  }
}
