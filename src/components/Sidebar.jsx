import React from "react"
import literalsRU from "../literalsRU"
import Filters from "./FiltersForm"
import Search from "./Search"

export default function Sidebar({ children, onSearchInput }) {
  return (
    <nu-aside
      id="sidebar"
      hide="n|y|y"
      padding="8x 3x 8x 3x|3vh 20vw"
      place="|absolute|"
      fill="subtle"
      z="10000"
      width="|100vw|"
    >
      <Search hide="y|n|n" onSearchInput={onSearchInput} />
      <nu-h2 hide="y|n|n">{literalsRU.CONTENT.SIDEBAR_TITLE}</nu-h2>
      {children}
    </nu-aside>
  )
}
