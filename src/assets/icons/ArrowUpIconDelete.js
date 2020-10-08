
import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from "react-icons/io";
// import { CSSTransition } from 'react-transition-group';
import './updownarrow.css';

// const ArrowUp = ({className}) => <IoIosArrowUp className={className} />

// const  ArrowUpIcon  = styled(ArrowUp)`
//     color: black;
//     font-size: 3.2rem;
//     font-weight: 900;
// `;

// export default ArrowUpIcon;


const ArrowUpIcon = (props) => {
    return  (
        <IoIosArrowUp className="arrow-up" />
    )
}

export default ArrowUpIcon;


/* 

<CSSTransition in={true} timeout={1000} classNames={"arrow-up"} >
        <IoIosArrowUp className="arrow-up" />
      </CSSTransition>
*/



