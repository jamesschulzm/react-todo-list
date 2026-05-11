// Componente ToDoProvider: provê contexto e gerencia o estado global dos TODOs
import { useEffect, useState } from "react";
import ToDoContext from "./ToDoContext";

const TODOS = "todos"; // Chave usada no localStorage

export function ToDoProvider({ children }) {
  // Recupera os TODOs salvos no localStorage (se houver)
  const savedTodos = localStorage.getItem(TODOS);

  // Estado dos TODOs
  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);
  // Estado para controlar a exibição do dialog de formulário
  const [showDialog, setShowDialog] = useState(false);
  // Estado para armazenar o TODO selecionado para edição
  const [selectedTodo, setSelectedTodo] = useState();

  // Abre o dialog de formulário, opcionalmente com um TODO selecionado
  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  // Fecha o dialog de formulário e limpa o TODO selecionado
  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  // Salva os TODOs no localStorage sempre que o array for alterado
  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  // Adiciona um novo TODO a partir dos dados do formulário
  const addTodo = (formData) => {
    const description = formData.get("description");
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

  // Alterna o status de concluído de um TODO
  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  // Edita a descrição de um TODO selecionado
  const editTodo = (formData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == selectedTodo.id) {
          return {
            ...t,
            description: formData.get("description"),
          };
        }
        return t;
      });
    });
  };

  // Remove um TODO da lista
  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  // Prove o contexto para os componentes filhos
  return (
    <ToDoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
        editTodo,
      }}
    >
      {children}
    </ToDoContext>
  );
}
