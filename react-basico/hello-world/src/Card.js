import React from 'react'

import './Card.css'

const Card = ({ title, image, description }) => (
  <div className='card'>
    <h3>{title}</h3>
    <img src={image} alt={title} />
    <p>{description}</p>
  </div>
)

export default Card