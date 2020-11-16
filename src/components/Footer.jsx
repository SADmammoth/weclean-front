import React from "react"
import { ReactComponent as Logo } from "../assets/images/logo_vector.svg"

export default function Footer() {
  return (
    <nu-footer border>
      <nu-pane content="center">
        <nu-flex class="container" content="space-between" padding="2x">
          <nu-pane>
            <Logo width="3rem" />
            <nu-flow padding="0 5x 0 0">
              <nu-strong
                size="h1 2"
                color="text-strong"
                style={{ fontFamily: "Pump-Light" }}
              >
                WeClean
              </nu-strong>
              <nu-block size="0.82">You choose, we clean</nu-block>
            </nu-flow>
          </nu-pane>
          &copy; 2020, Maxim Logvinenko
        </nu-flex>
      </nu-pane>
    </nu-footer>
  )
}
