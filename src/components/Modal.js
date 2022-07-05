// Imports
import React from "react";
import styled from "styled-components";

// Component
const Modal = ({ closed, show }) => {

	// Return
	return(
		<Wrapper className={ show ? 'open' : 'closed' }>
			<h1>A Modal</h1>
        	<button className="button" onClick={ closed }>Dismiss</button>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	position: fixed;
    z-index: 200;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    top: 30%;
    left: 25%;
    width: 50%;
	&.open{
		/* forwards stop loop animation */
		animation: openModal 0.35s ease-out forwards;
	}
	&.closed{
		animation: closeModal 0.25s ease-in forwards;
	}
	@keyframes openModal{
		0%{ opacity: 0; transform: translateY(-100%); }
		50%{ opacity: 1; transform: translateY(50%); }
		100%{ transform: translateY(0); }
	}
	@keyframes closeModal{
		0%{ opacity: 1; transform: scale(1); }
		100%{ opacity:0; transform: scale(0); }
	}
`;

// Export
export default Modal;