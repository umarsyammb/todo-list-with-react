import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!value) {
			alert("Your form is blank!");
			return;
		}

		addTodo(value);
		alert(value);
		setValue("");
	};

	return (
		<section className="add">
			<form className="add-form" onSubmit={handleFormSubmit}>
				<input
					type="text"
					className="add-input"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button className="add-btn">Add</button>
			</form>
		</section>
	);
};

TodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
