// Imports
import React from "react";
import styled from "styled-components";

// Component
const Backdrop = ({ show }) => {

	// Return
	return <Wrapper className={ show ? 'open' : 'closed' }/>

};

// Styled
const Wrapper = styled.div`
	position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
	transition: 0.35s opacity ease-out;
	pointer-events: none;
	&.open{
		opacity: 1;
	}
	&.closed{
		opacity: 0;
	}
`;

// Export
export default Backdrop;