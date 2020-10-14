import React, { useState, Fragment } from  'react';
import { ExpansionPanel } from '../../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
import { mediaQuery } from '../../styles/GlobalStyles'
import GuestInputForm from './GuestInputForm';
import { Input } from '../../components/formElements/Input'
// import { GlobalStyle, mediaQuery }  from '../components/Styles/GlobalStyles';
// import { css } from 'styled-components';
// import { mediaQuery }  from '../components/Styles/GlobalStyles';
// import Page from '../page-components/Page';
// import PageHeader from '../page-components/PageHeader';
// import { ExpansionPanel } from '../components/common/ExpansionPanel';
// import CollapsibleSection from '../components/common/CollapsibleSection';
import { setColor } from '../../styles/CommonStyles';
import { HorizRule } from '../../components/decorators/HorizRule';

/**
 * TODOS
 * 1. Render form  GuestListCalculatorForm that uses Formik with react native elements
 * 2. Once form is rendered, see if I can create a numeric input component from React Native Elements Text field
 *    and yup so I can reuse as a numeric input going forward.
 * 3. Once step 1 and 2 are completed, pass down a callback to the form that gets passed the from data when the form is 
 *    successfully submitted
 */

/**
 * The GuestListCalculator makes use of the ExpansionPanel to be able to collapse and expand 
 * the panel to show the content. The content you would like to display must be child of the
 * Expansion panel component.
 */
const GuestListCalculator = (props) => {

  const [panel1Closed, setPanel1Closed] = useState(true);  /* this is Guest List Panel */
  const onClickHandlerForPanel1 = () => {setPanel1Closed(prevPanel1Closed => !prevPanel1Closed)}

  return (
    <Fragment>
      <ExpansionPanel text="Guest List Calculator" closed={panel1Closed} onClickHandler={onClickHandlerForPanel1} mt="3rem">
        <SectionHeader>Guest List Calculator</SectionHeader>
        <Text>
          <Guidance>
            Excepteur Lorem enim quis reprehenderit id proident mollit ea laborum do aliqua aliquip. Adipisicing eu minim do quis deserunt. Reprehenderit qui do exercitation nisi Lorem est proident amet et. Sit dolore mollit et esse elit mollit proident in nostrud anim nulla nisi laborum. Quis minim duis occaecat ut laboris elit dolore culpa ea excepteur est commodo pariatur aliqua. Ad in laborum anim deserunt. Ex velit consequat qui velit labore laborum enim eiusmod amet enim labore excepteur.
          </Guidance>
        </Text>
        <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2rem"  />
        <GuestInputForm name="localguests" placeholder="Num local guests" label="number of local guests" 
            inputContainerStyle={{textAlign: 'right'}} 
        />
      </ExpansionPanel>
    </Fragment>
  )
}

export default GuestListCalculator;

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

