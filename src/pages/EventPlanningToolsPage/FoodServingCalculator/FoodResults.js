import React, { useState } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles';
// import { Button } from 'react-native-elements'
// import { Label } from '../../../components/formElements/Label';
import { HorizRule } from '../../../components/decorators/HorizRule';
import { setColor } from '../../../styles/CommonStyles';
import calcFoodServings from './calcFoodServings';
import foodDataSet from './foodDataSet';
import FoodResultsColumnHeading from './FoodResultsColumnHeading';

const FoodResults = (props) => {

    // Calculate the quantify for each of the food groups  (eg. appetizers, otherSides, meals, desserts)
  let appetizerResults = calcFoodServings(foodDataSet, "appetizers",  props.numGuests, props.numHours);
  let otherSidesResults = calcFoodServings(foodDataSet, "otherSides",  props.numGuests, props.numHours)
  let mealResults       = calcFoodServings(foodDataSet, "meal",  props.numGuests, props.numHours)
  let dessertResults    = calcFoodServings(foodDataSet, "dessert",  props.numGuests, props.numHours)

  // Render the results for the food group specified
  const renderResults = (forFoodGroup) => {
    let resultsJsx = [];
    
    // pass in array of items the numGuests and the numHours; it returns and array wity the results

    let size = ''
    // console.log(`This is a row[0]: ${row[0]}`)
    forFoodGroup.map(row => {
      // size = row[2] ? `${row[2]}`  : '';
      resultsJsx.push(
        <ResultsContainer>
            <TypeColumn>{row[0]}</TypeColumn>
            <UnitColumn>{row[1]}<Size>&nbsp;{size}</Size></UnitColumn>
            <QuantityColumn>{row[2]}</QuantityColumn>
        </ResultsContainer>
      )
    })
    return resultsJsx
  }

  return (
    <div>
      <SubSectionHeader>Appetizers</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
      <Note>
        There are two appetizer estimates below; one estimate for an appetizer only event, and 
        a second estimate when serving appetizers before a meal. Consider serving 3-8 different appetizers
        depending on number of guests. Start with 3 for 15-20 guests and add one appetizer for   
        every 20-25 additional guests. 
      </Note>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>

      <FoodResultsColumnHeading />
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
      {renderResults(appetizerResults)}

      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem" mt="2rem"/>
      <SubSectionHeader>Other Sides</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
      {renderResults(otherSidesResults)}

      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem" mt="5rem"/>
      <SubSectionHeader>Meal</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
      <Note>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat
      </Note>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
      <FoodResultsColumnHeading />
      {renderResults(mealResults)}

      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem" mt="5rem"/>
      <SubSectionHeader>Dessert</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
      <Note>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat
      </Note>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
      <FoodResultsColumnHeading />
      {renderResults(dessertResults)}
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="5px" mt="3rem" mb="3rem"/>

    </div>
  );
}

export default FoodResults;

// ***********************************************************************************
// Styled Components
// ***********************************************************************************

const SubSectionHeader = styled.h3`
  color: ${setColor.black};
  vertical-align: center;
  font-size: 2.1rem;

  ${mediaQuery.lessThan("tablet")`
     font-size: 1.8rem;
  `}
`;


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
  margin-left: 4rem;

  ${mediaQuery.lessThan("tablet")`
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    flex-direction: column;
    padding-bottom: 2rem;
    margin-left: -1rem;
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
  /* font-size: ${({ theme }) => theme.fontSize.xsmall}; */
  font-size: 1.5rem;
  line-height; 200%;
  padding: .3rem 0 .9rem 0;;
  width: 100%;
`;