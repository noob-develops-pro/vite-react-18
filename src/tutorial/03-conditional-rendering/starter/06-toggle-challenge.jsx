import { useState } from 'react'

const ToggleChallenge = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <>
      <button
        className='btn'
        style={{ marginTop: '4rem' }}
        onClick={handleClick}
      >
        btn
      </button>
      <div>{show ? <h2>hello world</h2> : ''}</div>
    </>
  )
}

export default ToggleChallenge
