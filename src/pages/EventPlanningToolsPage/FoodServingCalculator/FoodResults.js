import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../../styles/GlobalStyles';
// import { Button } from 'react-native-elements'
// import { Label } from '../../../components/formElements/Label';
import { HorizRule } from '../../../components/decorators/HorizRule';
import { setColor } from '../../../styles/CommonStyles';
import calcFoodServings from './calcFoodServings';
import foodDataSet from './foodDataSet';
import ColumnHeading from './ColumnHeading';

const FoodResults = (props) => {

    // Calculate the quantify for each of the food groups  (eg. appetizers, otherSides, meals, desserts)
  let appetizerResults = calcFoodServings(foodDataSet, "appetizersB4Meal",  props.numGuests, props.numHours);
  let mealResults       = calcFoodServings(foodDataSet, "meal",  props.numGuests, props.numHours)
  let dessertResults    = calcFoodServings(foodDataSet, "dessert",  props.numGuests, props.numHours)

  // Render the results for the food group specified
  const renderResults = (forFoodGroup) => {
    // pass in array of items the numGuests and the numHours; it returns and array wity the results

    // console.log(`This is a row[0]: ${row[0]}`)
    let resultsJsx = forFoodGroup.map(row => {
      return (
        <ResultsContainer key={row[0]}>
            <TypeColumn>{row[0]}</TypeColumn>
            <QuantityColumn>{row[2]}</QuantityColumn>
            <UnitColumn>{row[1]}</UnitColumn>
        </ResultsContainer>
      )
    })
    return resultsJsx
  }

  return (
    <div>
      <SubSectionHeader>Appetizers</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
     {/* 
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
     */}
      <ColumnHeading c1text="Type of Food"/>
      {/* <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/> */}
      {renderResults(appetizerResults)}

{/*
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem" mt="2rem"/>
      <SubSectionHeader>Other Sides</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
      {renderResults(otherSidesResults)}
*/}
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem" mt="5rem"/>
      <SubSectionHeader>Meal</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
      {/*
      <Note>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat
      </Note>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
*/}

      <ColumnHeading /> 
      {renderResults(mealResults)}

      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem" mt="5rem"/>
      <SubSectionHeader>Dessert</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
  {/*
      <Note>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat
      </Note>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1rem"/>
  */}
      <ColumnHeading />
      {renderResults(dessertResults)}
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="2px" mt="3rem" mb="3rem"/>

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
  margin-top: 1rem;

  ${mediaQuery.lessThan("tablet")`
     margin: .75rem 0 0 0;
  `}
`;

const TypeColumn = styled.div`
  /* border: 1px solid green; */
  color: ${props => props.theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: 1px;
  width: 20rem;

  ${mediaQuery.lessThan("tablet")`
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    flex-direction: column;
    width: 20%;
  `}  
`;

const UnitColumn = styled.div`
  /* border: 1px solid red; */
  align-self: flex-start;
  color: ${props => props.theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: 1px;
  padding-left: 2px;
  /* text-align: left; */
  width: 12rem;
  /* margin-left: 4rem; */

  ${mediaQuery.lessThan("tablet")`
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    flex-direction: column;
    padding-bottom: 2rem;
    padding-left: 5px;
    margin-left: -1rem;
    width: 9rem;
  `}  
`;

const QuantityColumn = styled.div`
  /* border: 1px solid black; */
  align-self: flex-start;
  color: ${props => props.theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: 1px;
  /* padding-right:  11%; */
  margin-right: 12.5rem;
  padding-right: 8px;
  text-align: right;
  width: 10rem;
  

  ${mediaQuery.lessThan("tablet")`
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    margin-right: 5rem;
    width: 5rem;
  `}  
`;

// const Size = styled.span`
//   font-size: ${({ theme }) => theme.fontSize.small};

//   ${mediaQuery.lessThan("tablet")`
//     font-size: ${({ theme }) => theme.fontSize.xsmall};
//   `}  
// `;

// const Note = styled.div`
//   /* font-size: ${({ theme }) => theme.fontSize.xsmall}; */
//   font-size: 1.5rem;
//   line-height; 200%;
//   padding: .3rem 0 .9rem 0;;
//   width: 100%;
// `;