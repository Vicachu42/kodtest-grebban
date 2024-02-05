import React from 'react'

const ShuffleButton = () => {
  const handleChange = () => {
    console.log('Button clicked')
  }

  return (
    <>
      <button onClick={handleChange}>Slumpa</button>
    </>
  )
}

export default ShuffleButton