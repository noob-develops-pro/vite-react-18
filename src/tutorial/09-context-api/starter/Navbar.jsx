import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' })

  const handleLogin = () => {
    // const newUser = { name: 'usman' }
    setUser({ ...user, name: 'usman' })
  }
  const handleLogout = () => {
    setUser(null)
  }
  // return user ? (
  //   <LoggedInUser user={user} handleLogout={handleLogout} />
  // ) : (
  //   <GestUser handleLogin={handleLogin} />
  // )
  return (
    <nav className='navbar'>
      <h5>prop Drilling</h5>
      <NavLinks user={user} logout={handleLogout} />
    </nav>
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

export default Navbar
