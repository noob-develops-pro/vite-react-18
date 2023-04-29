import { useEffect, useState } from 'react'

const MultipleReturnsBasics = () => {
  const [loading, setLoading] = useState(true)
  const loadingFalse = () => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  useEffect(() => {
    loadingFalse()
  }, [])

  if (loading) {
    return <h3>loading ...</h3>
  }
  return <h3>Hello World</h3>
}
export default MultipleReturnsBasics
