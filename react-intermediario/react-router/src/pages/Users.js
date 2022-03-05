import React from 'react'
import { Link } from 'react-router-dom'

function Users() {
  return (
    <>
      <h2>Users Page</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Usuários</Link>
        </li>
      </ul>
    </>
  )
}

export default Users
