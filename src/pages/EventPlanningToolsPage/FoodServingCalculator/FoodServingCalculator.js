import React, { useState, Fragment } from  'react';
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
 * 3. Once step 1 and 2 are completed, pass down a callback to the form that gets passed the from data when the form is 
 *    successfully submitted
 */

/**
 * The GuestListCalculator makes use of the ExpansionPanel to be able to collapse and expand 
 * the panel to show the content. The content you would like to display must be child of the
 * Expansion panel component.
 */
const FoodServingCalculator = (props) => {

  const [panel1Closed, setPanel1Closed] = useState(true);  /* this is Guest List Panel */
  const onClickHandlerForPanel1 = () => {setPanel1Closed(prevPanel1Closed => !prevPanel1Closed)}

  console.log(`Inside Drink calculator ${JSON.stringify(props)}`)

  return (
    <Fragment>
      <ExpansionPanel text="Food Serving Calculator" closed={panel1Closed} onClickHandler={onClickHandlerForPanel1} 
         expandedHeight={{min: '70', max: '84'}} mt="3rem"
      >
        <SectionHeader>Food Serving Calculator</SectionHeader>
        <Text>
          <Guidance>
            Enter the number of guests and the number of hours for the event. If serving one type of 
            drink (eg. wine), you can use the estimate provided. If serving more than 1 type of drink 
            (eg. beer alcohol, and wine), you may need to lower the estimates, based on guest preferences. 
            If you know your guests, you can enter the number of wine drinkers for example, instead of 
            entering all guests, and use this for your wine estimate. Then do the same for the alcohol 
            and beer drinkers. This will give you the best results.
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

export default FoodServingCalculator;

const SectionHeader = styled.h2`
  color: ${setColor.black};
  padding-left: 1rem;
  padding-top: 1rem;
`;

const Text = styled.div`
  
`;

const Guidance = styled.p`
  color: ${setColor.black};
  font-size: ${props => props.theme.fontSize.medium};
  padding: 1rem;

  ${mediaQuery.lessThan("tablet")`
      font-size: ${props => props.theme.fontSize.small};
  `}

`;

