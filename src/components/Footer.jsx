import React from "react"
import literals from "../literals"
import Logo from "./Logo"

export default function Footer() {
  return (
    <nu-footer fill="tone">
      <nu-pane content="center">
        <nu-flex class="container" content="space-between" padding="2x">
          <Logo hide="n|y|y" />
          <nu-block padding="top 2x"> {literals.CONTENT.COPY} </nu-block>
        </nu-flex>
      </nu-pane>
    </nu-footer>
  )
}
