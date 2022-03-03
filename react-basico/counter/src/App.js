import React, { useState } from 'react'

import Albums from './pages/Albums'
import Counter from './pages/Counter'
import Users from './pages/Users'
import Template from './templates/Template'

const App = () => {
  const pages = {
    albums: Albums,
    counter: Counter,
    users: Users
  }

  const [page, setPage] = useState() // pode colocar a página inicial como valor

  const handleChangePage = page => setPage(page)

  const Page = pages[page]

  return (
    <>
      <Template onChangePage={handleChangePage} pages={pages} activePage={page}>
        { Page && <Page /> }
      </Template>
    </>
  )
}

export default App
