import React from 'react'

import './Content.css'

const Content = (props) => {
  const { children, title } = props
  return (
    <>
      <article className="content">
        <h2>{title}</h2>
        {children}
      </article>
    </>
  )
}
export default Content
