import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import { mediaQuery } from '../../../styles/GlobalStyles';
import { Input } from '../../../components/formElements/Input';
// import { Button }  from '../../../components/buttons/Button';
import { HorizRule } from '../../../components/decorators/HorizRule';
import { setColor } from '../../../styles/CommonStyles';
import DrinkResults from './DrinkResults';
import ColumnHeading from './ColumnHeading';

const DrinkInputForm = (props) => {

  // Configure Input Element as Numeric Input  and set the width
  const containerStyle      = {width: '10rem', height: '9rem'};        // Set the width of the input container.
  const inputContainerStyle = {textAlign: 'center'};   // Text-align right Input for use with numeric data

  const NumericInput = ( (props) => {
    return (
      <Input  containerStyle={containerStyle} 
              inputContainerStyle={inputContainerStyle}
              {...props} 
      />
    )
  })

  // Define validation schema
  const validationSchema = yup.object({
    numGuests: yup.number().integer("Not an Integer").min(1, "* Enter number").required("* is required").typeError("Not a number"),
    numHours:  yup.number().integer("Not an Integer").min(1, "* Enter number").required("* is required").typeError("Not a number"),
  })

  return (
    <div>
      <Formik initialValues={{ numGuests: "", numHours: ""}} onSubmit={(data, {setSubmitting, setErrors, resetForm} ) => {
          
          // Ensure empty strings are convert to 0 on input.
          // let ng = data.numGuests      === "" ? 0 : data.numGuests;
          // let nh = data.numHours  === "" ? 0 : data.numHours;

          setSubmitting(true);
          /* Call async api to save data here; once completed, set setSubmitting(false) */
          setSubmitting(false);  /*
          /* allows you to reset form after submitting it and saving it to external store */
          // resetForm()
        }}
        validationSchema={ validationSchema }
      > 
        {/* below is the form - The form seems to be wrapped in a function that returns the form as JSX that in 
            turn becomes a children prop to Formik component. That being said, Formik passes down the values and the
            various callbacks */}
        {({ values, errors, handleSubmit, handleChange }) => (
            <Form>
              <View>
                <CustomLabel>Enter Number of Guests</CustomLabel>
                <NumericInput name="numGuests" placeholder="number"
                    value={values.numGuests}
                    onChange={handleChange}
                    error={errors.numGuests}
                />
              </View>              
              <View>
                <CustomLabel>Enter Number of Hours for the Event</CustomLabel>
                <NumericInput name="numHours" placeholder="number"
                    value={values.numHours}
                    onChange={handleChange}
                    error={errors.numHours}
                />
              </View> 
            {/*
              <ButtonContainer>
                <Button title="Calculate" type="submit" />
              </ButtonContainer>
            */}
              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2rem"/>
              <ColumnHeading />
              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>

              <DrinkResults numGuests={values.numGuests} numHours={values.numHours} />
            </Form>
        )}
      </Formik>
    </div>
  
  );
}

export default DrinkInputForm;

// ***********************************************************************************
// Styled Components
// ***********************************************************************************

const CustomLabel = styled.div`
  font-size: 1.9rem;
  margin-top: -2.1rem;
  width: 60%;

  ${mediaQuery.lessThan("tablet")`
      font-size: 1.50rem;
  `}
`;

const View = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  width: 100%;
  height: 6rem;
`;

// const ColumnHeadings = styled.div`
//   display: flex;
//   justify-content: space-between;
//   /* margin-top: 1.2rem; */

//   ${mediaQuery.lessThan("tablet")`
//      margin: 0;
//   `}
// `;

// const ResultsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 1.2rem;

//   ${mediaQuery.lessThan("tablet")`
//      margin: 0;
//   `}
// `;



// const ResultLayout = styled.div`
//   display: flex;
//   flex-direction: column;

//   /* ${mediaQuery.lessThan("tablet")`
//     flex-direction: column;
//   `} */
// `;

// const Result = styled.div`
//   color: ${props => props.theme.color.text};
//   font-size: ${({ theme }) => theme.fontSize.small};
//   padding-top: 1px;
//   text-align: center;

//   ${mediaQuery.lessThan("tablet")`
//     font-size: ${({ theme }) => theme.fontSize.xsmall};
//     flex-direction: column;
//   `}  
// `;

// const ButtonContainer = styled.div`
//   margin-top: 1rem;
//   margin-right: .6rem; 
//   display: flex; 
//   justify-content: flex-end;

//   ${mediaQuery.lessThan("tablet")`
//      margin-right: 1.5rem; 
//   `}  
// `;

// const FormErrorMsg = styled.div`
//   color: red;
//   font-size: 1.5rem;
//   text-align: center;
//   padding: 0;
//   margin: .2rem 0 1rem 0;
// `;