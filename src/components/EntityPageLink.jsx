import React from "react"
import { Link } from "gatsby"

export default function EntityPageLink({ id, children }) {
  return <Link to={`vc/${id}`}>{children}</Link>
}
