// Imports
import React from "react";
import styled from "styled-components";

// Component
const ListItem = ({ item, removeItem }) => {

	// Return
	return(
		<Wrapper onClick={ () => { removeItem(item); } }>
			{ item }
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.li`
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
`;

// Export
export default ListItem;