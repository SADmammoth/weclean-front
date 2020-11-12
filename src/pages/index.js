import { graphql } from "gatsby"
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
    <>
      <Helmet title={title} />
      <Header title="WeClean" />
      <nu-flex items="center" flow="column" gap="1x" padding="1x">
        <nu-theme name="blue" hue="250" saturation="auto" mod="tint"></nu-theme>
        {allVacuumCleaners.map(props => (
          <VacuumCleanerCard key={props.id} {...props} />
        ))}
      </nu-flex>
    </>
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
