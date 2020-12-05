import { Link } from "gatsby"
import React from "react"
import literals from "../literals"
import { ReactComponent as LogoSvg } from "../assets/images/logo_vector.svg"

export default function Logo({ hide }) {
  return (
    <Link to="/">
      <nu-pane scale="|0.8|" hide={hide}>
        <LogoSvg width="3rem" />
        <nu-flow padding="0 5x 0 0">
          <nu-strong
            size="h1 2"
            color="text-strong"
            style={{ fontFamily: "Pump-Light" }}
          >
            {literals.CONTENT.SITENAME}
          </nu-strong>
          <nu-block size="0.82">{literals.CONTENT.MOTO}</nu-block>
        </nu-flow>
      </nu-pane>
    </Link>
  )
}
