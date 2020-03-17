import React, { useLayoutEffect, useRef, useState } from 'react'

const ImageCard = props => {
  const element = useRef()
  const [imgRef, setImgRef] = useState(0)
  const [spans, setSpans] = useState(0)
  const { alt_description, urls, id } = props.image

  useLayoutEffect(() => {
    const height = element.current.clientHeight

    setImgRef(element.current.addEventListener('load', setSpans))
    setSpans(Math.ceil(height / 150))
  }, [])

  return (
    <div key={ id } style={ { gridRowEnd: `span ${ spans }` } }>
      <img ref={ element } src={ urls.regular } alt={ alt_description } />
    </div>
  )
}

export default ImageCard