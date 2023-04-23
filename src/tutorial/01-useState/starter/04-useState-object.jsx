import { useState } from 'react'

const UseStateObject = () => {
  const personDeatil = {
    name: 'usman',
    age: 26,
    hobby: 'playing',
  }
  const [person, setPerson] = useState(personDeatil)

  const updatePersonDetail = () => {
    const newPerson = {
      name: 'Imran',
      age: 18,
      hobby: 'reading',
    }
    setPerson(newPerson)
  }
  const { name, age, hobby } = person
  return (
    <div>
      <h1>Person details</h1>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{hobby}</h4>
      <button type='button' className='btn' onClick={updatePersonDetail}>
        update Person
      </button>
    </div>
  )
}

export default UseStateObject
