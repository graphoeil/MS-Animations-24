// Imports
import React, { useState } from "react";
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

	// Return
	return(
		<div className="app">
			<h1>React Animations</h1>
			{
				showModal && <Modal show={ showModal } closed={ closeModal } />
			}
			{
				showModal && <Backdrop show={ showModal } />
			}
			<button className="button" onClick={ openModal }>
				Open Modal
			</button>
			<h3>Animating Lists</h3>
			<List />
		</div>
	);

};

// Export
export default App;