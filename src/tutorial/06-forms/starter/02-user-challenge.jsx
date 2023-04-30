import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data) // array of objs: [{},{}]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please Enter Name')
      return
    }
    const newUser = { id: Date.now(), name }
    // setUsers([...users, newUser]) //works fine
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    setName('')
  }
  const handleRemove = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id)
    setUsers(updatedUsers)
  }

  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block' onClick={handleSubmit}>
          submit
        </button>
      </form>
      {users.map((user) => {
        const { id, name } = user
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button className='btn' onClick={() => handleRemove(id)}>
              remome
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
