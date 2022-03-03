import React, { useEffect, useState } from 'react'

import Loading from '../components/Loading'

const Albums = () => {
  const [isLoading, setLoading] = useState(false)

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => {
      setAlbums(data)
      setLoading(false)
    })
  }, [])
  return (
    <>
      <Loading visible={isLoading} />
      {
        albums.map(album => (
          <div>
            <span>id: {album.id} - {album.title}</span>
          </div>
        ))
      }
    </>
  )
}

export default Albums
