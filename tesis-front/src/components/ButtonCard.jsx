import React from 'react'

export const ButtonCard = ({image,seccion}) => {
  return (
    <div className='button'>
        <img src={image} alt="" />
        <a href="">{seccion}</a>
    </div>
  )
}
