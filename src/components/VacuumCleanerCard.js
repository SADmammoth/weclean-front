import React, { useState, useEffect } from "react"

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
  dustCollectorType,
  oldPrice,
}) {
  const [image, setImage] = useState("#")

  useEffect(() => {
    setImage(process.env.GATSBY_API_URL + thumb)
  }, [thumb])

  return (
    <nu-card theme="blue" width="60%" height="23x">
      <nu-pane gap="0" items="flex-start">
        <nu-region move="-2x -2x" padding="2x 1x 2x 2x" fill="mark">
          <nu-img src={image} height="18x" width="18x" border />
        </nu-region>
        <nu-region grow="1">
          <nu-strong padding="0 2x" color="special">
            {manufacturer}
          </nu-strong>
          <nu-mark width="100%" radius="0" padding="0x 3x 0x 2x">
            <nu-h4 color="text-strong">{model}</nu-h4>
          </nu-mark>
          <nu-description move="2x 2x" width="90%" height="6x">
            <nu-grid
              rows="auto auto"
              columns="auto auto auto"
              items="left"
              content="space-between left"
              flow="column"
              gap="0.5x 3x"
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
              >
                {oldPrice === price || (
                  <nu-badge
                    bg="transparent"
                    size="2x"
                    padding="0x 1.5x"
                    text="italic del"
                    weight="regular"
                    place="absolute"
                    move="0 -140%"
                  >
                    ${oldPrice.toFixed(2)}
                  </nu-badge>
                )}
                ${price.toFixed(2)}
              </nu-badge>
              <nu-block class="nowrap">
                <nu-strong>Construction type: </nu-strong>
                {construction}
              </nu-block>
              <nu-block class="nowrap">
                <nu-strong>Weight: </nu-strong>
                {weight} lbs
              </nu-block>
              <nu-block class="nowrap">
                <nu-strong>Cleaning features: </nu-strong>
                {cleaningFeatures}
              </nu-block>
              <nu-block class="nowrap">
                <nu-strong>Power source: </nu-strong>
                {powerSource}
              </nu-block>
            </nu-grid>
          </nu-description>
        </nu-region>
      </nu-pane>
    </nu-card>
  )
}
