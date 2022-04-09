import React from 'react'
import useStyles from './Cards.style'

const Cards = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.cards}>
      {children}
    </div>
  )
} 

export default Cards