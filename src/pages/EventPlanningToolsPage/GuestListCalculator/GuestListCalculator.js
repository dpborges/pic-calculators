import React, { Fragment } from  'react';
import { ExpansionPanel } from '../../../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles'
import GuestInputForm from './GuestInputForm';
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
 * <SectionHeader>Guest List Calculator</SectionHeader>
 */
const GuestListCalculator = (props) => {

  return (
    <Fragment>
      <ExpansionPanel text="Guest List Calculator" closed={props.closed} 
                onClickHandler={props.onClickHandler} mt="3rem"
                expandedHeight={{min: '45', max: '65'}}
      >
        <Text>
          <Guidance>
            When sending out invites keep in mind that everyone may not be able to attend  
            your event for various reasons (eg. other commitments, long distance travel,  previous engagement,  
            illness, etc). This tool attempts to estimate guest attendance based on whether invitees are local, out of town,
            or out of state guests. Many Event planners use this count for food and drink estimates.
          </Guidance>
        </Text>
        <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2rem"  />
        <GuestInputForm name="localguests" placeholder="Num local guests" label="number of local guests" 
            inputContainerStyle={{textAlign: 'right'}} formCallBack={props.formCallBack}
        />
      </ExpansionPanel>
    </Fragment>
  )

}

export default GuestListCalculator;

// const SectionHeader = styled.h2`
//   color: ${setColor.black};
//   padding-left: 1rem;
//   padding-top: 1rem;

//   ${mediaQuery.lessThan("tablet")`
//       font-size: ${props => props.theme.fontSize.small};
//   `}
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

