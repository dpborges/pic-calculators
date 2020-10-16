import React from  'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
// import { GlobalStyle }  from '../Styles/GlobalStyles';
import { mediaQuery }  from '../styles/GlobalStyles';
import { setColor }  from '../styles/CommonStyles';
// import { theme } from '../Styles/theme';

const SHOWOUTLINE = false;  /* for debugging purposes */
// const DESKTOP  = "1170px";   /* Same value as what is defined in MediaSettings.js */

// PageHeader renders the header text as an h1 tag. You can optionally add a background
// and define the width, to expand background color as desired.
export default function PageHeader(props) {

    return (
      <HeaderContainer bgcolor={({theme}) => theme.color.primary }>
        <HeaderText fgcolor={({ theme }) => theme.color.white} > 
          Event Planning Calculators
        </HeaderText  >
      </HeaderContainer>
    )
}

const HeaderContainer = styled.div `
    ${SHOWOUTLINE && `border: 2px solid green;`} 
    background-color: ${props => props.bgcolor ? props.bgcolor : props.theme.color.primary};
    display: flex;
    align-items: center;
    height: 6rem;
    width: 100%;

    ${mediaQuery.lessThan("tablet")`
        padding: 0% 0%;
    `}
`;

const HeaderText = styled.h1 `
    color: ${props => props.fgcolor ? props.fgcolor : setColor.white};
    letter-spacing: 1px;
    word-spacing: 2px;
    font-size: 3rem;

    ${mediaQuery.lessThan("tablet")`
        font-size: 2.2rem;
        text-align: center;
    `}
`;

PageHeader.propTypes = {
  bgcolor: PropTypes.string,
  fgcolor: PropTypes.string
};

PageHeader.defaultProps = {
  bgcolor: "white",
  fgcolor: "black"
}

