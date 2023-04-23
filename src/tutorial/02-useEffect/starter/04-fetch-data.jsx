import { useState } from 'react'
import { useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
  const getData = () => {
    const data = fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }

  useEffect(() => {
    getData()
    console.log(users)
  }, [])

  return (
    <section>
      <h3>Github Users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
