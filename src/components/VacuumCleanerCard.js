import React, { useState, useEffect } from "react"

export default function VacuumCleanerCard({
  id,
  manufacturer,
  model,
  price,
  imagesList: { thumb },
}) {
  const [image, setImage] = useState("#")

  useEffect(() => {
    setImage(process.env.GATSBY_API_URL + thumb)
  }, [thumb])

  return (
    <nu-card>
      <nu-img src={image} />
      <nu-h3>{model}</nu-h3>
      <nu-h4>{manufacturer}</nu-h4>
      <nu-badge>${price}</nu-badge>
    </nu-card>
  )
}
