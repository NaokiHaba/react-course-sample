type Props = {
	deleteAllTodosByCompleted: () => void;
};

export const TodoSummary = ({ deleteAllTodosByCompleted }: Props) => {
	return (
		<div className="flex justify-end">
			<button
				className="rounded bg-red-500 p-2 text-white"
				onClick={deleteAllTodosByCompleted}
			>
				完了したTodoを削除
			</button>
		</div>
	);
};
