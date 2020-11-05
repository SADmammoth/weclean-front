import React from "react"

export default function VacuumCleanerCard({ id, manufacturer, model, price }) {
  return (
    <nu-card>
      <nu-h3>{model}</nu-h3>
      <nu-h4>{manufacturer}</nu-h4>
      <nu-badge>${price}</nu-badge>
    </nu-card>
  )
}
