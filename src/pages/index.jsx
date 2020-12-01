import { graphql } from "gatsby"

import groupNumberFields from "../components/FiltersForm/groupNumberFields"

import operations from "../components/useFilter/operations"

import Footer from "../components/Footer"

import Theme from "./templates/Theme"
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import VacuumCleanerCard from "../components/VacuumCleanerCard"
import FilterList from "../components/FilterList"
import combinators from "../components/useFilter/combinators"
import { useEffect } from "react"
import Sidebar from "../components/Sidebar"
import FiltersForm from "../components/FiltersForm"
import { filter } from "lodash"

export default function Home({ data: { graphqlData } }) {
  const { allVacuumCleaners, units, ...filters } = graphqlData
  const title = "WeClean \u2013 Home"
  const [searchString, setSearchString] = useState()
  const [filter, setFilter] = useState({})

  useEffect(() => {
    setFilter(filter => ({
      ...filter,
      conditions: {
        ...filter.conditions,
        model: {
          value: searchString,
          operator: operations.containsCaseInsensitive,
        },
      },
    }))
  }, [searchString])

  const {
    constructions,
    allManufacturers,
    powerSources,
    cleaningFeatures,
    minPrice,
    maxPrice,
    ...numberFieldsAdditional
  } = filters
  return (
    <Theme>
      <Helmet title={title} />
      <Header title="WeClean" onSearchInput={setSearchString} />
      <nu-flex flow="column" items="center">
        <nu-flex content="space-between" class="container">
          <nu-flex items="center" flow="column" gap="1x" padding="1x 0 4x 0">
            <nu-h1>Catalog</nu-h1>
            <FilterList
              items={allVacuumCleaners}
              units={units}
              filter={filter}
            />
          </nu-flex>
          <Sidebar>
            <FiltersForm
              radioFields={{
                construction: constructions,
                manufacturer: allManufacturers.map(({ name }) => name),
              }}
              radioFieldsAdditional={{
                powerSource: powerSources,
              }}
              checkboxFields={{
                cleaningFeatures,
              }}
              numberFields={{ minPrice, maxPrice }}
              numberFieldsAdditional={numberFieldsAdditional}
              units={units}
              applyFilter={newFilter =>
                setFilter(filter => ({
                  ...filter,
                  conditions: { ...filter.conditions, ...newFilter },
                }))
              }
            />
          </Sidebar>
        </nu-flex>
      </nu-flex>
      <Footer />
    </Theme>
  )
}

export const query = graphql`
  query {
    graphqlData {
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
  }
`
