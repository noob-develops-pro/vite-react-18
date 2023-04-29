import { useState } from 'react'
import { people as data } from '../../../data'
import Person from './Person'

function List() {
  const [people, setPeople] = useState(data)
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}

export default List
