import React, { Fragment } from  'react';
import { ExpansionPanel } from '../../../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles'
import FoodInputForm from './FoodInputForm';
import { setColor } from '../../../styles/CommonStyles';
import { HorizRule } from '../../../components/decorators/HorizRule';

/**
 * The GuestListCalculator makes use of the ExpansionPanel to be able to collapse and expand 
 * the panel to show the content. The content you would like to display must be child of the
 * Expansion panel component.
 */
const FoodServingCalculator = (props) => {

  return (
    <Fragment>
      <ExpansionPanel text="Food Serving Calculator" closed={props.closed} 
         onClickHandler={props.onClickHandler}  
         expandedHeight={{min: '118', max: '160'}} mt="3rem"
      >
        <Text>
          <Guidance>
            Enter the number of guests that will attending the event. Scan below to get an idea 
            of quantity of food you'll need based on what you will be serving.
            Keep in mind that the more options you have, the less you'll need of each. 
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

