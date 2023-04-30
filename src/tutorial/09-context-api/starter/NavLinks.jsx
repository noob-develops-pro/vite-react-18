import UserContainer from '../UserContainer'

function NavLinks({ user, logout }) {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>Home</a>
          <a href='#'>About</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  )
}

export default NavLinks
