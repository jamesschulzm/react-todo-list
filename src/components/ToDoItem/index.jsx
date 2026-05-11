// Componente ToDoItem: representa um item individual da lista de tarefas
import { use } from "react";
import { IconPencil, IconTrash } from "../icons";
import ToDoContext from "../ToDoProvider/ToDoContext";
import "./todo-item.style.css";

export function ToDoItem({ item }) {
  // Obtém funções do contexto para manipular o item
  const { toggleTodoCompleted, deleteTodo, openFormTodoDialog } =
    use(ToDoContext);

  // Define as classes CSS do item
  const styles = ["todo-item"];
  if (item.completed) {
    styles.push("completed");
  }

  return (
    // Item da lista com data, descrição, checkbox e botões de ação
    <li className={styles.join(" ")}>
      {/* Data de criação do item */}
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        {/* Checkbox para marcar como concluído */}
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onClick={() => toggleTodoCompleted(item)}
        />

        {/* Descrição da tarefa */}
        <p className="description">{item.description}</p>

        {/* Botões de ação: excluir e editar */}
        <div className="actions">
          <button className="btn" onClick={() => deleteTodo(item)}>
            <IconTrash />
          </button>
          <button className="btn" onClick={() => openFormTodoDialog(item)}>
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
