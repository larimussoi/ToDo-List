import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

export function TodoProvider({ children }) {
  const savedTodo = localStorage.getItem("todos");

  const [todos, setTodos] = useState(savedTodo ? JSON.parse(savedTodo) : []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (formData) => {
    const description = formData.get("description");

    setTodos((prev) => {
      const todo = {
        id: prev.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prev, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (todo) => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, addToDo, toggleTodoCompleted, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { default as TodoContext } from "./TodoContext";
