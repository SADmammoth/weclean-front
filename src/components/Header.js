import React, { useState, useEffect } from "react"
import { ReactComponent as Logo } from "../assets/images/logo_vector.svg"
import { Link } from "gatsby"
import Theme from "../pages/templates/Theme"

export default function Header({ title }) {
  return (
    <nu-header padding="2x 6x 2x 2x">
      <nu-flex content="center">
        <nu-pane class="container" content="center space-between">
          <Link to="/">
            <nu-pane>
              <Logo width="3rem" />
              <nu-flow padding="0 5x 0 0">
                <nu-strong
                  size="h1 2"
                  color="text-strong"
                  style={{ fontFamily: "Pump-Light" }}
                >
                  {title}
                </nu-strong>
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
