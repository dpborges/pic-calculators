import React from  'react';
import styled from 'styled-components';
// import { GlobalStyle, mediaQuery }  from '../components/Styles/GlobalStyles';
import { css } from 'styled-components';
import { mediaQuery }  from '../components/Styles/GlobalStyles';
import Page from '../components/common/Page';
import PageHeader from '../components/common/PageHeader';

export default function EventPlanningCalculators(props) {

  console.log("This is props ", JSON.stringify(props,null,2))

   let fgcolor = props.theme.colors.orange;
   let bgcolor = props.theme.colors.orange;

    return (
      <Page>
        <PageHeader fgcolor={fgcolor} bgcolor={bgcolor} />
      </Page>
    )
}

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
