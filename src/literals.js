import linkTagger from "./linkTagger"

export default {
  SEO: {
    DESCRIPTION:
      'WECLEAN – vacuum cleaners shop where you can find your new "brother in cleaning". Huge assortment, low prices – all for you. We clean – you choose.',
    KEYWORDS:
      "WECLEAN, vacuum cleaner, cleaning, vacuum cleaner shop, vacuum cleaner store, vacuum cleaner catalog",
  },
  CONTENT: {
    SITENAME: "WeClean",
    CATALOG_TITLE: "Catalog",
    MOTO: "You choose, we clean",
    SIDEBAR_TITLE: "Filters",
    TITLE_404: "Page not found",
    TEXT_404:
      "You should better look for something you searching somewhere else.",
    TO_MAIN_PAGE_404: linkTagger`Want to start from the ${"/"}${"Main Page"}?`,
    TO_MAIN_PAGE_404_PLAIN: `Want to start from the Main Page?`,
    FIELDS: {
      construction: "Construction type",
      cleaningFeatures: "Cleaning features",
      manufacturer: "Manufacturer",
      model: "Model",
      price: "Price",
      weight: "Weight",
      dustCollectorType: "Dust collector type",
      volumeOfDustCollector: "Volume of dust collector",
      powerConsumption: "Power consumption",
      powerSource: "Power source",
      powerCordLength: "Power cord length",
      color: "Color",
      oldPrice: "Old price",
      noiseLevel: "Noise level",
    },
    SPECIFICATIONS: "Specifications",
    SEARCH: "Search model",
    COPY: "© 2020, Maxim Logvinenko",
  },
}
