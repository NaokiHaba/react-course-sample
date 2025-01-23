import { dummyTodoList } from "./data/dummyTodoList";
import { TodoList } from "./components/TodoList";
import { Todo } from "./types/todo";
import { useState } from "react";

function App() {
	const [todos, setTodos] = useState<Todo[]>(dummyTodoList);

	const changeCompleted = (id: number) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
		});
	};

	return (
		<main className="mx-auto mt-10 max-w-xl">
			<h1 className="text-center text-4xl">Todoアプリ</h1>
			<div className="rounded bg-slate-200 p-5">
				<TodoList todos={todos} changeCompleted={changeCompleted} />
			</div>
		</main>
	);
}

export default App;
