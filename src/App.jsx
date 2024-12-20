import {useState} from 'react'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css'
import { useEffect } from 'react';

//initial state of the phonebook
const INITIAL_STATE= [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) return JSON.parse(savedContacts);
    return INITIAL_STATE;
  });

  const [searchWord, setSearchWord] = useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

  function addContact(newContact) {
   setContacts([...contacts, newContact])
  }

  function deleteContact(contactID) {
   setContacts(prev=> prev.filter(contact=>contact.id !== contactID))
  }
 
  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase()
    .includes(searchWord.toLowerCase()))

  return (
    <>
      <h1>Phonebook</h1>
      <div className='app-style-div'>
      <div className='app-style-div-two'>
        <ContactForm addContact={addContact} />
        <SearchBox searchWord={searchWord} onSearch={setSearchWord} />
      </div>
  
  <ContactList contacts={visibleContacts} deleteContact={deleteContact}/>
</div>
    </>
 

  )
}

export default App
