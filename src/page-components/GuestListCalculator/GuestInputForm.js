import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { mediaQuery } from '../../styles/GlobalStyles';
// import { Button } from 'react-native-elements'
import { Input } from '../../components/formElements/Input';
import { Label } from '../../components/formElements/Label';
import { Button }  from '../../components/buttons/Button';
import { HorizRule } from '../../components/decorators/HorizRule';
import { setColor } from '../../styles/CommonStyles';

const GuestInputForm = (props) => {
  
  console.log(`The props: ${JSON.stringify(props)}`);

  // Configure Input Element as Numeric Input  and set the width
  const containerStyle      = {width: '7rem', height: '9rem'};        // Set the width of the input container.
  const inputContainerStyle = {textAlign: 'center'};   // Text-align right Input for use with numeric data

  const NumericInput = ( (props) => {
    return (
      <Input containerStyle={containerStyle} inputContainerStyle={inputContainerStyle} {...props} />
    )
  })

  // Configure styles for labels used for results
  const labelMediaStyles = { width: 7 }

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
              <ButtonContainer>
                <Button title="Submit" />
              </ButtonContainer>
              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2rem"/>
              <ResultsContainer>
                <ResultLayout>
                  <Label mediaStyles={labelMediaStyles}> Total Invites</Label>
                  <Result>100</Result>
                </ResultLayout>
                <ResultLayout>
                  <Label mediaStyles={labelMediaStyles} >Likely to Attend</Label>
                  <Result>81</Result>
                </ResultLayout>
                <ResultLayout>
                  <Label mediaStyles={labelMediaStyles}>Possible No Shows</Label>
                  <Result>19</Result>
                </ResultLayout>
              </ResultsContainer>
              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="2px" mt="2rem"/>
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
  height: 8rem;
`;

const ResultsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;

  ${mediaQuery.lessThan("tablet")`
     margin-: 0;
  `}

`;

const ResultLayout = styled.div`
  display: flex;
  flex-direction: column;

  /* ${mediaQuery.lessThan("tablet")`
    flex-direction: column;
  `} */
`;

const Result = styled.div`
  color: ${props => props.theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: 1px;
  text-align: center;

  ${mediaQuery.lessThan("tablet")`
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    flex-direction: column;
  `}  
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  margin-right: .3rem; 
  display: flex; 
  justify-content: flex-end;

  ${mediaQuery.lessThan("tablet")`
     margin-right: .8rem; 
  `}  
`;