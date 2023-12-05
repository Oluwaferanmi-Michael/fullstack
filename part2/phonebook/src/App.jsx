import { useEffect, useState } from 'react'
import phonebookService from './services/phonebookService'
import Numbers from './components/numbers_component'
import PhoneBookForm from './components/Phonebook_form'
import Notification from './components/Notifications'
import ErrorNotification from './components/ErrorNotification'

function App() {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setNewSearchValue] = useState('')
  const [notifyMessage, setNotifyMessage] = useState()
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {
    console.log('effect')

    phonebookService.getAll()
      .then(response =>
        {
          console.log(`state set`)
          setPersons(response)
          console.log(response)
      }
    )
  }, [])

  // add new data event
  const addPerson = (event) => {
    event.preventDefault()

    // to prevent duplicate data
    const person = persons.find(p => newName === p.name)
    console.log(`person objectfrom creating contact : \t ${person}`)

    const changedPerson =  {...person, number: newNumber}

    if (person === undefined) {
      createContact()
    } else if (person.name === newName){
      updateContact(person, person.name, changedPerson)
    }

  }

  const createContact = () => {
    console.log(`creating contact`)

      // New Created Data
      const newPerson = {
        name: newName,
        number: newNumber,
      }

      phonebookService.createContact(newPerson).then(
          response => {
            console.log('adding to phonebook...')
            notify(`${response.name} has been added`)
            setPersons(persons.concat(response))
          })
          setNewName('')
          setNewNumber('')
      }
  


  // update data if name already exists in phonebook
  const updateContact = (person, name, updateData) => {
    
    if(confirm(`${person.name} is already added to the phonebook do you want to update this contact?`)){
      console.log(`person object from updating contact : \t ${person}`)
      phonebookService.updateContact(
        person.id,
        updateData
        ).then(response => {
          setPersons(persons.map(person => person.name !== name ? person : response))
          notify(`${person.name} has been updated`)
          setNewName('')
          setNewNumber('')
        }).catch((err) => {
          notifyError(`Information of ${person.name} has already been removed from the server`)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  // Delete Number
  const deletePerson = (id) => {
    const deletedId = id;
    const newList = persons.filter(person => 
      person.id !== deletedId)
      console.log(newList)
    phonebookService.deletePerson(id).then(() => {
      notify(`deleted person number ${id}`)
      setPersons(newList)
    }).then(
      () => phonebookService.getAll()
    )
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
    
  const people = persons.filter((person) => searchValue === person.name)

  // notifications function
  const notify = (message) => {
   setNotifyMessage(message) 

   setTimeout(() => {
    setNotifyMessage(null)
   }, 5000);}

   const notifyError = (message) => {
    setErrorMessage(message) 
 
    setTimeout(() => {
     setErrorMessage(null)
    }, 5000);
  }

  return (
    <>
    {/* <div>debug: {newName}</div> */}

    <Filter
      peopleFilter={people}
      searchValue={searchValue}
      searchFunction={searchFunction}
      ></Filter>

    <Notification message={notifyMessage}></Notification>
    <ErrorNotification message={errorMessage}></ErrorNotification>

    <br></br>
      <h2>Phonebook</h2>

      <PhoneBookForm 
        submitionHandler={addPerson}
        nameInputValue={newName}
        numberInputValue={newNumber}
        nameChangeHandler={handleChange}
        numberChangeHandler={phoneNumberChange}></PhoneBookForm>

      <h2>Numbers</h2>
      <Numbers personData={persons} onDelete={(id) => deletePerson(id)}></Numbers>
      <div>
      </div>
    </>
  )}

export default App


const Filter = ({searchValue, searchFunction, peopleFilter}) => {
  return (
    <>
      <div>
        search <input value={searchValue} onChange={searchFunction}></input>
      </div>
      {peopleFilter.map(person => <p key={person.id}>{person.name}</p>)}
    </>
  )
}
