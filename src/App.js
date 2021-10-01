import "./App.css";

function App() {
	return (
		<div class="container">
			<div class="frame">
				<section class="header">
					<button class="header-btn">Add</button>
					<h1 class="header-title">Todo Lists</h1>
					<button class="header-btn clear-red-btn">Clear</button>
				</section>
				<section class="add">
					<form class="add-form">
						<input type="text" class="add-input" />
						<button class="add-btn">Add</button>
					</form>
				</section>
				<section class="todos">
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
					<div class="todo">
						<span class="todo-text">Learning React</span>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
