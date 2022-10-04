import React from 'react'

export const ButtonCard = ({image,seccion}) => {
  return (
    <a href='' className='button'>
      <div>
        <img src={image} alt="" className='card-icon'/>
        <h6>{seccion}</h6>
      </div>
    </a>
  )
}
