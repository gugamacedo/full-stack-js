import React, { useEffect, useState } from 'react'

import Loading from '../components/Loading'

const Users = () => {
  const [isLoading, setLoading] = useState(false)

  const [users, setUsers] = useState([])

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
  }, [])
  return (
    <>
      <Loading visible={isLoading} />
      {
        users.map(user => (
          <div>
            <span>id: {user.id} - {user.name}</span>
          </div>
        ))
      }
    </>
  )
}

export default Users
