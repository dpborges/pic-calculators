import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { mediaQuery } from '../../styles/GlobalStyles';

// ***********************************************************************************
// Label component 
// ***********************************************************************************
/**
 * This componenent can be used as a standalone label or a label that is associated to
 * an input element on a form. The Label component has an open tag and close tag with 
 * the content in between (as per html spec), hence a label prop is not required. The
 * label text is passed as a children prop instead.
 * 
 * Note: Inline styles do not support media queries. Instead, use the mediaStyles object 
 * to communicate mediaQuery specific changes. See the View component for an example. If
 * you plan to use mediaStyles (to customize component), be sure to add the default media
 * query property in the defaultProps.
 * 
 * Note, if using with a form, there are two ways to associate a Label with the input 
 * element on a form:
 *   1) Set the id value inside the <input> element to match the htmlFor prop value on 
 *      the Label component.  (  Input id =  Label htmlFor )
 *   2) The second method is to place the input element inside the Label tag as follows:
 *      <Label>
 *           <Input>
 *      </Label>
 */
export const Label = (props) => {
     
  // Apply any style overrides caller may have provided via props
  const containerStyle      = props.containerStyle ? props.containerStyle : {};
  const labelStyle          = props.labelStyle ? props.labelStyle : {};
  const mediaStyles         = props.mediaStyles ? props.mediaStyles : {};

  // Render component
  return (
    <View mediaStyles={mediaStyles} style={containerStyle}>
      <StyledLabel style={labelStyle}  {...props} >
        {props.children} 
      </StyledLabel >
    </View>
  )
}

// ***********************************************************************************
// PropTypes and deafault values
// ***********************************************************************************
Label.propTypes = {
  containerStyle:       PropTypes.object,   
  labelStyle:           PropTypes.object,
  label:                PropTypes.string,
  htmlFor:              PropTypes.string,
  mediaWidth:           PropTypes.number,
  mqProperties:         PropTypes.object
};

Label.defaultProps = {
  mediaStyles: { width: 10 }
};

// ***********************************************************************************
// Styled Container and Sub-components
// ***********************************************************************************
/**
 * Style for View element which corresponds to the containerStyle prop and sets width 
 * of the element.
 */
const View = styled.div`

   ${mediaQuery.lessThan("tablet")`
      width: ${props => props.mediaStyles.width}rem
  `}
`;

/**
 * Style for label; prop used to override default style is labelStyle
 */
const StyledLabel = styled.label`
  color:${props => props.theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  font-size: ${({ theme }) => theme.fontSize.small};
  height: 1.6rem;
  padding-right: 4px;
  ${props => props.theme.fontFamily.secondary};

  ${mediaQuery.lessThan("tablet")`
      font-size: ${({ theme }) => theme.fontSize.xsmall};
      padding-bottom: 2px;
  `}
`;
