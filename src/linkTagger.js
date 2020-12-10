import { Link } from "gatsby"
import React from "react"

export default function linkTagger(stringParts, ...values) {
  return (
    <>
      {stringParts.reduce((string, part, index) => {
        return (
          <>
            {string}
            {part}
            <Link className="classicLink" to={values[2 * index]}>
              {values[2 * index + 1]}
            </Link>
          </>
        )
      }, <></>)}
    </>
  )
}
