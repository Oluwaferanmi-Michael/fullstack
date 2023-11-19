import { useState } from 'react'
import PhoneBook from './components/Phonebook_form'

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setNewSearchValue] = useState('')

  // add new data event
  const addPerson = (event) => {
    event.preventDefault()

    // New Created Data
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    // to prevent duplicate data
    persons.find(person => {
      if(newPerson.name === person.name){
        console.log('alert condition holds true')
        alert(`${person.name} is already added to the phonebook`)
      } else {
        console.log('alert condition holds false')
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      }})
  }

  // Handle value change in input fields (creating controlled components)
  const handleChange = () => {
    setNewName(event.target.value)
  }
  const phoneNumberChange = () => {
    setNewNumber(event.target.value)
  }

  const searchFunction = () => {
    setNewSearchValue(event.target.value)
  }

    
  const people = persons.filter((person) => searchValue.toLowerCase() === person.name.toLowerCase())

  return (
    <>
    {/* <div>debug: {newName}</div> */}

    <Filter
      people={people}
      searchValue={searchValue}
      searchFunction={searchFunction}
      ></Filter>
    

    <br></br>
      <h2>Phonebook</h2>

      <PhoneBook 
        submitionHandler={addPerson}
        nameInputValue={newName}
        numberInputValue={newNumber}
        nameChangeHandler={handleChange}
        numberChangeHandler={phoneNumberChange}></PhoneBook>

      <h2>Numbers</h2>
      <Numbers persons={persons}></Numbers>
      <div>
      </div>
    </>
  )
}

export default App

const Numbers = ({persons}) => 
  <>
    {persons.map(person => <p key={person.id}>{person.name}, {person.number}</p>)}
  </>


const Filter = ({searchValue, searchFunction, people}) => {
  return (
    <>
      <div>
        search <input value={searchValue} onChange={searchFunction}></input>
      </div>
      {people.map(person => <p key={person.id}>{person.name}</p>)}
    </>
  )
}