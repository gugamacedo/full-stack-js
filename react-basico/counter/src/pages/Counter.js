import React, { useState, useEffect } from 'react'

import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = count

    return () => document.title = 'React App'
  }, [count])

  const handleOnClick = (operator) => {
    const newCount = operator === '+' ? count + 1 : count -1

    setCount(newCount)
  }

  return (
    <>
      <div className='counter'>
        <button onClick={() => handleOnClick('-')}> - </button>
        <span>{count}</span>
        <button onClick={() => handleOnClick('+')}> + </button>
      </div>
    </>
  )
} 

export default Counter
