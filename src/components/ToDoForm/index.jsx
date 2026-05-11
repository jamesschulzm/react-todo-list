// Componente ToDoForm: formulário para adicionar um novo item à lista de tarefas
import "./todo-form.style.css";

import { Button } from "../Button";
import { TextInput } from "../TextInput";

export function ToDoForm({ onSubmit }) {
  return (
    // Formulário que chama onSubmit ao ser enviado
    <form action={onSubmit} className="todo-form">
      {/* Campo de texto para a descrição do item */}
      <TextInput
        name="description"
        placeholder="Digite o item que deseja adicionar"
        required
      />
      {/* Botão para salvar o novo item */}
      <Button>Salvar item</Button>
    </form>
  );
}
