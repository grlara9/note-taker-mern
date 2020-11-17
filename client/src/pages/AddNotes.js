import React from 'react'
import { Formik } from "formik";
import './AddNotes.css'
import {
    Button,
    TextField,
    Container,
    CssBaseline,
    Grid,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    makeStyles,
  } from "@material-ui/core";


  const useStyles = makeStyles({
    textField: {
      marginTop: "1em",
    },
    pizzaImage: {
      width: "100%",
    },
  });
const AddNote =()=>{
    const classes = useStyles();
    return(
        <Formik
             initialValues={{
          title: "",
          note: ""
          
        }}
         validate={(values) => {
          const errors = {};

          if (!values.title) {
            errors.title = 'Required';
          } 

          if (!values.note) {
            errors.note = 'Required';
          } else if (values.note.length < 20) {
            errors.note = 'Must be 20 characters or more';
          }
          return errors;
        }}

        onSubmit={(values) => {}}
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
              label="Title "
              variant="outlined"
              type="text"
              name="title"
              errors={errors.title && touched.title}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              fullWidth
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              label="Enter Note"
              errors={errors.note && touched.note}
              type="text"
              name="note"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.note}
              fullWidth
              className={classes.textField}
            />
            <Button
              type="submit"
              disabled={errors.title || errors.note}
              variant="contained"
              className={classes.textField}
            >
             submit
            </Button>
            <div>{JSON.stringify({ ...values, ...errors })}</div>
          </form>
        )}
        </Formik>
    )
}
export default AddNote