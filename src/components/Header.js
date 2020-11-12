import React, { useState, useEffect } from "react"
import jsxNativeEvents from "jsx-native-events"
import logo from "../assets/images/logo.gif"

export default function Header({ title }) {
  return (
    <nu-header padding=" 2x 6x 2x 2x">
      <nu-pane content="center space-between">
        <nu-pane>
          <nu-img src={logo} width="7x" />
          <nu-flow padding="0 5x 0 0">
            <nu-h1 size="h1 2" style={{ fontFamily: "Pump-Light" }}>
              {title}
            </nu-h1>
            <nu-block size="0.9">You choose, we clean</nu-block>
          </nu-flow>
        </nu-pane>
        <nu-inputgroup width="20%" fill="subtle">
          <nu-icon name="search" />
          <nu-input width="100%" placeholder="Search" />
        </nu-inputgroup>
      </nu-pane>
    </nu-header>
  )
}
