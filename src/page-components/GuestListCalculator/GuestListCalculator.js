import React, { useState, Fragment } from  'react';
import { ExpansionPanel } from '../../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
import GuestInputForm from './GuestInputForm';
import { NumericInput } from '../../components/formElements/NumericInput'
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
        <NumericInput name="localguests" placeholder="Num local guests"  />
      </ExpansionPanel>
    </Fragment>
  )
}

export default GuestListCalculator;

const ContainerStyle = {
  border: '1px solid green', 
  width: '50%'
}

// const NumericInput = styled.input`
//     text-align: center;
//     font-size: 2rem;
//     height: 4rem;
//     width:  10rem;
// `;

const SectionHeader = styled.h2`
  color: ${setColor.black};
  padding-left: 1rem;
  padding-top: 1rem;
`;

const Text = styled.div`
  /* margin-bottom: 1rem;
  margin-top: -1rem; */
  /* border-left: 1px solid #95A5A6;
  border-bottom: 1px solid #95A5A6;
  border-right: 1px solid #95A5A6;
  border-radius: 0 0 5px 5px; */
`;

const Guidance = styled.p`
  color: ${setColor.black};
  font-size: 2rem;
  padding: 1rem;
`;

