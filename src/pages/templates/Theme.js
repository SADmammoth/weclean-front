import React from "react"

export default function Theme({ children }) {
  return (
    <nu-root>
      <nu-theme name="blue" hue="250" mod="tint bold strong"></nu-theme>
      <nu-main theme="blue" style={{ fontFamily: "Work Sans" }}>
        {children}
      </nu-main>
    </nu-root>
  )
}
