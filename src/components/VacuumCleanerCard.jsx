import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import EntityPageLink from "./EntityPageLink"
import literals from "../literals"

export default function VacuumCleanerCard({
  id,
  manufacturer,
  model,
  price,
  imagesList: { thumb },
  construction,
  cleaningFeatures,
  oldPrice,
  units,
}) {
  const [image, setImage] = useState("#")

  useEffect(() => {
    setImage(process.env.GATSBY_API_URL + thumb)
  }, [thumb])

  return (
    <nu-card theme="blue" height="23x||13x" width="auto 100% 95vw" padding="0">
      <nu-pane gap="0" items="flex-start">
        <nu-region padding="2x 1x 2x 2x||1x 0x 1x 1x" fill="mark">
          <EntityPageLink id={id}>
            <nu-img
              src={image}
              height="18x||10x"
              width="18x||10x"
              border
              style={{
                backgroundImage: `url(${window.location.origin}/placeholder.jpg)`,
                backgroundSize: "contain",
              }}
            />
          </EntityPageLink>
        </nu-region>
        <nu-region width="90%" move="0.5x 1x">
          <nu-strong
            width="50%"
            padding="0 2x||0 1x"
            color="special"
            line-clamp="1"
          >
            {manufacturer}
          </nu-strong>
          <nu-mark width="90%" radius="0" padding="0x 3x 0x 2x">
            <EntityPageLink id={id}>
              <nu-h4
                size="h4||2.5x"
                title={model}
                width="100%||10vw 100% 50vw"
                line-clamp="1"
                color="text-strong"
                text-overflow="ellipsis"
              >
                {model}
              </nu-h4>
            </EntityPageLink>
          </nu-mark>
          <nu-description move="0 3x||0 0.5x" width="90%" height="6x">
            <nu-grid
              rows="auto auto"
              columns="auto auto auto"
              items="left"
              content="space-between left"
              flow="column"
              gap="0 1.5x"
            >
              <nu-badge
                special
                z="2"
                size="3x||2x"
                padding="1x 1x||0.5x"
                text="italic"
                position="absolute"
                weight="regular"
                row="span 2"
                border="0"
              >
                <EntityPageLink id={id}>
                  {oldPrice === price || (
                    <nu-badge
                      border="0"
                      bg="transparent"
                      size="2x||1.5x"
                      padding="0x 1.5x"
                      text="italic del"
                      weight="regular"
                      place="absolute"
                      move="0 -140%|0 -100%|"
                    >
                      {oldPrice.toFixed(2)}
                      {units.price}
                    </nu-badge>
                  )}
                  {price.toFixed(2)}
                  {units.price}
                </EntityPageLink>
              </nu-badge>
              <nu-block hide="n|n|y" line-clamp="1">
                <nu-strong>
                  {`${literals.CONTENT.FIELDS.construction}: `}
                </nu-strong>
                {construction}
              </nu-block>
              <nu-block hide="n|n|y" line-clamp="1">
                <nu-strong>
                  {`${literals.CONTENT.FIELDS.cleaningFeatures}: `}
                </nu-strong>
                {cleaningFeatures.join(", ")}
              </nu-block>
            </nu-grid>
          </nu-description>
        </nu-region>
      </nu-pane>
    </nu-card>
  )
}

VacuumCleanerCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  manufacturer: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imagesList: PropTypes.shape({
    thumb: PropTypes.string.isRequired,
  }).isRequired,
  construction: PropTypes.string.isRequired,
  cleaningFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
  oldPrice: PropTypes.number.isRequired,
  units: PropTypes.shape({ price: PropTypes.string.isRequired }).isRequired,
}
