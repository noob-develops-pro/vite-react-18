import { useContext } from 'react'
import { useAppContext } from './Navbar'

function UserContainer() {
  const { user, logout } = useAppContext()
  // console.log(value)
  return <p>{user.name}</p>
  return (
    <div className='user-container '>
      {user ? (
        <>
          <p> hello there, {user?.name?.toUpperCase() || 'guest'}</p>
          <button className='btn' onClick={logout}>
            {user?.name ? 'logout' : 'login'}
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  )
}

export default UserContainer
