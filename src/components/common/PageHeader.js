import React from  'react';
import styled from 'styled-components';
import { GlobalStyle }  from '../Styles/GlobalStyles';
import { mediaQuery }  from '../Styles/GlobalStyles';

const SHOWOUTLINE = false;  /* for debugging purposes */
const DESKTOP  = "1170px";   /* Same value as what is defined in MediaSettings.js */

// PageHeader renders the header text as an h1 tag. You can optionally add a background
// and define the width, to expand background color as desired.
export default function PageHeader(props) {

    console.log(`Props in PageHeader ${JSON.stringify(props,null,2)}`)
    return (
      <HeaderContainer>
        <HeaderText>
          Event Planning Calculators
        </HeaderText>
      </HeaderContainer>
    )
}

const HeaderContainer = styled.div `
    ${SHOWOUTLINE && `border: 2px solid green;`} 
    ${props => console.log('this is bgcolor => ', props.bgcolor)}
    background-color: ${props => props.bgcolor};
    /* background-color: ${props => props.bgcolor ? props.bgcolor : props.theme.colors.blue}; */
    display: flex;
    align-items: center;
    height: 6rem;
    width: 100%;

    ${mediaQuery.lessThan("tablet")`
        padding: 0% 0%;
    `}
`;

const HeaderText = styled.h1 `
    color: ${props => props.fgcolor ? props.fgcolor : props.theme.colors.white};
`;


