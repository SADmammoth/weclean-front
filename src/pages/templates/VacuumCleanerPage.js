import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Header from "../../components/Header"

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

  const title = `WeClean \u2013 ${manufacturer} ${model}`

  return (
    <Theme>
      <Helmet title={title} />
      <Header title="WeClean" />
      <nu-flow>
        <nu-block>
          <nu-img src={image} />
        </nu-block>
        <nu-h3>{model}</nu-h3>
        <nu-h4>{manufacturer}</nu-h4>
        <nu-badge>${price}</nu-badge>
      </nu-flow>
    </Theme>
  )
}
