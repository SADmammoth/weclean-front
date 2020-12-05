import React, { useCallback, useState } from "react"
import jsxNativeEvents from "jsx-native-events"
import _ from "lodash"

export default function Gallery({ images, mode, ...props }) {
  const [index, setIndex] = useState(0)
  function createImage(src, i, array, main = false) {
    const image = (
      <nu-img
        key={"image" + i}
        src={process.env.GATSBY_API_URL + src}
        width="100%"
        height="100%"
        border={main || "0"}
      />
    )
    return array ? (
      <nu-btn
        onClick={() => {
          setIndex(i)
        }}
        padding="0.5x"
        border={i !== index || "3bw"}
        width="8x"
        height="8x"
        display
      >
        {image}
      </nu-btn>
    ) : (
      image
    )
  }

  function createRadioButtons(count) {
    return _.times(count, i => (
      <nu-radio
        value={i}
        onClick={() => {
          setIndex(i)
        }}
        size="1.5x"
      />
    ))
  }

  const next = useCallback(() => {
    if (index < images.length - 1) setIndex(index + 1)
  }, [index])

  const prev = useCallback(() => {
    if (index > 0) setIndex(index - 1)
  }, [index])

  return (
    <nu-section id="gallery" {...props}>
      <nu-pane flow="column" items="center" width="22.5vw 30x 70vw">
        {createImage(images[index], index, null, true)}
        {images.length === 1 || (
          <nu-pane place="center">
            <nu-attrs for="btn" border="0" fill="transparent" padding="0" />
            <nu-btn onClick={prev} disabled={index === 0 || null}>
              <nu-icon name="chevron-left" />
            </nu-btn>
            {mode !== "radio" || (
              <nu-radiogroup value={index} gap="1x">
                {createRadioButtons(images.length)}
              </nu-radiogroup>
            )}
            {mode !== "images" || <nu-pane>{images.map(createImage)}</nu-pane>}

            <nu-btn
              onClick={next}
              control="image"
              disabled={index === images.length - 1 || null}
            >
              <nu-icon name="chevron-right" />
            </nu-btn>
          </nu-pane>
        )}
      </nu-pane>
    </nu-section>
  )
}
