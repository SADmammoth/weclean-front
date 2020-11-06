import React, { useState, useEffect } from "react"

export default function Header() {
  return (
    <nu-header>
      <nu-img src={image} />
      <nu-h3>{model}</nu-h3>
      <nu-h4>{manufacturer}</nu-h4>
      <nu-badge>${price}</nu-badge>
    </nu-header>
  )
}
