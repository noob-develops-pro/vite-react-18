function UserContainer({ user, logout }) {
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
