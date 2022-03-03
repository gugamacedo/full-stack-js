import React from 'react'

import Header from '../partials/Header'
import Nav from '../partials/Nav'

const Template = ({ onChangePage, children, pages, activePage }) => (
  <>
    <Header title={activePage} />
    <Nav onChangePage={onChangePage} pages={pages}/>
    {children}
  </>
)

export default Template
