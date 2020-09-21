import React from  'react';
import styled from 'styled-components';
import GlobalStyle from '../components/Styles/GlobalStyles';


export default function EventPlanningCalculators() {
    return (
        <CalcPageContainer>
          <GlobalStyle />
          <MainTitle>This is H1</MainTitle>
          <MainSubtitle>This is H2</MainSubtitle>
          <h3>This is H3</h3>
          <h4>This is H4</h4>
          <h5>This is H5</h5>
          <h6>This is H6</h6>
          <div>This is calculator page </div>
          <Para>This is paragraph</Para>
        </CalcPageContainer>
    )
}

const CalcPageContainer = styled.div `
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.xxlarge};
    ${props => props.theme.fontSizes.xxlarge};
    border: 2px solid black;
`;

const MainTitle = styled.h1 `
    color: ${props => props.theme.colors.orange};
`;

const MainSubtitle = styled.h2 `
    color: ${props => props.theme.colors.lightgreen};
`;

const Para = styled.p `
    color: ${props => props.theme.colors.black};
    font-weight: 500;
`;
