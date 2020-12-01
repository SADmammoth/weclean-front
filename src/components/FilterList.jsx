import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import operations from "./useFilter/operations"
import combinators from "./useFilter/combinators"
import useFilter from "./useFilter"
import VacuumCleanerCard from "./VacuumCleanerCard"

export default function FilterList({ items, units, filter }) {
  const [filtered, setFilter] = useFilter(items)

  useEffect(() => {
    setFilter(filter, false)
  }, [JSON.stringify(filter)])

  return (
    <nu-list width="60vw">
      {filtered.length === 0 ? (
        <nu-card color="subtle-text" size="lg" text="center">
          No vacuum cleaners found
        </nu-card>
      ) : (
        filtered.map(props => (
          <VacuumCleanerCard key={props.id} {...props} units={units} />
        ))
      )}
    </nu-list>
  )
}

FilterList.propTypes = {
  filter: PropTypes.shape({
    conditions: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          operator: PropTypes.oneOf(Object.values(operations)),
        }),
        PropTypes.shape({
          range: PropTypes.shape({
            from: PropTypes.number.isRequired,
            to: PropTypes.number.isRequired,
          }),
        }),
      ])
    ),
    combinators: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOf(Object.values(combinators))),
      PropTypes.oneOf(Object.values(combinators)),
    ]),
  }),
}
