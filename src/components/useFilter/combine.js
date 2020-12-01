import _ from "lodash"
import combinators from "./combinators"

export default function combine(array1, array2, combinator) {
  switch (combinator) {
    case combinators.and:
      return _.intersection(array1, array2)
    case combinators.or:
      return _.union(array1, array2)
    default:
      return array2
  }
}
