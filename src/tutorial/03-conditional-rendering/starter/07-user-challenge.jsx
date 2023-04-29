import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  const handleLogin = () => {
    const newUser = { name: 'usman' }
    setUser(newUser)
  }
  const handleLogout = () => {
    setUser(null)
  }
  return user ? (
    <LoggedInUser user={user} handleLogout={handleLogout} />
  ) : (
    <GestUser handleLogin={handleLogin} />
  )
}

const LoggedInUser = ({ user, handleLogout }) => {
  return (
    <div>
      <h4>Hello there , user name is {user.name}</h4>
      <button className='btn' onClick={handleLogout}>
        logout
      </button>
    </div>
  )
}
const GestUser = ({ handleLogin }) => {
  return (
    <div>
      <h4>Please login</h4>
      <button className='btn' onClick={handleLogin}>
        login
      </button>
    </div>
  )
}

export default UserChallenge
