import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import _ from "lodash"
import Header from "../../components/Header"
import Theme from "./Theme"
import Footer from "../../components/Footer"
import Gallery from "../../components/Gallery"
import literalsRU from "../../literalsRU"

export default function VacuumCleanerCard({
  pageContext: {
    id,
    manufacturer,
    model,
    price,
    imagesList,
    oldPrice,
    units,
    ...otherProps
  },
}) {
  let image600x600 = ""
  let others = []

  if (imagesList) {
    ;({ image600x600, others } = imagesList)
  }

  const title = `${literalsRU.CONTENT.SITENAME} \u2013 ${manufacturer}
   ${model}`

  function getSpec(propName, propValue) {
    let capitalizedName = literalsRU.CONTENT.FIELDS[propName]
    let unit = ""
    if (typeof propValue === "number") {
      unit = units[propName]
    }

    if (propValue instanceof Array) {
      propValue = propValue.join(", ")
    }

    return (
      <nu-flex key={propName} content="space-between" gap="1x">
        <nu-strong>{capitalizedName}</nu-strong>
        <nu-el border="1bw bottom dashed" space="-.5x 0" grow="1"></nu-el>
        <nu-block>
          {propValue}
          {unit}
        </nu-block>
      </nu-flex>
    )
  }

  return (
    <Theme>
      <Helmet title={title} />
      <Header />

      <nu-flex flow="column" items="center" padding="2x 0 10x 0">
        <nu-grid
          class="container"
          items="center"
          rows="auto auto auto|auto auto auto auto"
          columns="40% 60%||auto"
          width="||95vw"
        >
          <Gallery
            images={[image600x600, ...others]}
            mode="images"
            place="center end||center"
          />
          <nu-flex
            flow="column"
            place="center start||center"
            padding="||top 3x"
          >
            <nu-strong
              size="h3||2.5x"
              text="||center"
              padding="0 2x"
              color="special"
            >
              {manufacturer}
            </nu-strong>
            <nu-mark radius="0" padding="2x 3x 2x 2x" sizing="border-box">
              <nu-h1 size="h1||3x" text="wrap||wrap center" color="text-strong">
                {model}
              </nu-h1>
            </nu-mark>
            <nu-badge
              place="start||center"
              special
              z="2"
              size="4x||3x"
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
                  {oldPrice?.toFixed(2)}
                  {units?.price}
                </nu-badge>
              )}
              {price?.toFixed(2)}
              {units?.price}
            </nu-badge>
          </nu-flex>
          <nu-flex
            flow="column"
            items="center"
            column="span 2||span 1"
            width="100%"
            padding="6x top"
          >
            <nu-line />
            <nu-h2 padding="2x bottom">
              {literalsRU.CONTENT.SPECIFICATIONS}
            </nu-h2>
            <nu-grid
              border="0"
              columns="auto auto||auto"
              flow="row wrap||row"
              gap="1x 5x"
            >
              {Object.entries(otherProps).map(entry => getSpec(...entry))}
            </nu-grid>
          </nu-flex>
        </nu-grid>
      </nu-flex>
      <Footer />
    </Theme>
  )
}

VacuumCleanerCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  manufacturer: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imagesList: PropTypes.shape({
    image600x600: PropTypes.string.isRequired,
    others: PropTypes.string.isRequired,
  }).isRequired,
  construction: PropTypes.string.isRequired,
  cleaningFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
  oldPrice: PropTypes.number.isRequired,
  units: PropTypes.shape({ price: PropTypes.string.isRequired }).isRequired,
}
