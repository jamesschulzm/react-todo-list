// Componente ToDoGroup: agrupa e exibe uma lista de tarefas com um subtítulo
import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

export function ToDoGroup({ items, heading }) {
  return (
    <>
      {/* Subtítulo do grupo de tarefas */}
      <SubHeading>{heading}</SubHeading>
      {/* Lista de tarefas */}
      <ToDoList>
        {items.map(function (t) {
          // Renderiza cada tarefa como um ToDoItem
          return <ToDoItem key={t.id} item={t} />;
        })}
      </ToDoList>
    </>
  );
}
