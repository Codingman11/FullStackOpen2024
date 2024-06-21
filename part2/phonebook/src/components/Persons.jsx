import { useState } from 'react'
import Filter from './Filter'
const Person = ({ person }) => {

    return <p>{person.name} {person.number}</p>
}

const Persons = ({ persons, newFilter }) => {
    const personsToShow = newFilter ? persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        : persons;

    return (
        <div>
            {personsToShow.map(person => (
                <Person key={person.id} person={person} />
            ))}
            {/* {persons.map(person => (
        <Person key={person.id} person={person} />
      ))} */}
        </div>
    )
}
export default Persons

