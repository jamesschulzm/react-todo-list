// Componente ToDoList: lista não ordenada para exibir itens de tarefas
import "./todo-list.style.css";

export function ToDoList({ children }) {
  // Renderiza os itens filhos dentro de uma <ul> estilizada
  return <ul className="todo-list">{children}</ul>;
}
