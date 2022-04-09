import React from 'react'
import useStyles from './Card.style'

import './Card.css'

const Card = ({ title, image, description }) => {
  const classes = useStyles()

  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p className={classes.phrase}>
        {description}
        <span className={classes.word1}>FIM</span>
        <span className={classes.word2}>END</span>
      </p>
    </div>
  )
}

export default Card
