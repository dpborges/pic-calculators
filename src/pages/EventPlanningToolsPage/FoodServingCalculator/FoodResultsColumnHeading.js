import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles';
import { Label } from '../../../components/formElements/Label';
import { setColor } from '../../../styles/CommonStyles';



// Return column heading
function FoodResultsColumnHeading() {

  // Configure label component by setting property on media query for labels used in the  Results component
  const labelMediaStyles = { width: 7 };
  const labelStyle = {color: `${setColor.blue}`}
  const labelContainer = {padding: '1.75rem 0'}

  return (
    <ColumnHeadings>
        <ResultLayout>
          <Label mediaStyles={labelMediaStyles} labelStyle={labelStyle} containerStyle={labelContainer}> 
            Type of Food
          </Label>
        </ResultLayout>
        <ResultLayout>
          <Label mediaStyles={labelMediaStyles} labelStyle={labelStyle} containerStyle={labelContainer}>
            Unit of Measure
          </Label>
        </ResultLayout>
        <ResultLayout>
          <Label mediaStyles={labelMediaStyles} labelStyle={labelStyle} containerStyle={labelContainer}>
            Quantity
          </Label>
        </ResultLayout>
    </ColumnHeadings>
  )
}

export default FoodResultsColumnHeading

const ColumnHeadings = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: 1.2rem; */

  ${mediaQuery.lessThan("tablet")`
     margin: 0;
  `}
`;

const ResultLayout = styled.div`
  display: flex;
  flex-direction: column;

  /* ${mediaQuery.lessThan("tablet")`
    flex-direction: column;
  `} */
`;


