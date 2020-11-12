import { graphql } from "gatsby"

import Theme from "./templates/Theme"
import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import VacuumCleanerCard from "../components/VacuumCleanerCard"

export default function Home({
  data: {
    graphqlData: { allVacuumCleaners },
  },
}) {
  const title = "WeClean \u2013 Home"

  return (
    <Theme>
      <Helmet title={title} />
      <Header title="WeClean" />
      <nu-flex items="center" flow="column" gap="1x" padding="1x">
        {allVacuumCleaners.map(props => (
          <VacuumCleanerCard key={props.id} {...props} />
        ))}
      </nu-flex>
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
    }
  }
`
