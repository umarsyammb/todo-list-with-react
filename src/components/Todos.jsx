import React from "react";
import Todo from "./Todo";

const Todos = () => {
	const todos = [
		{ text: "Belajar React" },
		{ text: "Belajar Props" },
		{ text: "Belajar Hooks" },
		{ text: "Belajar State" },
		{ text: "Belajar Layouting di React" },
	];
	return (
		<section className="todos">
			{todos.map((todo) => {
				return <Todo text={todo.text} />;
			})}
		</section>
	);
};

export default Todos;
