import { useState, useEffect } from "react";
import { Todo } from "../types/todo";

export const useTodoList = () => {
	const [todos, setTodos] = useState<Todo[]>(() => {
		const savedTodos = localStorage.getItem("todos");
		return savedTodos ? JSON.parse(savedTodos) : [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (title: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: Date.now(), title, completed: false },
		]);
	};

	const completeTodo = (id: number) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
		});
	};

	const deleteTodo = (id: number) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	const deleteAllTodosByCompleted = () => {
		setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
	};

	return {
		todos,
		addTodo,
		completeTodo,
		deleteTodo,
		deleteAllTodosByCompleted,
	};
};
