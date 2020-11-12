import React from "react"

export default function Theme({ children }) {
  return (
    <nu-root style={{ fontFamily: "Work Sans" }}>
      <nu-theme name="blue" hue="250" saturation="auto" mod="tint"></nu-theme>
      {children}
    </nu-root>
  )
}
