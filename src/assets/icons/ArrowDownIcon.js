
import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";
import { theme } from '../../styles/theme';


const ArrowDown = ({className}) => <IoIosArrowDown className={className} />

export const  ArrowDownIcon  = styled(ArrowDown)`
    color: ${props => props.theme.color.primary };
    font-size: 3.2rem;
    font-weight: 900;
    margin: 0;
    padding:0;
`;