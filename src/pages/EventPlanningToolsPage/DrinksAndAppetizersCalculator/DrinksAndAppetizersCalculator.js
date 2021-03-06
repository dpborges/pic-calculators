import React, { Fragment } from  'react';
import { ExpansionPanel } from '../../../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles'
import FoodInputForm from './FoodInputForm';
import { setColor } from '../../../styles/CommonStyles';
import { HorizRule } from '../../../components/decorators/HorizRule';

/**
 * TODOS
 * 1. (DONE) Render form  GuestListCalculatorForm that uses Formik with react native elements
 * 2. (DONE) Once form is rendered, see if I can create a numeric input component from React Native Elements Text field
 *    and yup so I can reuse as a numeric input going forward.
 * 3. Once step 1 and 2 are completed, pass down a callback to the form that gets passed the form data when the form is 
 *    successfully submitted
 */

/**
 * The GuestListCalculator makes use of the ExpansionPanel to be able to collapse and expand 
 * the panel to show the content. The content you would like to display must be child of the
 * Expansion panel component.
 */
const DrinksAndAppetizersCalculator = (props) => {

  return (
    <Fragment>
      <ExpansionPanel text="Drinks and Appetizers Calculator" closed={props.closed} 
          onClickHandler={props.onClickHandler}  
          expandedHeight={{min: '70', max: '84'}} mt="3rem" labelMediaStyle={{marginTop: "-2px"}}
      >
        <Text>
          <Guidance>
            Enter the number of guests and the number of hours for the event. The estimates provided 
            are intended for a 'drinks and appetizer only' event. As a result, 
            appetizer estimates are higher than they would be if served before a meal. In addition to your
            basic appetizers (eg shrimp cocktail, poppers, kabobs, meatballs, etc), we listed other sides
            you may consider as well.
          </Guidance>
        </Text>
        <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2rem"  />
        <FoodInputForm name="localguests" placeholder="Num local guests" label="number of local guests" 
            inputContainerStyle={{textAlign: 'right'}} numGuests={props.numGuests}
        />
      </ExpansionPanel>
    </Fragment>
  )
}

export default DrinksAndAppetizersCalculator;

// const SectionHeader = styled.h2`
//   color: ${setColor.black};
//   padding-left: 1rem;
//   padding-top: 1rem;
// `;

const Text = styled.div`
  margin-top: 1rem;
`;

const Guidance = styled.p`
  color: ${setColor.black};
  font-size: ${props => props.theme.fontSize.medium};
  padding: 1rem;

  ${mediaQuery.lessThan("tablet")`
      font-size: ${props => props.theme.fontSize.small};
  `}

`;

