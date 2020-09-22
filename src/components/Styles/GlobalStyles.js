// *********************************************************************************
// This file is used to define global styles across your application.
// Add the GlobalStyle component to the root of your application (eg. App.js)
// In this file we 
//  - add the styled-normalize component at the top. This is based off normalize.css
//  - set fontsize to 62.5%. Based on browser default that 1rem = 16px, the 62.5%
//    results in setting 1rem to 10 px.
//  - import our custom media settings and export it as mediaQuery.  This allows us 
//    to import both GlobaStyle and mediaQuery from one line as follows, if required.
//      import { GlobalStyle, mediaQuery }  from '../components/Styles/GlobalStyles';
// ***********************************************************************************
import {createGlobalStyle} from "styled-components";
import {normalize} from 'styled-normalize';
import {theme} from "./theme";
import mediaSettings from "./MediaSettings";  // This set up styled-media-query, which is exported at bottom of file

// Note the reason we're using the theme object directly (instead of props.theme.value) is because 
// GlobalStyle is a template string nd not a React Component. In order to set defaults in Global 
// styles for fontFamily and background color, we need to access the object directly versus wrapping 
// a component with our Theme provider component (which is not possible in this case).
export const GlobalStyle = createGlobalStyle`
    
    ${normalize}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        
    body {
        color:  ${theme.colors.black};
        background-color: lightgray;
    }

    html {
       font-size: 62.5%;   
       ${theme.fontFamily.primary};
          
       background:${theme.colors.white};
       
       h1{ font-size: 3.2rem; font-weight: 900; padding: 0 1rem;}
       h2{ font-size: 2.4rem; margin: 1.2rem 0;  }
       h3{ font-size: 1.9rem; margin: 1rem 0;    }
       h4{ font-size: 1.6rem; margin: .75rem 0;  }
       h5{ font-size: 1.32rem; font-weight: 700; margin: .5rem 0; }
       h6{ font-size: 1.1rem; margin: .4rem 0;   }

       p { font-size: 2rem;  }
    }

    button {
        cursor: pointer;
    }
    button.disabled {
        cursor: default;
    }

`;

// Exports our media-query setting defined with styled-media-query so it can be imported from 
// GlobalStyle anywhere from our application
export const mediaQuery = mediaSettings;

