// Imports
import React, { useRef } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

// Component
const Modal = ({ closed, show }) => {

	// Timings
	const animationTiming = {
		enter:400,
		exit:200
	};

	// Fixing findDOMNode bug
	const wrapperRef = useRef();

	// Return
	return(
		// Or <CSSTransition classNames="fade-slide" basic approach
		<CSSTransition in={ show } timeout={ animationTiming } 
			nodeRef={ wrapperRef }
			classNames={ {
				enter:'',
				enterActive:'open',
				exit:'',
				exitActive:'closed'
			} } mountOnEnter unmountOnExit>
			<Wrapper ref={ wrapperRef }>
				<h1>A Modal</h1>
				<button className="button" onClick={ closed }>Dismiss</button>
			</Wrapper>
		</CSSTransition>
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
		animation: openModal 0.4s ease-out forwards;
	}
	&.closed{
		animation: closeModal 0.2s ease-in forwards;
	}
	/* CSS Transition classes, classes will be added depending 
	on the state of the animation */
	&.fade-slide-enter{}
	&.fade-slide-enter-active{
		animation: openModal 0.4s ease-out forwards;
	}
	&.fade-slide-exit{}
	&.fade-slide-exit-active{
		animation: closeModal 0.2s ease-in forwards;
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