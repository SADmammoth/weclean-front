import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import _ from "lodash"
import Header from "../../components/Header"
import Theme from "./Theme"
import Footer from "../../components/Footer"

export default function VacuumCleanerCard({
  pageContext: {
    id,
    manufacturer,
    model,
    price,
    imagesList: { image600x600 },
    oldPrice,
    units,
    ...otherProps
  },
}) {
  const [image, setImage] = useState("#")

  useEffect(() => {
    setImage(process.env.GATSBY_API_URL + image600x600)
  }, [image600x600])

  const title = `WeClean \u2013 ${manufacturer}
   ${model}`

  function getSpec(propName, propValue) {
    let capitalizedName = _.capitalize(_.startCase(propName))
    let unit = ""
    if (typeof propValue === "number") {
      unit = ` (${units[propName]})`
    }

    return (
      <nu-row key={propName}>
        <nu-rowheader>
          {capitalizedName}
          {unit}:
        </nu-rowheader>
        <nu-cell>{propValue}</nu-cell>
      </nu-row>
    )
  }

  return (
    <Theme>
      <Helmet title={title} />
      <Header title="WeClean" />
      <nu-flex flow="column" items="center" padding="2x 0 4x 0">
        <nu-grid class="container" rows="auto auto auto" columns="40% 60%">
          <nu-img border src={image} row="1 span 3" />
          <nu-section>
            <nu-strong size="h3" padding="0 2x" color="special">
              {manufacturer}
            </nu-strong>
            <nu-mark radius="0" padding="2x 3x 2x 2x">
              <nu-h1
                size="h1"
                text="wrap"
                color="text-strong"
                class="word-break"
              >
                {model}
              </nu-h1>
            </nu-mark>
            <nu-badge
              special
              z="2"
              size="4x"
              padding="1x 2x"
              text="italic"
              position="absolute"
              weight="regular"
              row="span 2"
              border="0"
              space="-2x"
            >
              {oldPrice === price || (
                <nu-badge
                  border="0"
                  bg="transparent"
                  size="2x"
                  padding="0x 1.5x"
                  text="italic del"
                  weight="regular"
                  place="absolute"
                  move="0 -140%"
                >
                  {oldPrice.toFixed(2)}

                  {units["price"]}
                </nu-badge>
              )}
              {price.toFixed(2)}

              {units["price"]}
            </nu-badge>
          </nu-section>

          <nu-section column="2" padding="2x">
            <nu-h2 padding="1x">Specifications:</nu-h2>
            <nu-table border="0" width="100%">
              {Object.entries(otherProps).map(entry => getSpec(...entry))}
            </nu-table>
          </nu-section>
        </nu-grid>
      </nu-flex>
      <Footer />
    </Theme>
  )
}
