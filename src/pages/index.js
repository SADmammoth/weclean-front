import { graphql } from "gatsby"
import React from "react"
import VacuumCleanerCard from "../components/VacuumCleanerCard"

export default function Home({
  data: {
    graphqlData: { allVacuumCleaners },
  },
}) {
  return (
    <nu-flow>
      {allVacuumCleaners.map(props => (
        <VacuumCleanerCard key={props.id} {...props} />
      ))}
    </nu-flow>
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
      }
    }
  }
`
