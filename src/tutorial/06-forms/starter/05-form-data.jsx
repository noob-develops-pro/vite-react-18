import { useState } from 'react'

const UncontrolledInputs = () => {
  const [user, setUser] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // to get the value of a name u must give name attribute to input tag
    // const name = formData.get('name') <input name = 'name'/>
    // const email = formData.get('email') <input name = 'email'/>
    // const password = formData.get('password') <input name = 'password'/>
    // console.log([...formData.entries()]) data stored in arr of key-value pair [{name:'valueOfName'}]

    const newUser = Object.fromEntries(formData) //Object.fromEntries() ES20 feature
    setUser([...user, newUser])
    console.log(user)
    console.log(user.length)

    e.currentTarget.reset()
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default UncontrolledInputs
