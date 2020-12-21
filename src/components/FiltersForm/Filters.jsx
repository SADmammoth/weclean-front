import React, { useCallback, useEffect, useMemo, useState } from "react"
import _ from "lodash"
import createRadioGroup from "./createRadioGroup"
import createCheckboxGroup from "./createCheckboxGroup"
import groupNumberFields from "./groupNumberFields"
import createNumberField from "./createNumberField"
import operations from "../useFilter/operations"
import literalsRU from "../../literalsRU"

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

      if (filterList) {
        if (filterList.includes(value)) {
          filterList = [
            ...filterList.slice(0, filterList.indexOf(value)),
            ...filterList.slice(filterList.indexOf(value) + 1, -1),
          ]
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
        <nu-pane key={key}>
          {createRadioGroup(
            literalsRU.CONTENT.FIELDS[key],
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
        <nu-pane key={key}>
          {createCheckboxGroup(
            literalsRU.CONTENT.FIELDS[key],
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
        <nu-pane key={args.toString()} flow="column" items="stretch">
          {createNumberField(...args)}
        </nu-pane>
      )),
    [JSON.stringify(numberFields)]
  )

  const renderNumberFieldsAdditional = useMemo(
    () =>
      Object.entries(group(numberFieldsAdditional)).map((...args) => (
        <nu-pane key={args.toString()} flow="column" items="stretch">
          {createNumberField(...args)}
        </nu-pane>
      )),
    [JSON.stringify(numberFieldsAdditional)]
  )

  return (
    <nu-form>
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
            t={`'${literalsRU.CONTENT.MORE}' :pressed['${literalsRU.CONTENT.LESS}']`}
            toggle
          ></nu-btn>
        </nu-section>
      </nu-flex>
    </nu-form>
  )
}
