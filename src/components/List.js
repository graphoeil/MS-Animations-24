// Imports
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Component
const List = () => {

	// Items
	const [items, setItems] = useState([1, 2, 3]);

	// Add new list item
	const addItem = () => {
		setItems((oldState) => {
			return [ ...oldState, oldState.length + 1 ];
		});
	};

	// Remove item from list
	const removeItem = (id) => {
		setItems((oldState) => {
			return oldState.filter((item) => {
				return item !== id;
			});
		});
	};

	// Fixing findDOMNode bug
	const listItemRef = useRef();

	// Return
	return(
		<Wrapper>
			<button className="button" onClick={ addItem }>Add Item</button>
			<p>Click Item to Remove</p>
			<TransitionGroup component="ul">
				{
					items.map((item, index) => {
						return(
							<CSSTransition nodeRef={ listItemRef } key={ index } classNames="fade" timeout={ 350 }>
								<li ref={ listItemRef } onClick={ () => { removeItem(item) } }>
									{ item }
								</li>
							</CSSTransition>
						);
					})
				}
			</TransitionGroup>
		</Wrapper>
	);
};

// Styled
const Wrapper = styled.div`
	ul{
		list-style: none;
		margin: 0 auto;
		padding: 0;
		width: 280px;
		position: relative;
		li{
			margin: 0;
			padding: 10px;
			box-sizing: border-box;
			width: 100%;
			border: 1px solid #521751;
			background-color: white;
			text-align: center;
			cursor: pointer;
			&:hover, &:active{
				background-color: #ccc;
			}
			&.fade-enter{
				opacity: 0;
				transform: translateX(-200px);
			}
			&.fade-enter-active{
				opacity: 1;
				transform: translateX(0);
				transition: all 0.35s ease-out;
			}
			&.fade-exit{
				opacity: 1;
				transform: translateX(0);
			}
			&.fade-enter-active{
				opacity: 0;
				transform: translateX(200px);
				transition: all 0.35s ease-out;
			}
		}
	}
`;

// Export
export default List;