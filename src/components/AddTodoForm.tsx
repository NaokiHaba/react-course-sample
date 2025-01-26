import { useState } from "react";
import { PlusIcon } from "lucide-react";

type Props = {
	addTodo: (title: string) => void;
};

export const AddTodoForm = ({ addTodo }: Props) => {
	const [inputTodo, setInputTodo] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(inputTodo);
		setInputTodo("");
	};

	return (
		<form className="flex" onSubmit={handleSubmit}>
			<input
				type="text"
				className="grow rounded-s bg-slate-200 p-2"
				value={inputTodo}
				onChange={(e) => setInputTodo(e.target.value)}
			/>
			<button
				className="rounded-e bg-blue-600 p-2 transition-colors hover:bg-blue-800 disabled:bg-gray-400"
				disabled={inputTodo === ""}
			>
				<PlusIcon className="text-white" />
			</button>
		</form>
	);
};
