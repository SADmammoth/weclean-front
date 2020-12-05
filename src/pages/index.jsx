import _ from "lodash"
import literals from "../literals"

import combinators from "../components/useFilter/combinators"

import operations from "../components/useFilter/operations"

import Footer from "../components/Footer"

import Theme from "./templates/Theme"
import React, { useState, useCallback, useEffect } from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import FilterList from "../components/FilterList"
import Sidebar from "../components/Sidebar"
import FiltersForm from "../components/FiltersForm"
import allDataQuery from "../queries/allDataQuery"
import { graphql } from "gatsby"

export default function Home({ data: { graphqlData } }) {
  const { allVacuumCleaners, units, ...filters } = graphqlData
  const title = "WeClean \u2013 Home"
  const [searchString, setSearchString] = useState()
  const [filter, setFilter] = useState({})

  const setFilterOrSearchString = useCallback(
    (newFilter = {}) => {
      setFilter(filter => ({
        combinators: combinators.and,
        ...filter,
        conditions: {
          ...filter.conditions,
          ...newFilter,
          model: {
            value: searchString,
            operator: operations.containsCaseInsensitive,
          },
        },
      }))
    },
    [searchString]
  )

  useEffect(() => {
    setFilterOrSearchString()
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
      <Helmet
        title={title}
        meta={[
          { charSet: "utf-8" },
          { name: "description", content: literals.SEO.DESCRIPTION },
          { name: "keywords", content: literals.SEO.KEYWORDS },
        ]}
      />
      <Header onSearchInput={setSearchString} />
      <nu-flex flow="column" items="center">
        <nu-grid content="center" class="container" columns="2fr 1fr|auto|">
          <nu-flex items="center" flow="column" gap="1x" padding="1x 0 4x 0">
            <nu-h1>{literals.CONTENT.CATALOG_TITLE}</nu-h1>
            <FilterList
              items={allVacuumCleaners}
              units={units}
              filter={filter}
            />
          </nu-flex>
          <Sidebar onSearchInput={setSearchString}>
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
              applyFilter={setFilterOrSearchString}
            />
          </Sidebar>
        </nu-grid>
      </nu-flex>
      <Footer />
    </Theme>
  )
}

export const query = graphql`
  query {
    graphqlData {
      ...allData
    }
  }
`
