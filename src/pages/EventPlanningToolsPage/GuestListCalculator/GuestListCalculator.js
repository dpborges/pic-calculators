import React, { Fragment } from  'react';
import { ExpansionPanel } from '../../../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles'
import GuestInputForm from './GuestInputForm';
import { setColor } from '../../../styles/CommonStyles';
import { HorizRule } from '../../../components/decorators/HorizRule';

/**
 * The GuestListCalculator makes use of the ExpansionPanel to be able to collapse and expand 
 * the panel to show the content. The content you display must be child of the Expansion panel component.
 */
const GuestListCalculator = (props) => {

  // Event Planner use This count can in turn be used for food and drink estimates. 
  return (
    <Fragment>
      <ExpansionPanel text="Guest List Calculator" closed={props.closed} 
                onClickHandler={props.onClickHandler} mt="3rem"
                expandedHeight={{min: '50', max: '70'}}
      >
        <Text>
          <Guidance>
            When sending out invites, keep in mind that everyone may not be able to attend  
            your event for various reasons (eg. long distance travel). This tool estimates guests 
            likely to attend based on whether invitees are local, out of town, or out of state guests. 
            You can use this count as part of your event action plan, for estimating food and drinks. If want to 
            know exactly who would be attending, consider using a <BlogLink href="https://pitchinclub.com"> free app </BlogLink> 
            that has an event rsvp tracker.
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

// That was used as <SectionHeader>some text</SectionHeader> which i decided to remove
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

const BlogLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color.primary};
  font-weight: ${props => props.theme.fontWeight.normal};
  transition: color .5s;

  &:hover  {
    color: ${props => props.theme.color.lightblue};
  }

`;


