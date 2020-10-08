import { css } from 'styled-components';

// This is the file used by the Theme provider in our GlobalStyles.js
export const theme = {
    colors: {
        /* App theme colors */
        primary:    "#2980B7",   // blue
        secondary:  "#95A5A6",   // grey


        // /* Alternative colors */
        // black:      "#3f3838",
        // blue:       "#2980B7",
        // lightgreen:  "#6BB950",
        // greyshade3: "#95A5A6",
        // orange:     "#CC6600",
        // orange2:    "#ad4b0a",
        // white:      "#ffffff"
    },
    fontFamily: {
        primary:   css`font-family: 'Lato', 'Avenir', 'Adobe Heiti Std', 'Segoe UI', 'Trebuchet MS', 'sans-serif'`,
        secondary: css`font-family: 'Roboto', 'Lato', 'Arial', 'sans-serif'`,
        tertiary:  css`font-family: 'Montserrat', 'Lato', 'Arial', 'sans-serif'`
    },
    /* fontSizes: {
        xsmall:     "1.6rem",  
        small:      "1.8rem",
        medium:     "2.2rem",
        large:      "2.6rem",
        xlarge:     "3rem",
         xxlarge:    "3.4rem" 
    } */
};



