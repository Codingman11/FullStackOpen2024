import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')

  //Getting the persons from database
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id) //Finding the person with id 
    //If found person and confirmed then it will delete
    if (personToDelete && confirm(`Delete ${personToDelete.name}?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter(person => person.id !== id));
      });
    };
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} setPersons={setPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App