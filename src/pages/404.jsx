import React from "react"
import { Helmet } from "react-helmet"
import literals from "../literals"
import Theme from "./templates/Theme"

export default function Page404() {
  return (
    <Theme>
      <Helmet
        title={literals.CONTENT.TITLE_404}
        meta={[{ charSet: "utf-8" }]}
      />
      <nu-flex
        flow="column"
        items="center center"
        content="center"
        height="100vh"
      >
        <nu-h1>{literals.CONTENT.TITLE_404}</nu-h1>
        <nu-block width="50vw" text="center">
          {literals.CONTENT.TEXT_404}
        </nu-block>
        <nu-block width="50vw" text="center">
          {literals.CONTENT.TO_MAIN_PAGE_404}
        </nu-block>
      </nu-flex>
    </Theme>
  )
}
