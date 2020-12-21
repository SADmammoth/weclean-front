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
    CATALOG_TITLE: "Каталог",
    MOTO: "You choose, we clean",
    SIDEBAR_TITLE: "Фильтры",
    TITLE_404: "Страница не найдена",
    TEXT_404: "Поищите еще, здесь этого нет.",
    TO_MAIN_PAGE_404: linkTagger`Может быть на ${"/"}${"Главной"}?`,
    TO_MAIN_PAGE_404_PLAIN: `Может быть на Главной?`,
    FIELDS: {
      construction: "Конструкция",
      cleaningFeatures: "Возможности чистки",
      manufacturer: "Производитель",
      model: "Модель",
      price: "Цена",
      weight: "Вес",
      dustCollectorType: "Тип пылесборника",
      volumeOfDustCollector: "Объем пылесборника",
      powerConsumption: "Потребление энергии",
      powerSource: "Источник питания",
      powerCordLength: "Длина шнура",
      color: "Цвет",
      oldPrice: "Старая цена",
      noiseLevel: "Уровень шума",
    },
    SPECIFICATIONS: "Спецификации",
    SEARCH: "Поиск модели",
    COPY: "© 2020, Maxim Logvinenko",
    MORE: "Больше",
    LESS: "Меньше",
  },
}
