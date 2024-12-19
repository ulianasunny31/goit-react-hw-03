/* eslint-disable react/prop-types */
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'


const ContactList = ({ contacts }) => {
  
    return (
  <div className={css.contactList}>
      {
                contacts.map(({ id, name, number }) => {
       
        { return <Contact key={id} name={name} number={number}/>}
    })
            }
    </div>
  )
}

export default ContactList;