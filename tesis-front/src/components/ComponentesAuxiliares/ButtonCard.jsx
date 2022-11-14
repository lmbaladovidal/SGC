import React from 'react'
import './ButtonCard.css'

export const ButtonCard = ({image,seccion,url}) => {
  return (
    <a href={url} className='button'>
      <div>
        <img src={image} alt="" className='card-icon'/>
        <h6 className='button-h6'>{seccion}</h6>
      </div>
    </a>
  )
}
