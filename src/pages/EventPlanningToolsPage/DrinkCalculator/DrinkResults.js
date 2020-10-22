import React, { useState } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles';
// import { Button } from 'react-native-elements'
import { Label } from '../../../components/formElements/Label';
import { HorizRule } from '../../../components/decorators/HorizRule';
import { setColor } from '../../../styles/CommonStyles';
import calcDrinks from './calcDrinks';
import {hasAtLeastOneNonEmptyValue}  from '../../../utils/validators/hasAtLeastOneNonEmptyValue'
import drinkDataSet from './drinkDataSet';

const DrinkResults = (props) => {

  const renderResults = () => {
    let resultsJsx = [];
    
    // pass in array of items the numGuests and the numHours; it returns and array wity the results
    let drinkResults = calcDrinks(drinkDataSet, props.numGuests, props.numHours)

    let size = ''
    // console.log(`This is a row[0]: ${row[0]}`)
    drinkResults.map(row => {
      size = row[2] ? `(${row[2]})`  : '';
      resultsJsx.push(
        <ResultsContainer>
            <TypeColumn>{row[0]}</TypeColumn>
            <UnitColumn>{row[1]}<Size>&nbsp;{size}</Size></UnitColumn>
            <QuantityColumn>{row[3]}</QuantityColumn>
       </ResultsContainer>
      )
    })
    return resultsJsx
  }

  return (
    <div>
        {renderResults(drinkDataSet)}
        <Note>(Note: Champagne uses a 1 hour estimate for toasting purposes)</Note>

    </div>
  );
}

export default DrinkResults;

// ***********************************************************************************
// Styled Components
// ***********************************************************************************


const ResultsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  ${mediaQuery.lessThan("tablet")`
     margin: 1.5rem 0 0 0;
  `}
`;

const TypeColumn = styled.div`
  color: ${props => props.theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: 1px;
  width: 25%;

  ${mediaQuery.lessThan("tablet")`
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    flex-direction: column;
    width: 30%;
  `}  
`;

const UnitColumn = styled.div`
  align-self: flex-start;
  color: ${props => props.theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: 1px;
  /* text-align: left; */
  width: 27%;
  margin-left: -5rem;

  ${mediaQuery.lessThan("tablet")`
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    flex-direction: column;
    padding-bottom: 2rem;
    width: 30%;
  `}  
`;

const Size = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};

  ${mediaQuery.lessThan("tablet")`
    font-size: ${({ theme }) => theme.fontSize.xsmall};
  `}  
`;

const QuantityColumn = styled.div`
  align-self: flex-start;
  color: ${props => props.theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: 1px;
  padding-right: 5px;
  text-align: right;
  width: 10%;
  

  ${mediaQuery.lessThan("tablet")`
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    // flex-direction: column;
    width: 15%;
  `}  
`;

const Note = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  padding-top: .5rem;
  width: 50%;

  ${mediaQuery.lessThan("tablet")`
     width: 95%;
  `}  

`;