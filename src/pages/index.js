import { graphql } from "gatsby"
import React from "react"

export default function Home({
  data: {
    graphqlData: { allVacuumCleaners },
  },
}) {
  console.log(allVacuumCleaners)
  return <div>Hello world!</div>
}

export const query = graphql`
  query {
    graphqlData {
      allVacuumCleaners {
        id
        cleaningFeatures
        color
        construction
        dustCollectorType
        manufacturer
        model
        noiseLevel
        powerConsumption
        powerCordLength
        powerSource
        price
        volumeOfDustCollector
        weight
      }
    }
  }
`
