import React from 'react'
import { Formik } from "formik";

const AddNote =()=>{
    return(
        <Formik
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
          if (values.note.trim().length < 1) {
            errors.note = "Required";
          }
          else if(values.note.length < 15){
            errors.note = "Note should be 15 characters long or more";
          }
        }}
        >
            {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              error={errors.title && touched.title}
              label="Title "
              variant="outlined"
              type="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              fullWidth
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              label="Your phone number"
              error={errors.phone && touched.phone}
              type="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              fullWidth
              className={classes.textField}
            />
            <Button
              type="submit"
              disabled={!errors.name && !errors.phone}
              variant="contained"
              className={classes.textField}
            >
              Where's the Pizzaaaaaahhhh!!!!
            </Button>
            <div>{JSON.stringify({ ...values, ...errors })}</div>
          </form>
        )}
        </Formik>
    )
}
export default AddNote