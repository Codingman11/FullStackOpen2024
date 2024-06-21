import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])

  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(res => {
        setPersons(res.data)
      })
  }, [])



  //const filterPerson = showAll ? persons : persons.filter()


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App