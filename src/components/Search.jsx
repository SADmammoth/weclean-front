/** @jsx nativeEvents */
import nativeEvents from "jsx-native-events"
import React from "react"
import PropTypes from "prop-types"
import literals from "../literals"

function Search({ hide, onSearchInput }) {
  return (
    <nu-inputgroup
      hide={hide}
      toned
      width="min 30%"
      fill="subtle"
      space="bottom -2x"
    >
      <nu-icon name="search" />
      <nu-input
        width="100%"
        placeholder={literals.CONTENT.SEARCH}
        onEventInput={event => onSearchInput(event.target.value)}
      />
    </nu-inputgroup>
  )
}

Search.propTypes = {
  onSearchInput: PropTypes.func.isRequired,
  hide: PropTypes.string,
}

export default Search
