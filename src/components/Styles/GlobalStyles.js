// **************************************************************************
// This file is used to define global styles across your application.
// Add the GlobalStyle component to the root of your application (eg. App.js)
// Note, the styled-normalize component is based off normalize.css
// **************************************************************************
import {createGlobalStyle} from "styled-components";
import {normalize} from 'styled-normalize';
import {Color} from "./Settings";
import { Theme, theme } from "./Theme";

// Note theme (NOT Theme) is the object defined within the our Theme provider
// This is only place theme is used. The reason is because GlobalStyle is a template string and not a React Component.
// In order to set defaults in Global styles for fontFamily and background color, we need to access the object directly
// versus wrapping a component with our Theme provider component (which is not possible in this case).

const GlobalStyle = createGlobalStyle`
    
    ${normalize}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        
    body {
        color:  ${Color.black};
        background-color: lightgray;
    }

    html {
       font-size: 62.5%;
       ${theme.fontFamily.primary};
      
       background:${theme.colors.white};
       
       h1{ font-size: 4.8rem; }
       h2{ font-size: 3.2rem; margin: 1.2rem 0;  }
       h3{ font-size: 2.4rem; margin: 1rem 0;    }
       h4{ font-size: 1.9rem; margin: .75rem 0;  }
       h5{ font-size: 1.6rem; font-weight: 700; margin: .5rem 0; }
       h6{ font-size: 1.4rem; margin: .4rem 0;   }

       p { font-size: 2rem;  }
    }

    button {
        cursor: pointer;
    }
    button.disabled {
        cursor: default;
    }

`;
export default GlobalStyle;