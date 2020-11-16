import _ from "lodash"
import isInRange from "./isInRange"
import likeRegex from "./likeRegex"
import operations from "./operations"

export default function filter({ value: filterStr, operator, range }, value) {
  console.log(filterStr, value, likeRegex(filterStr).test(value))
  switch (operator) {
    case operations.equal:
      return filterStr === value
    case operations.equalCaseInsensitive:
      return _.toLower(filterStr) === _.toLower(value)
    case operations.contains:
      return likeRegex(filterStr).test(value)
    case operations.containsCaseInsensitive:
      return likeRegex(filterStr, true).test(value)
    case operations.less:
      return _.toNumber(filterStr) < _.toNumber(value)
    case operations.greater:
      return _.toNumber(filterStr) > _.toNumber(value)
    case operations.range:
      return isInRange(range, value)
    default:
      return true
  }
}
