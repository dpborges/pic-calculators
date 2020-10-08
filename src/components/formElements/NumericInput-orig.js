import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { setColor } from '../../styles/CommonStyles';

function NumericInputUnstyled({className, ...props}) {
  
  return (
    <input type="number" className={className} {...props} />
  )
}

export const  NumericInput  = styled(NumericInputUnstyled)`
    color: ${theme.colors.primary};
    height: 3rem;
    width: 7rem;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: right;

    ::placeholder {
      color: ${setColor.lightgrey};
      font-size: 1.5rem;
    }
`;

export default NumericInput;

