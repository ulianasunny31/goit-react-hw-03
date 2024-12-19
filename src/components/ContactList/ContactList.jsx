/* eslint-disable react/prop-types */
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'


const ContactList = ({ contacts, deleteContact }) => {
  
    return (
  <div className={css.contactList}>
      {
                contacts.map(({ id, name, number }) => {
       
        { return <Contact deleteContact={deleteContact} key={id} name={name} number={number} id={id}/>}
    })
            }
    </div>
  )
}

export default ContactList;