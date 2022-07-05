// Imports
import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import List from "./components/List";

// Component
const App = () => {

	// Show / hide modal
	const [showModal, setShowModal] = useState(false);
	const closeModal = () => {
		setShowModal(false);
	};
	const openModal = () => {
		setShowModal(true);
	};

	// Block
	const [showBlock, setShowBlock] = useState(false);

	// Fixing findDOMNode bug
	const blockRef = useRef();

	// Return
	return(
		<div className="app">
			<h1>React Animations</h1>

			{/* React-Transition-Group */}
			<button className="button" onClick={ () => { setShowBlock((oldState) => {
				return !oldState;
			}) } }>
				Toggle
			</button><br/><br/>
			{/* If showBlock then render the div */}
			<Transition in={ showBlock } timeout={ 1000 } nodeRef={ blockRef }
				onEnter={ () => { console.log('onEnter'); } } 
				onEntering={ () => { console.log('onEntering'); } } 
				onEntered={ () => { console.log('onEntered'); } } 
				onExit={ () => { console.log('onExit'); } }  
				onExiting={ () => { console.log('onExiting'); } }  
				onExited={ () => { console.log('onExited'); } } 
				mountOnEnter unmountOnExit>
				{
					// Show the state of the animation
					state => (
						<div ref={ blockRef } style={ {
							backgroundColor:'firebrick',
							width:100,
							height:100,
							margin:'20px auto',
							transition: 'opacity 1s ease-out',
							// 4 main state => entering, entered, exiting, exited
							opacity:state === 'exiting' ? 0 : 1
						} }/>
					)
				}
			</Transition>
			{/* React-Transition-Group */}

			{/* Modal, Transition inside the component */}
			<Modal show={ showModal } closed={ closeModal } />
			{/* Modal */}

			{/* CSS Transitions & Animations */}
			{
				showModal && <Backdrop show={ showModal } />
			}
			<button className="button" onClick={ openModal }>
				Open Modal
			</button>
			{/* CSS Transitions & Animations */}

			<h3>Animating Lists</h3>
			<List />
		</div>
	);

};

// Export
export default App;