

const ShuffleButton = () => {
  const handleChange = () => {
    console.log('Button clicked')
  }

  return (
    <>
      <button onClick={handleChange}>Shuffle tiles</button>
    </>
  )
}

export default ShuffleButton