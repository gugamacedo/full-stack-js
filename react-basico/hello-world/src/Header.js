import React from 'react'
import './Header.css'

function Header(props) {
  const { image, title } = props
  return (
    <header className='header'>
      <img src={ image } alt="Logo" width="100px"></img>
      { title }
    </header>
  )
}
export default Header
