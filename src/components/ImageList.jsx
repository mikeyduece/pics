import './ImageList.scss'
import React from 'react'

const ImageList = props => {
  console.log(props.images)
  const images = props.images.map(({ alt_description, id, urls }) => {
    return <img key={ id } src={ urls.regular } alt={ alt_description } />
  })

  return (
    <div className='img-list'>
      { images }
    </div>
  )
}

export default ImageList