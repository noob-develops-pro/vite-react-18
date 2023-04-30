import { useState } from 'react'

function useToggle(defaulValue) {
  const [show, setShow] = useState(defaulValue)
  const toggle = () => {
    setShow(!show)
  }

  return { show, toggle }
}

export default useToggle
