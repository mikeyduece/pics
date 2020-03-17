import React from 'react'

const ImageCard = props => {
  const { alt_description, urls, id } = props.image

  return (
    <div>
      <img key={ id } src={ urls.regular } alt={ alt_description } />
    </div>
  )
}

export default ImageCard