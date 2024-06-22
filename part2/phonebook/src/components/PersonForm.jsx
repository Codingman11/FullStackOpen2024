import { useState } from "react"
import personService from '../services/persons'


const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const isAlreadyPerson = (name, number) => {
        return persons.some(person => person.name === name && person.number === number)
    }
    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        if (isAlreadyPerson(newName, newNumber)) {
            alert(`${newName} with number ${newNumber} is already added to phonebook.`);
        } else {
            const exisitingPerson = persons.find(person => person.name === personObject.name)
            if (exisitingPerson) {
                const confirmUser = confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)
                if (confirmUser) {
                    personService
                        .update(exisitingPerson.id, personObject)
                        .then(updatedPerson => {
                            setPersons(persons.map(person =>
                                person.id !== exisitingPerson.id ? person : updatedPerson
                            ))
                        })
                    setNewName('')
                    setNewNumber('')
                }
            } else {
                personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
            }
        }
       
        setNewName('')
        setNewNumber('')
    }
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handlePersonChange} />
                </div>
                <div>
                    number <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm;