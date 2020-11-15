import React from 'react'
import { Formik } from "formik";

const AddNote =()=>{
    return(
        <Formik>
             initialValues={{
          title: "",
          note: ""
          
        }}
         validate={(values) => {
          const errors = {};
          if (values.name.trim().length < 1) {
            errors.title = "Required";
          }else if(values.name.length < 5){
              errors.title="Title should be more than 5 Characters"
          }
          if()
        }}
        </Formik>
    )
}