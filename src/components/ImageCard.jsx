import React, { useEffect, useRef, useState } from 'react'

const ImageCard = props => {
  const { alt_description, urls } = props.image
  const imgRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const setSpans = () => {
      const span = imgRef.current.clientHeight
      const spans = Math.ceil(span / 10)

      setHeight(spans)
    }

    imgRef.current.addEventListener('load', setSpans)
  },[])

  return (
    <div style={ { gridRowEnd: `span ${ height }` } }>
      <img ref={ imgRef } src={ urls.regular } alt={ alt_description } />
    </div>
  )
}

export default ImageCard