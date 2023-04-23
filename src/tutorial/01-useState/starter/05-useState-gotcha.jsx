import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(1)
  const hadnleIncrease = () => {
    setValue(value + 1)
    console.log(value)
  }
  const handleWithPrevState = () => {
    setValue((currentState) => {
      // setFuction can take a callback with a parameter which holds the current state before the states updated
      const newState = currentState + 1
      console.log(currentState)
      return newState
    })
  }
  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1
      })
      console.log('btn clicked', value)
    }, 1000)
  }
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h4>{value}</h4>
      <button type='button' className='btn' onClick={handleClick}>
        update by 1
      </button>
    </>
  )
}

export default UseStateGotcha
