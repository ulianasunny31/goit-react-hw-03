/* eslint-disable react/prop-types */
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

const Contact = ({id, name, number, deleteContact}) => {
 
  return (
    <div className={css.contactDiv}>
      <div>
        <h3><IoPerson />{name}</h3>
        <h3 className={css.contactLastHeading}><FaPhone /> {number}</h3>
      </div>

      <button onClick={()=>deleteContact(id)}>Delete</button>
      
    </div>
  )
}

export default Contact;