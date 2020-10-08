import React, { useState } from  'react';
import { ExpansionPanel } from '../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
// import { GlobalStyle, mediaQuery }  from '../components/Styles/GlobalStyles';
// import { css } from 'styled-components';
// import { mediaQuery }  from '../components/Styles/GlobalStyles';
import Page from '../page-components/Page';
import PageHeader from '../page-components/PageHeader';
import GuestListCalculator from '../page-components/GuestListCalculator';

// import { ExpansionPanel } from '../components/common/ExpansionPanel';
// import CollapsibleSection from '../components/common/CollapsibleSection';

export default function EventPlanningCalculators(props) {

    // const [panel1Closed, setPanel1Closed] = useState(true);  /* this is Guest List Panel */
    // const onClickHandlerForPanel1 = () => {setPanel1Closed(prevPanel1Closed => !prevPanel1Closed)}

    return (
      <Page>
        <PageHeader/>
        <GuestListCalculator />
      </Page>
    )
}

const TextContainer = styled.div`
    margin-bottom: 1rem;
    border-left: 1px solid #95A5A6;
    border-bottom: 1px solid #95A5A6;
    border-right: 1px solid #95A5A6;
    border-radius: 0 0 5px 5px;
`;

const Guidance = styled.p`
  color: red;
  font-size: 2rem;
  padding: 1rem;
`;




/*
  <ExpansionPanel text="Guest List Estimator" closed={panel1Closed} onClickHandler={onClickHandlerForPanel1} mt="3rem">
<TextContainer>
            <Guidance>
              Excepteur Lorem enim quis reprehenderit id proident mollit ea laborum do aliqua aliquip. Adipisicing eu minim do quis deserunt. Reprehenderit qui do exercitation nisi Lorem est proident amet et. Sit dolore mollit et esse elit mollit proident in nostrud anim nulla nisi laborum. Quis minim duis occaecat ut laboris elit dolore culpa ea excepteur est commodo pariatur aliqua. Ad in laborum anim deserunt. Ex velit consequat qui velit labore laborum enim eiusmod amet enim labore excepteur.
            </Guidance>
          </TextContainer>
</ExpansionPanel>
*/














/*
 
<CollapsibleSection trigger="Guest List Calculator" >
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section for more!</p>
        </CollapsibleSection>



*/ 
// const GuestCalc = styled.div `
//     color: ${props => props.theme.colors.primary};
//     font-size: ${props => props.theme.fontSizes.xxlarge};
//     ${props => props.theme.fontSizes.xxlarge};
//     width: 100%;
// `;

// const MainTitle = styled.h1 `
//     color: ${props => props.theme.colors.orange};

//     ${mediaQuery.greaterThan("desktop")`
//         color: blue;
//     `}
// `;

// const MainSubtitle = styled.h2 `
//     color: ${props => props.theme.colors.lightgreen};
// `;

// const Para = styled.p `
//     color: ${props => props.theme.colors.black};
//     font-weight: 500;
// `;
