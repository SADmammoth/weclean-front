import _ from "lodash"
import isInRange from "./isInRange"
import likeRegex from "./likeRegex"
import operations from "./operations"

export default function filter({ value: filterStr, operator, range }, value) {
  switch (operator) {
    case operations.equal:
      return filterStr === value
    case operations.notEqual:
      return filterStr !== value
    case operations.equalCaseInsensitive:
      return _.toLower(filterStr) === _.toLower(value)
    case operations.notEqualCaseInsensitive:
      return _.toLower(filterStr) !== _.toLower(value)
    case operations.anyOf:
      return filterStr.length === 0 ? true : filterStr.includes(value)
    case operations.contains:
      return likeRegex(filterStr).test(value)
    case operations.containsCaseInsensitive:
      return likeRegex(filterStr, true).test(value)
    case operations.less:
      return _.toNumber(filterStr) < _.toNumber(value)
    case operations.lessOrEqual:
      return _.toNumber(filterStr) <= _.toNumber(value)
    case operations.greater:
      return _.toNumber(filterStr) > _.toNumber(value)
    case operations.greaterOrEqual:
      return _.toNumber(filterStr) >= _.toNumber(value)
    case operations.range:
      return isInRange(range, value)
    case operations.notInRange:
      return !isInRange(range, value)
    case operations.inArray:
      return (
        filterStr.length === 0 || _.without(filterStr, ...value).length === 0
      )
    default:
      return true
  }
}
