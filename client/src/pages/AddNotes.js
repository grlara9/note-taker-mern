import React from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
import './AddNotes.css'

const AddNote =()=>{
   return(
    <Formik
      initialValues={{ 
        title: '', 
        note: ''
      }}

    validationSchema={Yup.object({
      title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      note: Yup.string()
        .min(20, 'Must be 20 characters or more')
        .required('Required'),
      
    })}

    onSubmit={(values, { setSubmitting }) => {
      axios.post('http://localhost:5000/api/addnote', values)
       
        setSubmitting(false);
     
    }}
  >
    <Form>
      <h1>Add Note</h1>

      <label htmlFor="title">Title</label>
      <Field name="title" type="text" />
      <ErrorMessage name="title" />

      <label htmlFor="note">Note</label>
      <Field name="note" as="textarea" />
      <ErrorMessage name="note" />

     
      <button type="submit" className="submit-button">Submit</button>
    </Form>
  </Formik>
    )
}
export default AddNote