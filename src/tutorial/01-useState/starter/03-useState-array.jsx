import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [persons, setPersons] = useState(data)

  const removeItem = (id) => {
    console.log(id)
    const newPeople = persons.filter((person) => person.id !== id)
    setPersons(newPeople)
  }
  return (
    <div>
      <h2>useState array example</h2>
      <div>
        {persons.map((person) => {
          const { id, name } = person
          return (
            <div key={id}>
              <p>{name}</p>
              <button
                type='button'
                className='btn'
                onClick={() => removeItem(id)}
              >
                remove
              </button>
            </div>
          )
        })}
        <br />
        <button className='btn' onClick={() => setPersons([])}>
          clear all Persons
        </button>
      </div>
    </div>
  )
}

export default UseStateArray
