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

    if (isCombinatorArray && combinators !== conditions - 1) {
      return
    }

    let combinator = combinators
    let initList = list

    Object.entries(conditions).forEach(([key, filterValue], index) => {
      console.log(filterValue)
      if (!filterValue.value && !filterValue.range) {
        list = items
        return
      }
      if (isCombinatorArray) {
        combinator = combinators[index - 1]
      }

      if (index) {
        list = combine(
          list,
          initList.filter(item => filterFn(filterValue, item[key])),
          combinator
        )
      } else {
        list = initList.filter(item => filterFn(filterValue, item[key]))
      }
    })

    console.log(list)
    if (combineWithCurrent) {
      list = combine(filtered, list, operator || allCombinators.and)
    }
    setFiltered(list)
  }

  return [filtered, setFilter]
}
