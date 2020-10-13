import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaQuery } from '../../styles/GlobalStyles'

/* Button was created to emulate Button from React Native Elements. No width is defined. The width 
   of the button is predicated on length of title.

   Next up should be to implement the loading prop to disable button when making api calls.
    
*/
export const Button  = (props) => {

  // Apply any style overrides caller may have provided via props
  const containerStyle   = props.containerStyle ? props.containerStyle : {};
  const buttonStyle      = props.buttonStyle ? props.buttonStyle : {};
  const titleStyle      = props.titleStyle ? props.titleStyle : {};
  const onclickHandler   = props.onclickHandler ? props.onclickHandler : () => "" ;
  
  /* If button is being used on a form(as a submit button), you don't need the onClickHandler. 
      If the onclickHandler prop is not specified, button will therefore be rendered without the 
      onClick handler and without the button type. */
  return  (
    <View style={containerStyle}>
      <StyledButton buttonStyle={buttonStyle} onclickHandler={onclickHandler}>
        <Text style={titleStyle}>{props.title}</Text>
      </StyledButton>
    </View>
  )
}

// ***********************************************************************************
// Props Definitions
// // ***********************************************************************************
Button.propTypes = {
    title:              PropTypes.string.isRequired, 
    titleStyle:         PropTypes.object, 
    containerStyle:     PropTypes.object,  
    inputContainerStyle:  PropTypes.object,  
    buttonStyle:        PropTypes.object, 
    onClickHandler:     PropTypes.func,
    loading:            PropTypes.bool
}

// ***********************************************************************************
// Styled Components
// ***********************************************************************************

/**
 * View is the Container Style which defines what is considered as the standard height and width. 
 * for the button. By default, there is no width defined, but can be passed via containerStyle. 
 * */ 
const View = styled.div`
  height: 4rem;
`;

const StyledButton = styled.button`
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.btn1};
  border-width: 0px;
  border-color: ${props => props.theme.color.btn1};
  height: 3.5rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding: 0 14px;
  outline: none;
  transition: all 500ms;

  &:focus { outline: none; };

  &:hover {
    background-color: ${props => props.theme.color.btn1Dark};
    border-color: ${props => props.theme.color.btn1Dark};
  }
`;

const Text = styled.p`
  font-size: ${props => props.theme.fontSize.small};

  ${mediaQuery.lessThan("tablet")`
      font-size: ${props => props.theme.fontSize.xsmall};
  `}
`;


