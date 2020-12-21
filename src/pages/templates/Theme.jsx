import React from "react"

export default function Theme({ children }) {
  return (
    <nu-root responsive="900px|700px">
      <nu-theme name="blue" hue="250" mod="tint bold strong"></nu-theme>
      <nu-main theme="blue" style={{ fontFamily: "SFUI Display" }}>
        {children}
      </nu-main>
    </nu-root>
  )
}
