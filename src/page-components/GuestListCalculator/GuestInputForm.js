import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { mediaQuery } from '../../styles/GlobalStyles';
// import { Button } from 'react-native-elements'
import { Input } from '../../components/formElements/Input';

function GuestInputForm(props) {

  // Configure Input Element as Numeric and set the width
  const inputContainerStyle = {textAlign: 'center'};   // Text-align right Input for use with numeric data
  const containerStyle      = {width: '7rem', height: '9rem'};        // Set the width of the input container.

  const NumericInput = ( (props) => {
    return (
      <Input containerStyle={containerStyle} inputContainerStyle={inputContainerStyle} {...props} />
    )
  })

  return (
    <div>
      <Formik initialValues={{ localguests: '', outOfTownGuests: '', outOfStateGuests: '' }} onSubmit={(data, {setSubmitting, resetForm} ) => {
          /* here is place you would save your data */
          console.log("This s data from the submit", data)
          setSubmitting(true);
          /* Call async api to save data here; once completed, set setSubmitting(false) */
          setSubmitting(false);  /*
          /* allows you to reset form after submitting it and saving it to external store */
          // resetForm()
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
        {({ values, errors, handleSubmit, handleChange }) => (
            <Form>
              <View>
                <CustomLabel>Enter Number of Local Guests</CustomLabel>
                <NumericInput name="localguests" placeholder="number"
                    value={values.localguests}
                    onChange={handleChange}
                />
              </View>              
              <View>
                <CustomLabel>Enter Number of Out of Town Guests / (eg. 2-4 hour travel)</CustomLabel>
                <NumericInput name="outOfTownGuests" placeholder="number"
                    value={values.outOfTownGuests}
                    onChange={handleChange}
                />
              </View> 
              <View>
                <CustomLabel>Enter Number of Out of State Guests / (eg. requiring flight/hotel)</CustomLabel>
                <NumericInput name="outOfStateGuests" placeholder="number"
                    value={values.outOfStateGuests}
                    onChange={handleChange}
                />
              </View>
              <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'flex-end'}}>
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

// ***********************************************************************************
// Styled Components
// ***********************************************************************************

const CustomLabel = styled.div`
  font-size: 1.75rem;
  margin-top: -2.1rem;
  width: 50%;

  ${mediaQuery.lessThan("tablet")`
      font-size: 1.50rem;
  `}
`;

const View = styled.div`
border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  width: 100%;
  height: 8rem;
`;