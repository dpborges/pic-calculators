import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import { mediaQuery } from '../../../styles/GlobalStyles';
// import { Button } from 'react-native-elements'
import { Input } from '../../../components/formElements/Input';
import { Label } from '../../../components/formElements/Label';
import { Button }  from '../../../components/buttons/Button';
import { HorizRule } from '../../../components/decorators/HorizRule';
import { setColor } from '../../../styles/CommonStyles';
import calcEstimatedGuests from './calcEstimatedGuests';
  import {hasAtLeastOneNonEmptyValue}  from '../../../utils/validators/hasAtLeastOneNonEmptyValue'

const GuestInputForm = (props) => {
  
  let theFormCallBack = props.formCallBack;
  
  // Initial state variables
  const [formStatus, setFormStatus] = useState("");

  const [totalInvites, setTotalInvites] = useState(0);
  const [likelyToAttend, setLikelyToAttend] = useState(0);
  const [possibleNoShows, setPossibleNoShows] = useState(0);

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

  // Configure label component by setting property on media query for labels used in the  Results component
  const labelMediaStyles = { width: 7 }

  // Define validation schema
  const validationSchema = yup.object({
    localguests: yup.number().integer("Not an Integer").min(0, "invalid entry").notRequired("* is required").typeError("Not a number"),
    outOfTownGuests: yup.number().integer("Not an Integer").min(0, "invalid entry").notRequired().typeError("Not a number"),
    outOfStateGuests: yup.number().integer("Not an Integer").min(0, "invalid entry").notRequired().typeError("Not a number")
  })

  return (
    <div>
      <Formik initialValues={{ localguests: "0", outOfTownGuests: "0", outOfStateGuests: "0" }} onSubmit={(data, {setSubmitting, setErrors, resetForm} ) => {
          
          // Ensure empty strings are convert to 0 on input.
          let lg   = data.localguests      === "" ? 0 : data.localguests;
          let ootg = data.outOfTownGuests  === "" ? 0 : data.outOfTownGuests;
          let oosg = data.outOfStateGuests === "" ? 0 : data.outOfStateGuests;

          // Set form error if at least one value was not entered. 
          let hasOneInput = hasAtLeastOneNonEmptyValue([lg,  ootg, oosg], "0");
          hasOneInput ? setFormStatus("") : setFormStatus("At least one value required");

          // Calculate the guest estimates
          let results = calcEstimatedGuests(lg, ootg, oosg);
          setTotalInvites(results.totalInvites);
          setLikelyToAttend(results.likelyToAttend);
          setPossibleNoShows(results.possibleNoShows);

          // Fire the callback passed down from EventPlanningToolsPage to provide parent page numGuests likely to attend
          theFormCallBack(results.likelyToAttend)

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
            <Form autoComplete="false">
              <FormErrorMsg>{formStatus}</FormErrorMsg>
              <View>
                <CustomLabel>Enter Number of Local Guests</CustomLabel>
                <NumericInput name="localguests" placeholder="number" errorStyle={{width: '9rem'}}
                    value={values.localguests}
                    onChange={handleChange}
                    error={errors.localguests}
                    autoComplete="false"
                    type="text"
                />
              </View>              
              <View>
                <CustomLabel>Enter Number of Out of Town Guests / (eg. 2-4 hour travel)</CustomLabel>
                <NumericInput name="outOfTownGuests" placeholder="number"
                    value={values.outOfTownGuests}
                    onChange={handleChange}
                    error={errors.outOfTownGuests}
                    autoComplete="false"
                />
              </View> 
              <View>
                <CustomLabel>Enter Number of Out of State Guests / (eg. requiring flight/hotel)</CustomLabel>
                <NumericInput name="outOfStateGuests" placeholder="number"
                    value={values.outOfStateGuests}
                    onChange={handleChange}
                    error={errors.outOfStateGuests}
                    autoComplete="off"
                />
              </View>

              <ButtonContainer>
                <Button title="Submit" type="submit" />
              </ButtonContainer>

              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2rem"/>
              
              <ResultsContainer>
                <ResultLayout>
                  <Label mediaStyles={labelMediaStyles}> Total Guests</Label>
                  <Result>{totalInvites}</Result>
                </ResultLayout>
                <ResultLayout>
                  <Label mediaStyles={labelMediaStyles}>Likely to Attend</Label>
                  <Result>{likelyToAttend}</Result>
                </ResultLayout>
                <ResultLayout>
                  <Label mediaStyles={labelMediaStyles}>Possible No Shows</Label>
                  <Result>{possibleNoShows}</Result>
                </ResultLayout>
              </ResultsContainer>
              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2rem"/>
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
  font-size: 1.9rem;
  /* margin-top: -2.1rem; */
  padding-bottom: 1rem;
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
  padding-right: 1rem;
  /* padding-top: .5rem; */
  width: 100%;
  height: 6rem;

  ${mediaQuery.lessThan("tablet")`
      height: 6rem;
  `}
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
  /* border?: 1px solid red; */
  margin-top: 1rem;
  margin-right: 1%;
  display: flex; 
  justify-content: flex-end;

  ${mediaQuery.lessThan("tablet")`
     margin-right: 1rem; 
  `}  
`;

const FormErrorMsg = styled.div`
  color: red;
  font-size: 1.5rem;
  text-align: right;
  padding: 0;
  margin: .2rem 0 1rem 0;
  text-transform: capitalize;
  ${mediaQuery.lessThan("tablet")`
     text-align: center;
  `}  
`;