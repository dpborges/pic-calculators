import React from 'react';
import { Formik, Form } from 'formik';
// import { Button } from 'react-native-elements'

// Example 8 - Is the same as Example 7 but shows how to do validation and error handling using the meta field
 //   The useField hook returns a meta object that gives you access to following:
 //   meta.error, meta.initialError, meta.initialTouched, meta,initialValue, meta.touched, and meta.value.
 //   The touch attribute is true when user has clicked or edited field.
 //   Step 1) Use the meta field inside your custom TextField to check if there is an error. Pass down
 //      props like helperText, placeholder, and error - which is boolean. If true error will show as red.
 //   Step 2) Add the validate prop to the top level Formik component that gets passed a callback that is 
 //      called when an error has occured. The function is passed the values on your form. You can return 
 //      an object with errors that you detect on the form. The format is errors.<field name> = "error message
 //   Step 3) you can also add errors prop the function wrapping the formik Form component and use it you
 //      <pre> tag for debugging purpose

function GuestInputForm() {

  // const TextInput = ({placeholder, ...props}) => {
  //   return ( 
  //     <TextField {...field} helperText={errorText} placeholder={placeholder} error={!!errorText} />
  //   )
  // }

  const TextInput = ({placeholder, ...props}) => {
    return ( 
      <input  {...props} />
    )
  }

  return (
    <div>
      <Formik initialValues={{ numlocal: 0 }} onSubmit={(data, {setSubmitting, resetForm} ) => {
          /* here is place you would save your data */
          console.log(data)
          setSubmitting(true);
          /* Call async api to save data here; once completed, set setSubmitting(false) */
          setSubmitting(false);  /*
          /* allows you to reset form after submitting it and saving it to external store */
          resetForm()
        }}
        validate={(values) => {
          // const errors = {};
          // if (values.firstName.includes('bob')) {
          //   errors.firstName = "no bob allowed"
          // }
          // return errors;
        }}
      > 
        {/* below is the form - The form seems to be wrapped in a function that returns the form as JSX that in 
            turn becomes a children prop to Formik component. That being said, Formik passes down the values and the
            various callbacks */}
        {({ values, errors, handleSubmit }) => (
            <Form>

              <TextInput />

              <div style={{marginTop: '2rem'}}>
                <button type="solid">Submit</button>
              </div> 

              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>Error Object:{JSON.stringify(errors, null, 2)}</pre>
            </Form>
        )}
      </Formik>
    </div>
  
  );
}

export default GuestInputForm;
