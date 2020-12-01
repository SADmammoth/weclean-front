/** @jsx nativeEvents */
import nativeEvents from "jsx-native-events"
import React from "react"

export default function createCheckboxGroup(
  label,
  values,
  currentValue,
  changeValue
) {
  return (
    <nu-flex flow="column">
      <nu-label size="lg">{label}</nu-label>
      {values.map(value => (
        <nu-flex items="center" gap="1x">
          <nu-checkbox
            size="xs"
            id={label + value}
            labelledby=":next"
            value={value}
            checked={currentValue?.includes(value) ? "checked" : null}
            onEventInput={event => {
              changeValue(event.target.value)
            }}
          ></nu-checkbox>
          <nu-label>{value}</nu-label>
        </nu-flex>
      ))}
    </nu-flex>
  )
}
