export const query = graphql`
  fragment allData on VacuumCleaner {
    allVacuumCleaners {
      id
      manufacturer
      model
      price
      imagesList {
        thumb
      }
      construction: constructionName
      cleaningFeatures: cleaningFeaturesNames
      weight
      dustCollectorType: dustCollectorTypeName
      volumeOfDustCollector
      powerConsumption
      powerSource: powerSourceName
      powerCordLength
      color
      oldPrice
    }
    units

    constructions
    allManufacturers {
      name
    }
    powerSources
    cleaningFeatures

    minPrice
    maxPrice
    minNoiseLevel
    maxNoiseLevel
    minPowerConsumption
    maxPowerConsumption
    minPowerCordLength
    maxPowerCordLength
    minVolumeOfDustCollector
    maxVolumeOfDustCollector
    minWeight
    maxWeight
  }
`
