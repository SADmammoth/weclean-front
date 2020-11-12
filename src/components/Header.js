import React, { useState, useEffect } from "react"
import logo from "../assets/images/logo.gif"
import { Link } from "gatsby"
import Theme from "../pages/templates/Theme"

export default function Header({ title }) {
  return (
    <nu-header padding="2x 6x 2x 2x">
      <nu-flex content="center">
        <nu-pane content="center space-between" width="0 95vw 850px">
          <Link to="/">
            <nu-pane>
              <nu-img src={logo} width="7x" />
              <nu-flow padding="0 5x 0 0">
                <nu-h1
                  size="h1 2"
                  color="text-strong"
                  style={{ fontFamily: "Pump-Light" }}
                >
                  {title}
                </nu-h1>
                <nu-block size="0.82">You choose, we clean</nu-block>
              </nu-flow>
            </nu-pane>
          </Link>
          <nu-inputgroup toned width="30%" fill="subtle">
            <nu-icon name="search" />
            <nu-input width="100%" placeholder="Search" />
          </nu-inputgroup>
        </nu-pane>
      </nu-flex>
    </nu-header>
  )
}
