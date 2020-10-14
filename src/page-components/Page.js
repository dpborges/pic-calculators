import React from  'react';
import styled from 'styled-components';
import { mediaQuery }  from '../styles/GlobalStyles';

const SHOWOUTLINE = false;  /* for debugging purposes */
const DESKTOP  = "1170px";   /* Same value as what is defined in MediaSettings.js */

// Page component Serves as the Container for your application Page. The Page is intially 
// sized for the desktop. The Container uses flexbox to center the ContentArea and provides
// the padding for the desktop and a larger padding size for devices equal or smaller than a 
// tablet. The ContentArea is what defines the initial width. 
export default function Page({children}) {
    return (
        <Container>
          <ContentArea>
            {children}
          </ContentArea>
        </Container>
    )
}

// Container serves as flexbox parent; It also assumes 100% of the width of the parent container.
const Container = styled.div `
    ${SHOWOUTLINE && `border: 2px solid red;`} 
    display: flex;
    justify-content: center;
    padding: 2% 3%;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    
    ${mediaQuery.lessThan("tablet")`
        padding: 3% 5%;
    `}
`;

// The ContentArea sets the max-width to the size of the desktop defined in the mediaQuery Settings
const ContentArea = styled.div `
    ${SHOWOUTLINE && `border: 2px solid blue;`} 
    /* width: 90%; */
    width: ${DESKTOP};
    
`;


