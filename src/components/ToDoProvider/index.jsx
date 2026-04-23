import { useEffect, useState } from "react";
import ToDoContext from "./ToDoContext";

const TODOS = "todos";

export function ToDoProvider({ children }) {
  const savedTodo = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodo ? JSON.parse(savedTodo) : []);

  // Toda vez que alguém alterar o array de TODOs...
  useEffect(() => {
    // Salvar no localStorage
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]); // Dependências

  const addTodo = (formData) => {
    const description = formData.get("description");
    // console.log(description);

    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      return [...prevState, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === todo.id) {
          return { ...t, completed: !t.completed };
        }

        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  return (
    <ToDoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
      }}
    >
      {children}
    </ToDoContext>
  );
}
