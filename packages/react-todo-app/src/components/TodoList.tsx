import { Todo } from "../types/todo";
import { TrashIcon } from "lucide-react";
type Props = {
	todos: Todo[];
	completeTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
};

export const TodoList = ({ todos, completeTodo, deleteTodo }: Props) => {
	return (
		<div className="space-y-3">
			{todos.map((todo) => (
				<div
					key={todo.id}
					className="flex items-center gap-3 rounded bg-white p-2"
				>
					<label className="flex grow items-center gap-3 hover:cursor-pointer">
						<div className="flex items-center justify-center rounded-full border border-slate-300">
							<input
								type="checkbox"
								className="size-5"
								checked={todo.completed}
								onChange={() => completeTodo(todo.id)}
							/>
						</div>
						<span
							className={`${todo.completed ? "text-gray-400 line-through" : ""}`}
						>
							{todo.title}
						</span>
					</label>
					<button onClick={() => deleteTodo(todo.id)}>
						<TrashIcon className="text-red-500" />
					</button>
				</div>
			))}

			{todos.length === 0 && (
				<p className="text-center text-gray-400">Todoがありません</p>
			)}
		</div>
	);
};
