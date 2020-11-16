import { graphql } from "gatsby"

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

export default function Home({
  data: {
    graphqlData: { allVacuumCleaners, units },
  },
}) {
  const title = "WeClean \u2013 Home"
  const [searchString, setSearchString] = useState()
  const [filter, setFilter] = useState({})

  useEffect(() => {
    setFilter({
      conditions: {
        manufacturer: {
          value: searchString,
          operator: operations.containsCaseInsensitive,
        },
        model: {
          value: searchString,
          operator: operations.containsCaseInsensitive,
        },
      },
      combinators: combinators.or,
    })
  }, [searchString])

  return (
    <Theme>
      <Helmet title={title} />
      <Header title="WeClean" onSearchInput={setSearchString} />
      <nu-flex items="center" flow="column" gap="1x" padding="1x 0 4x 0">
        <nu-h1>Catalog</nu-h1>
        <FilterList items={allVacuumCleaners} units={units} filter={filter} />
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
        construction
        cleaningFeatures
        weight
        dustCollectorType
        volumeOfDustCollector
        powerConsumption
        powerSource
        powerCordLength
        color
        oldPrice
      }
      units
    }
  }
`
