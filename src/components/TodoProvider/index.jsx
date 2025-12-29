import { useState } from "react";
import TodoContext from "./TodoContext";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Controle de inputs e formulários controlados",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);

  const addToDo = (formData) => {
    const description = formData.get("description");

    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
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
