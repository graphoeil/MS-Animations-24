// Imports
import React, { useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

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

	// Return
	return(
		<Wrapper>
			<button className="button" onClick={ addItem }>Add Item</button>
			<p>Click Item to Remove</p>
			<ul className="list">
				{
					items.map((item, index) => {
						return <ListItem key={ index } item={ item } removeItem={ removeItem }/>
					})
				}
			</ul>
		</Wrapper>
	)
};

// Styled
const Wrapper = styled.div`
	.list{
		list-style: none;
		margin: 0 auto;
		padding: 0;
		width: 280px;
	}
`;

// Export
export default List;