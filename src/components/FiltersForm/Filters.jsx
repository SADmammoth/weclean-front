import React, { useCallback, useEffect, useMemo, useState } from "react"
import _ from "lodash"
import createRadioGroup from "./createRadioGroup"
import createCheckboxGroup from "./createCheckboxGroup"
import groupNumberFields from "./groupNumberFields"
import createNumberField from "./createNumberField"
import combinators from "../useFilter/combinators"
import operations from "../useFilter/operations"

export default function Filters({
  checkboxFields,
  checkboxFieldsAdditional,
  radioFields,
  radioFieldsAdditional,
  numberFields,
  numberFieldsAdditional,
  units,
  applyFilter,
}) {
  const [filter, setFilter] = useState({})

  const setFilterValue = (name, value, operator) => {
    setFilter(filter => {
      let filterList = filter[name]?.value
      console.log(name, filter[name], filterList)
      if (filterList) {
        if (filterList.includes(value)) {
          filterList = [
            ...filterList.slice(0, filterList.indexOf(value)),
            ...filterList.slice(filterList.indexOf(value) + 1, -1),
          ]
          console.log(filterList)
        } else {
          filterList = [...filterList, value]
        }
      } else {
        filterList = [value]
      }
      return {
        ...filter,
        [name]: {
          value: filterList,
          operator: operator || operations.anyOf,
        },
      }
    })
  }

  const setRangeField = (name, field, value) =>
    setFilter(filter => ({
      ...filter,
      [name]: {
        ...filter[name],
        range: { ...filter[name]?.range, [field]: value },
        operator: operations.range,
      },
    }))

  const group = useCallback(
    (fields = {}) => groupNumberFields(fields, units, setRangeField),
    [JSON.stringify(units)]
  )

  useEffect(() => {
    applyFilter(filter)
  }, [JSON.stringify(filter)])

  const renderRadioButtons = useCallback(
    (fields = {}) =>
      Object.entries(fields).map(([key, values]) => (
        <nu-pane>
          {createRadioGroup(
            _.capitalize(_.startCase(key)),
            values,
            filter[key]?.value,
            value => setFilterValue(key, value)
          )}
        </nu-pane>
      )),
    [JSON.stringify(filter)]
  )

  const renderCheckboxes = useCallback(
    (fields = {}) =>
      Object.entries(fields).map(([key, values]) => (
        <nu-pane>
          {createCheckboxGroup(
            _.capitalize(_.startCase(key)),
            values,
            filter[key]?.value,
            value => setFilterValue(key, value, operations.inArray)
          )}
        </nu-pane>
      )),
    [JSON.stringify(filter)]
  )

  const renderNumberFields = useMemo(
    () =>
      Object.entries(group(numberFields)).map((...args) => (
        <nu-pane flow="column" items="stretch">
          {createNumberField(...args)}
        </nu-pane>
      )),
    [JSON.stringify(numberFields)]
  )

  const renderNumberFieldsAdditional = useMemo(
    () =>
      Object.entries(group(numberFieldsAdditional)).map((...args) => (
        <nu-pane flow="column" items="stretch">
          {createNumberField(...args)}
        </nu-pane>
      )),
    [JSON.stringify(numberFieldsAdditional)]
  )

  return (
    <nu-form width="20vw">
      <nu-flex flow="column" gap="1x">
        <nu-attrs for="pane" border padding="2x"></nu-attrs>
        {renderRadioButtons(radioFields)}
        {renderCheckboxes(checkboxFields)}
        {renderNumberFields}
        <nu-section>
          <nu-flow
            id="additional"
            space="bottom -2x"
            hidden
            flow="column"
            gap="1x"
          >
            {renderRadioButtons(radioFieldsAdditional)}
            {renderCheckboxes(checkboxFieldsAdditional)}
            {renderNumberFieldsAdditional}
          </nu-flow>
          <nu-btn
            width="100%"
            control="additional toggleIcon[name=chevron-up|chevron-down]"
            t="'More' :pressed['Less']"
            toggle
          ></nu-btn>
        </nu-section>
      </nu-flex>
    </nu-form>
  )
}
