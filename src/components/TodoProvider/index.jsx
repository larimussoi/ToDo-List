import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

export function TodoProvider({ children }) {
  const savedTodo = localStorage.getItem("todos");

  const [todos, setTodos] = useState(savedTodo ? JSON.parse(savedTodo) : []);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  const openDialogForEdit = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeDialogForEdit = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

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
      prev.map((t) => {
        if (t.id === todo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  };

  const editTodo = (formData) => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === selectedTodo.id) {
          return { ...t, description: formData.get("description") };
        }
        return t;
      })
    );
  };

  const deleteTodo = (todo) => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addToDo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        closeDialogForEdit,
        openDialogForEdit,
        setSelectedTodo,
        selectedTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { default as TodoContext } from "./TodoContext";
