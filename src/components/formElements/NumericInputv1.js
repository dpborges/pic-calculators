import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { setColor } from '../../styles/CommonStyles';

function NumericInputUnstyled({className, ...props}) {
  
  return (
    
    <input type="number" className={className} {...props} />
  )
}


const NumericInput = styled.input.attrs( props => ({
    type:   "number",
    color:  props.color || setColor.black
  
}))`
    color: ${props => props.color}; */
    height: 28rem;
    width: 12rem;
    font-size: 3.75rem;
    font-weight: 700;
    margin: 0;
    padding-right: 0px;
    text-align: center;
    outline: none;

    ::placeholder {
      color: ${setColor.lightgrey};
      font-size: 1.5rem;
      padding: auto 2px;
      padding-bottom: 1rem;
    }
`;

export default NumericInput;