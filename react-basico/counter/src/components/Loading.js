import React from 'react'

import load from './load.gif'

const Loading = ({ visible }) => (
  <div>
    { visible === true ? <img src={load} alt="Load" width="50px" /> : ''}
  </div>
)

export default Loading
