import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoSummary } from "./components/TodoSummary";
import { useTodoList } from "./hooks/useTodoList";

function App() {
	const {
		todos,
		addTodo,
		completeTodo,
		deleteTodo,
		deleteAllTodosByCompleted,
	} = useTodoList();

	return (
		<main className="mx-auto mt-10 max-w-xl">
			<h1 className="text-center text-4xl">Todoアプリ</h1>
			<div className="space-y-5">
				<AddTodoForm addTodo={addTodo} />
				<div className="space-y-5 rounded bg-slate-200 p-5">
					<TodoList
						todos={todos}
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
					/>
					<TodoSummary deleteAllTodosByCompleted={deleteAllTodosByCompleted} />
				</div>
			</div>
		</main>
	);
}

export default App;
