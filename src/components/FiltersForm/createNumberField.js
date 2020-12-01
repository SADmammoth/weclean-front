/** @jsx nativeEvents */
import nativeEvents from "jsx-native-events"
import React from "react"
import _ from "lodash"

export default function createNumberField([name, value]) {
  const range = value.to - value.from

  return (
    <nu-flex flow="column" gap="1x">
      <nu-label>
        {_.capitalize(_.startCase(name))} ({value.unit})
      </nu-label>

      <nu-props id="root" min={value.from} max={value.to}></nu-props>
      <nu-grid columns="7x auto" flow="column" items="center start">
        <nu-label>
          <nu-value id="valuemin" value={value.from.toFixed(2)}></nu-value>
        </nu-label>
        <nu-slider
          id={`${name}min`}
          min={value.from}
          max={value.to}
          value={value.from}
          control={`${name}max[min] root[min] valuemin[value]`}
          width={`((var(--nu-max) - ${value.from}) / (${range})) * 100%`}
          labelled="valuemin"
          step={value.step}
          style={{
            "--nu-local-rail-left": `calc((var(--nu-min) - ${value.from})  / (var(--nu-max) - ${value.from}) * 100%)`,
          }}
          onEventInput={event => {
            value.setFilter(name, "fromInclude", event.target.value)
          }}
          trigger
        />
      </nu-grid>

      <nu-grid columns="7x auto" flow="column" items="center start">
        <nu-label>
          <nu-value id="valuemax" value={value.to.toFixed(2)}></nu-value>
        </nu-label>
        <nu-slider
          id={`${name}max`}
          min={value.from}
          max={value.to}
          value={value.to}
          control={`${name}min[max] root[max] valuemax[value]`}
          width={`(${value.to} - var(--nu-min)) / (${range}) * 100%`}
          labelled="valuemax"
          step={value.step}
          style={{
            "--nu-local-rail-left": `calc((var(--nu-max) - var(--nu-min))  / (${value.to} - var(--nu-min)) * 100%)`,
          }}
          onEventInput={event => {
            value.setFilter(name, "toInclude", event.target.value)
          }}
          place="center end"
          trigger
        />
      </nu-grid>
    </nu-flex>
  )
}
