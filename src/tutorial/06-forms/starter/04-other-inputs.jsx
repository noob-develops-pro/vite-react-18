import { useState } from 'react'
const frameworks = ['react', 'angular', 'vue', 'svelte']

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)
  const [frameWork, setFrameWork] = useState('react')

  const handleChange = (e) => {
    setShipping(e.target.checked)
  }
  const handleFramework = (e) => {
    setFrameWork(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(frameWork)
    console.log(shipping)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type='checkbox' value={shipping} onChange={handleChange} />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select
            name='framework'
            id='framework'
            value={frameWork}
            onChange={handleFramework}
          >
            {frameworks.map((option) => {
              return <option key={option}>{option}</option>
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
