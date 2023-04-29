import { useState } from 'react'

const initialState = { name: '', email: '' }

const ControlledInputs = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.id
    const value = e.target.value

    setState({ ...state, [name]: value })

    // const newData = {}
    // newData[name] = value
    // if (name === 'name') {
    //   setName(newData)
    // }
    // if (name === 'email') {
    //   setEmail(newData)
    // }
    // console.log(name)
  }

  const { name, email } = state
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) console.log(name, email)
    setState(initialState)
  }
  return (
    <form className='form'>
      <h4>controlled inputs</h4>
      <div className='from-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          id='name'
          className='form-input'
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='from-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          id='email'
          className='form-input'
          value={email}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn' onClick={handleSubmit}>
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
