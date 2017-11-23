import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
	const { id, description, amount, createdAt } = props.expense;
	return (
		<div>
			<Link to={`/edit/${id}`}>
				<h3>{description}</h3>
			</Link>
			<p>This bill was for {amount} cents and was created on {createdAt}</p>
		</div>
	);
};

export default ExpenseListItem;