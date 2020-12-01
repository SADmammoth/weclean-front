import React, { useState, useEffect } from "react"
import EntityPageLink from "./EntityPageLink"

export default function VacuumCleanerCard({
  id,
  manufacturer,
  model,
  price,
  imagesList: { thumb },
  construction,
  weight,
  cleaningFeatures,
  powerSource,
  oldPrice,
  units,
}) {
  const [image, setImage] = useState("#")

  useEffect(() => {
    setImage(process.env.GATSBY_API_URL + thumb)
  }, [thumb])

  return (
    <nu-card theme="blue" height="23x">
      <nu-pane gap="0" items="flex-start">
        <nu-region move="-2x -2x" padding="2x 1x 2x 2x" fill="mark">
          <EntityPageLink id={id}>
            <nu-img src={image} height="18x" width="18x" border />
          </EntityPageLink>
        </nu-region>
        <nu-region width="90%">
          <nu-strong width="50%" padding="0 2x" color="special" class="nowrap">
            {manufacturer}
          </nu-strong>
          <nu-mark width="100%" radius="0" padding="0x 3x 0x 2x">
            <EntityPageLink id={id}>
              <nu-h4
                class="nowrap"
                color="text-strong"
                text-overflow="ellipsis"
              >
                {model}
              </nu-h4>
            </EntityPageLink>
          </nu-mark>
          <nu-description move="0 3x" width="90%" height="6x">
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
                size="3x"
                padding="1x 1x"
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
                </EntityPageLink>
              </nu-badge>
              <nu-block class="nowrap">
                <nu-strong>Construction type: </nu-strong>
                {construction}
              </nu-block>
              <nu-block class="nowrap">
                <nu-strong>Cleaning features: </nu-strong>
                {cleaningFeatures.join(", ")}
              </nu-block>
            </nu-grid>
          </nu-description>
        </nu-region>
      </nu-pane>
    </nu-card>
  )
}
