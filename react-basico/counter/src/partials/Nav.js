import React from 'react'

const Nav = ({ onChangePage, pages }) => (
  <nav>
    { Object.keys(pages).map(page => <button onClick={() => onChangePage(page)}>{page}</button>) }
  </nav>
)

export default Nav
