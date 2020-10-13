import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { setColor, setFontWeight } from '../../styles/CommonStyles';
import { mediaQuery } from '../../styles/GlobalStyles';

// ***********************************************************************************
// React component 
// ***********************************************************************************
/**
 * Input component - this input component tries to emulate Input component from "react native 
 *   elements" so as to provide consistency if and when I use react native.
 *   Props
 *      outline - boolean that is 
 *   
 *  Design Pattern 
 *    1) defined styled component with mediaQuery (within the compoment itself)
 *    2) define prop name that can override basic properties like color, padding, margin of the sytled component
 *   Todos 
 *    - Apply above pattern to inputContainerStyle
 */
export const Input = (props) => {
  
  // Apply any style overrides caller may have provided via props
  const inputContainerStyle = props.inputContainerStyle ? props.inputContainerStyle : {};
  const containerStyle      = props.containerStyle ? props.containerStyle : {};
  const errorStyle          = props.errorStyle ? props.errorStyle : {};
  const labelStyle          = props.labelStyle ? props.labelStyle : {};

  // Render component
  return (
    <View style={containerStyle}>
      <Label style={{labelStyle}} >
        {props.label} 
      </Label >
      <StyledInput type="text" style={inputContainerStyle} {...props} />
      <Error style={errorStyle}>{props.error}</Error>
    </View>
  )
}

// ***********************************************************************************
// Props Definitions
// ***********************************************************************************
/**
 * Prop definitions and prop defaults - there are 4 props that allow you to override existing Styled Component properties.
 * The outline prop defaults to true which shows all 4 sides of border on input field. When set to false it will only
 * show bottom border.
 */
Input.propTypes = {
  inputContainerStyle:  PropTypes.object,  
  containerStyle:       PropTypes.object,   
  errorStyle:           PropTypes.object,   
  labelStyle:           PropTypes.object,
  label:                PropTypes.string,
  outline:              PropTypes.bool,   
};

Input.defaultProps = {
  outline: true,
  label: ""
};

// ***********************************************************************************
// Styled Components
// ***********************************************************************************
/**
 * Style for View element which corresponds to the containerStyle prop 
 * This styles the container around the label, input element, and the error message.
 * Height should account for all these 3 elements, especially if you espect a multi-line error message.
 */
const View = styled.div`
  height: 8rem;
  width: 20rem;
`;

/**
 * Style for label; prop used to override default style is labelStyle
 */
const Label = styled.p`
  color: ${setColor.forLabel};
  font-weight: ${setFontWeight.bolder};
  font-size: 1.45rem;
  height: 1.6rem;
  padding-bottom: 3px;
  ${theme.fontFamily.secondary};

  ${mediaQuery.lessThan("tablet")`
      font-size: 1.25rem;
      padding-bottom: 2px;
  `}
`;

/**
 * Style for Input element / the correspondig prop name is inputContainerElement
 * Provides style for the inputs placeholder, input text, and border. The outline prop is also 
 * evaluated below to determine whether to show full border or just border bottom.
 */
const StyledInput = styled.input` 
    ${props => props.outline && `
      border: 1px solid ${setColor.mediumgrey}; `
    };

    ${props => !props.outline && `
      border: 1px solid ${setColor.mediumgrey}; 
      border-right: transparent; 
      border-left: transparent;
      border-top: transparent;`
    };

    color: ${setColor.black};
    height: 3.5rem;
    width: 100%;
    font-size: 1.5rem;
    font-weight: ${setFontWeight.normal};
    margin: 0;
    padding: 0 4px;
    text-align: left;
    outline: none;

    ::placeholder {
      color: ${setColor.lightgrey};
      font-size: 1.45rem;
      font-weight: ${setFontWeight.normal};
      padding: 0 4px;

      ${mediaQuery.lessThan("tablet")`
         font-size: 1.25rem;
      `}

    }

    &:focus { outline: none; };
    &:hover { outline: none; };

    ${mediaQuery.lessThan("tablet")`
        text-align: left;
        font-size: 1.2rem;
    `}
`;

/**
 * Style for Error component; style used to override default errorStyle
 */
const Error = styled.p`
   color: red;
   font-size: 1.3rem;
   height: 1.4rem;
   margin-top: 2px;
`;
