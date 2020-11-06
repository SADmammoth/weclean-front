import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

export default function VacuumCleanerCard({
  pageContext: {
    id,
    manufacturer,
    model,
    price,
    imagesList: { image600x600 },
    ...otherProps
  },
}) {
  const [image, setImage] = useState("#")

  useEffect(() => {
    setImage(process.env.GATSBY_API_URL + image600x600)
  }, [image600x600])

  return (
    <>
      <Helmet title={`WeClean \u2013 ${manufacturer} ${model}`} />
      <nu-flow>
        <nu-block>
          <nu-img src={image} />
        </nu-block>
        <nu-h3>{model}</nu-h3>
        <nu-h4>{manufacturer}</nu-h4>
        <nu-badge>${price}</nu-badge>
      </nu-flow>
    </>
  )
}
