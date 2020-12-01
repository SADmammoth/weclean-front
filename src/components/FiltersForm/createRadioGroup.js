import React from "react"

export default function createRadioGroup(
  label,
  values,
  currentValue,
  changeValue
) {
  let value = currentValue ? currentValue[0] : null
  console.log(value)
  if (!value) {
    value = null
  }
  return (
    <nu-radiogroup flow="column" value={value}>
      <nu-label size="lg">{label}</nu-label>
      {values.map(value => (
        <nu-flex items="center" gap="1x">
          <nu-radio
            size="xs"
            id={label + value}
            labelledby=":next"
            value={value}
            checked={currentValue?.includes(value) ? "checked" : null}
            onClick={event => {
              if (currentValue) {
                currentValue
                  .filter(value => value !== event.target.value)
                  .forEach(value => changeValue(value))
              }
              changeValue(event.target.value)
            }}
          ></nu-radio>
          <nu-label>{value}</nu-label>
        </nu-flex>
      ))}
    </nu-radiogroup>
  )
}
