/* eslint-disable react/prop-types */
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid'
import { useId } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ initialVal }) => {
    const nameId = useId();
    const numberId = useId();
  return (
      <Formik initialValues={{ initialVal }} onSubmit={() => { }}>
          <Form className={css.form}>
              <div>
                <label htmlFor={nameId}>Name</label>
                <Field id={nameId} type='text' name='name'/>  
              </div>
              <div>
                <label htmlFor={numberId}>Number</label>
                <Field id={numberId} type='text' name='number'/>
              </div>

              <button type='submit'>Add contact</button>
          </Form>
      
    </Formik>
  )
}

export default ContactForm;