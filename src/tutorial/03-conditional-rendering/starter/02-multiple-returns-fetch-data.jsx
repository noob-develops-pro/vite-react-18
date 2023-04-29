import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setUser(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return <h3>loading ...</h3>
  }

  const { avatar_url, name, company, bio } = user
  return (
    <div>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: '150px', borderRadius: '25px' }}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}

export default MultipleReturnsFetchData
