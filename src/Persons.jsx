import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { FIND_PERSON } from './persons/graphql-queries';

export const Persons = ({persons}) => {
  const [getPerson, result] = useLazyQuery(FIND_PERSON)
  const [person, setPerson] = useState(null)

  const showPerson = name => {
    console.log(name)
    getPerson({variables: {name : name}})
  }

  useEffect(() => {
    console.log(result)
    if(result.data) {
      setPerson(result.data.findPerson)
    }
  }, [result])

  if(person) {
    return (
      <div>
        <h2>{person.name}</h2>
        <div>{person.address.street}, {person.address.city}</div>
        <div>{person.phone}</div>
        <button onClick={() => setPerson(null)}>Close</button>
      </div> 
    )
  }

  if(persons === null) return null

  return (
    <div>
      <h2>Persons</h2>
      {
        persons.map(person =>
          <div key={person.id} onClick={() => {showPerson(person.name)}}>
            {person.name} {person.phone}
          </div>
        )
      }
    </div>
  )
}
