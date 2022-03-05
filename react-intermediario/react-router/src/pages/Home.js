import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <nav>
      <h2>Home Page</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Usuários</Link></li>
      </ul>
    </nav>
  )
}

export default Home
