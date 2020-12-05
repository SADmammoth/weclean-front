import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Theme from "../pages/templates/Theme"
import Search from "./Search"
import Logo from "./Logo"

export default function Header({ onSearchInput }) {
  return (
    <nu-header padding="2x 6x 2x 2x">
      <nu-flex content="center">
        <nu-pane class="container" content="center space-between">
          <Logo />
          <Search hide="n|y|y" onSearchInput={onSearchInput} />
          <nu-btn
            hide="y|n|n"
            border="0"
            fill="none"
            padding="0"
            control="sidebar[hide= n|y]"
            toggle
          >
            <nu-icon name="menu" />
          </nu-btn>
        </nu-pane>
      </nu-flex>
    </nu-header>
  )
}

Header.propTypes = {
  onSearchInput: PropTypes.func.isRequired,
}
