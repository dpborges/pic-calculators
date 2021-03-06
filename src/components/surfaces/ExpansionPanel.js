import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaQuery } from '../../styles/GlobalStyles';
import { ArrowDownIcon } from '../../assets/icons/ArrowDownIcon'
import RotateXOnTrigger from '../../animations/RotateXOnTrigger';
// import CollapsibleSectionv1 from '../../animations/CollapsibleSectionv1';
import ExpandableSection from '../../animations/ExpandableSection';

/**
 * The expansion panel component provides the expansion bar and the open/close icon (up/down arrow). 
 * The parent component is responsible for managing the panel open/close state and is 
 * responsible for providing whatever expandible content they would like to display via the  
 * children prop. There are 3 props: 
 *    text   - label shown on the expansion bar 
 *    closed - a boolean indicating whether expansion panel is closed or not. default state is closed === true
 *    onClickHandler - callback to onClickHandler implemented on parent; Used to toggle expansion mode from closed to 
 *             not closed (open)
 */ 
export const ExpansionPanel = (props) => {
    let {closed}  = props;

    // Set a the default desktop size for those times prop is undefined during initial renders.
    let labelMediaStyle = props.labelMediaStyle ? props.labelMediaStyle : { marginTop: "4px"};
    let labelStyle      = props.labelStyle      ? props.labelStyle      : { fontWeight: 400 };

    // Return  JSX
    return (
        <div>
          <PanelContainer mt={props.mt}>
              <ExpansionBar onClick={props.onClickHandler}>
                <ExpansionBarLabel labelMediaStyle={labelMediaStyle} labelStyle={labelStyle} >
                    {props.text}
                </ExpansionBarLabel>
                <RotateXOnTrigger trigger={closed}>
                    <ArrowDownIcon />
                </RotateXOnTrigger>
              </ExpansionBar>
          </PanelContainer>
          <ExpandableSection trigger={closed} expandedHeight={props.expandedHeight}>
            {props.children}
          </ExpandableSection>
        </div>
    )
}

// Prop Types
ExpansionPanel.propTypes = {
    onClickHandler: PropTypes.func,    /* the handler to call when user clicks on arrow icon */
    text:           PropTypes.string,  /* Text label  to display on the expansion bar */
    closed:         PropTypes.bool,    /* indicating if panel closed or not */
    labelMediaStyle: PropTypes.object  /* Provides a media style for mobile devices if different than desktop */
};


// Style Components
const PanelContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.mt || "1rem"};
`;

const ExpansionBar = styled.div `
  display: flex;
  justify-content: space-between;
  background-color: #dcdde1;
  border-radius: 5px 5px 0 0;
  height:  5rem;
  padding: .6rem;
  width: 100%;
  z-index: 10;

  @media only screen and (min-width: 320px) and (max-width: 450px) {
      width: 100%;
  }
`;

const ExpansionBarLabel = styled.p `
  color: black;
  font-size: 2.2rem;
  margin-top: 3px;
  font-weight: ${props => props.labelStyle.fontWeight};

  ${mediaQuery.lessThan("tablet")`
      font-size: 2rem;
      margin-top: ${props => props.labelMediaStyle.marginTop};
  `}
`;


/*
// margin-top: ${props => props.labelMediaStyle.marginTop};
*/