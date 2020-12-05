import { useState } from "react"
import _ from "lodash"
import combine from "./combine"
import filterFn from "./filter"
import allCombinators from "./combinators"

export default function useFilter(items) {
  const [filtered, setFiltered] = useState(items)

  function setFilter(filter, combineWithCurrent = false, operator = undefined) {
    if (_.isEmpty(filter)) {
      setFiltered(items)
      return
    }

    let list = items

    const { combinators, conditions } = filter
    let isCombinatorArray = combinators instanceof Array

    if (
      isCombinatorArray &&
      combinators.length < Object.keys(conditions).length - 1
    ) {
      return
    }

    let combinator = combinators
    let initList = list

    const applyConditions = combinator => ([key, filterValue], index) => {
      if (!filterValue.value && !filterValue.range) {
        list = items
        return
      }
      if (isCombinatorArray) {
        combinator = combinators[index - 1]
      }

      if (index !== 0) {
        list = combine(
          list,
          initList.filter(item => filterFn(filterValue, item[key])),
          combinator
        )
      } else {
        list = initList.filter(item => filterFn(filterValue, item[key]))
      }
    }

    Object.entries(conditions).forEach(applyConditions(combinator))

    if (combineWithCurrent) {
      list = combine(filtered, list, operator || allCombinators.and)
    }
    setFiltered(list)
  }

  return [filtered, setFilter]
}
