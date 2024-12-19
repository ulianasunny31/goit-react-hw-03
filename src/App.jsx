import ContactList from './components/ContactList/ContactList';
// import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox';
import './App.css'

//initial state of the phonebook
const INITIAL_STATE= [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


function App() {


  return (
  <div>
  <h1>Phonebook</h1>
  {/* <ContactForm initialVal={INITIAL_STATE} /> */}
  {/* <SearchBox /> */}
  <ContactList initialVal={INITIAL_STATE}/>
</div>

  )
}

export default App
