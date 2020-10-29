import React from 'react';
import styled, { css } from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles';

// Return column heading
function ColumnHeading() {

  return (
    <ColumnHeadingsContainer>
      <Heading>Type of Drink</Heading>
      <Heading ta="center">Quantity</Heading>
      <Heading ta="right" pr="4rem">Unit of Measure </Heading>
    </ColumnHeadingsContainer>
  )
}

export default ColumnHeading


// Styled Components
const ColumnHeadingsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaQuery.lessThan("tablet")`
     margin: 0;
  `}
`;

const Heading = styled.div`
   color: ${({ theme }) => theme.color.primary};
   font-size: ${({ theme }) => theme.fontSize.small};
   font-weight: ${({ theme }) => theme.fontWeight.bold};
   margin: 1rem 0;
   width: 20%;
   ${props => props.ta && css`text-align: ${props.ta};` };
   ${props => props.pr && css`padding-right: ${props.pr};` };
   
   ${mediaQuery.lessThan("tablet")`
     font-size: ${({ theme }) => theme.fontSize.xsmall};
     ${props => props.ta && css`text-align: ${props.ta};` };
  `}
`;
