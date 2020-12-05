import _ from "lodash"

export default function groupNumberFields(
  numberFieldsOriginal,
  units,
  setFilter,
  stepCount = 10
) {
  const min = /(?<=min).*/
  const max = /(?<=max).*/
  const grouped = {}
  let numberFields = numberFieldsOriginal
  let match
  let decapitalized

  Object.entries(numberFields).forEach(([name, value]) => {
    if (min.test(name)) {
      match = min.exec(name)
    } else {
      match = max.exec(name)
    }

    if (numberFields["min" + match] && numberFields["max" + match]) {
      decapitalized = _.camelCase(match)
      grouped[decapitalized] = {
        from: numberFields["min" + match],
        to: numberFields["max" + match],
        unit: units[decapitalized],
        setFilter,
        step:
          (numberFields["max" + match] - numberFields["min" + match]) /
          stepCount,
      }

      delete numberFields["min" + match]
      delete numberFields["max" + match]
    }
  })

  return grouped
}
