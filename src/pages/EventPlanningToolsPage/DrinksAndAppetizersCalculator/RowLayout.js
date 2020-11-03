import React from 'react';
import styled, { css } from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles';

// Return column heading
function RowLayout({row}) {
  let [type, quantity, unitOfMeasure] = row;
  
  return (
    <RowContainer>
      <TypeColumn>
        <TypeContent>{type}</TypeContent>
      </TypeColumn>
      <QuantityColumn>
          <QuantityContent>{quantity}</QuantityContent>
      </QuantityColumn>
      <UnitColumn>
        <UnitContent>{unitOfMeasure}</UnitContent>
      </UnitColumn>
    </RowContainer>
  )
}

export default RowLayout;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  ${mediaQuery.lessThan("tablet")`
     margin-top: 1.5rem 0 0 0;
  `}
`;

const TypeColumn = styled.div`
   display: flex;
 
   color: ${({ theme }) => theme.color.black};
   font-size: ${({ theme }) => theme.fontSize.small};
   /* margin: 1rem 0; */
   ${props => props.mr && css`margin-right: ${props.mr};` };
   width: 20%;
   /* ${props => props.ta && css`justify-content: ${props.ta};` }; */
   
   ${mediaQuery.lessThan("tablet")`
     font-size: ${({ theme }) => theme.fontSize.xsmall};
     width: 23%;
  `}
`;

const TypeContent= styled.div`
  width: 100%:
`;

const QuantityColumn = styled.div`
   color: ${({ theme }) => theme.color.black};
   font-size: ${({ theme }) => theme.fontSize.small};
   /* margin: 1rem 0; */
   /* padding-right: 8rem; */
   margin-right: 10rem;
   text-align: right;
   width: 6%;
   
   ${mediaQuery.lessThan("tablet")`
     font-size: ${({ theme }) => theme.fontSize.xsmall};
     margin-right: 0rem;
     padding-right: 3px;
     width: 15%;
  `}

   @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-right: 11%;
   }
`;

const QuantityContent = styled.div`
  width: 100%:
`;

const UnitColumn = styled.div`
   color: ${({ theme }) => theme.color.black};
   font-size: ${({ theme }) => theme.fontSize.small};
   /* font-weight: ${({ theme }) => theme.fontWeight.bold}; */
   /* margin: 1rem 0; */
   width: 14%;

   ${mediaQuery.lessThan("tablet")`
     font-size: ${({ theme }) => theme.fontSize.xsmall};
     width: 20%;
  `}
`;

const UnitContent = styled.div`
  /* padding-left: 9rem; */
  width: 100%;

  ${mediaQuery.lessThan("tablet")`
     padding-left: 0;
  `}
}`;

