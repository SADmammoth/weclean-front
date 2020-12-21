import React from "react"
import { Helmet } from "react-helmet"
import literalsRU from "../literalsRU"
import Theme from "./templates/Theme"

export default function Page404() {
  return (
    <Theme>
      <Helmet
        title={literalsRU.CONTENT.TITLE_404}
        meta={[{ charSet: "utf-8" }]}
      />
      <nu-flex
        flow="column"
        items="center center"
        content="center"
        height="100vh"
      >
        <nu-h1>{literalsRU.CONTENT.TITLE_404}</nu-h1>
        <nu-block width="50vw" text="center">
          {literalsRU.CONTENT.TEXT_404}
        </nu-block>
        <nu-block width="50vw" text="center">
          {literalsRU.CONTENT.TO_MAIN_PAGE_404}
        </nu-block>
      </nu-flex>
    </Theme>
  )
}
