/* eslint-disable react/prop-types */
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'


const ContactList = ({ initialVal }) => {
  
    return (
  <div className={css.contactList}>
      {
                initialVal.map(({ id, name, number }) => {
       
        { return <Contact key={id} name={name} number={number}/>}
    })
            }
    </div>
  )
}

export default ContactList;