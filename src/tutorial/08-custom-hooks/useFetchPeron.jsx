import { useEffect, useState } from 'react'

function useFetchData(url) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setUser] = useState(null)

  const fetchUser = async () => {
    try {
      const resp = await fetch(url)
      // console.log(resp);
      if (!resp.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }

      const data = await resp.json()
      setUser(data)
    } catch (error) {
      setIsError(true)
      // console.log(error);
    }
    // hide loading
    setIsLoading(false)
  }
  useEffect(() => {
    fetchUser()
  }, [])

  return { isLoading, isError, data }
}

export default useFetchData
