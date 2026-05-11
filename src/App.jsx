// Componente principal da aplicação: App
// Gerencia o fluxo principal da interface e integra o contexto de tarefas
import { use } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { EmptyState } from "./components/EmptyState";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoGroup } from "./components/ToDoGroup";
import ToDoContext from "./components/ToDoProvider/ToDoContext";

function App() {
  // Obtém dados e funções do contexto de tarefas
  const {
    todos,
    addTodo,
    showDialog,
    openFormTodoDialog,
    closeFormTodoDialog,
    selectedTodo,
    editTodo,
  } = use(ToDoContext);

  // Lida com o envio do formulário de tarefas (adiciona ou edita)
  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData);
    } else {
      addTodo(formData);
    }
    closeFormTodoDialog();
  };

  return (
    // Estrutura principal da aplicação
    <main>
      <Container>
        {/* Cabeçalho com título */}
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>

        <ChecklistsWrapper>
          {/* Grupo de tarefas pendentes */}
          <ToDoGroup
            heading="Para estudar"
            items={todos.filter((t) => !t.completed)}
          />

          {/* Estado vazio quando não há tarefas */}
          {todos.length == 0 && <EmptyState />}

          {/* Grupo de tarefas concluídas */}
          <ToDoGroup
            heading="Concluído"
            items={todos.filter((t) => t.completed)}
          />

          {/* Rodapé com dialog de formulário e botão flutuante */}
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <ToDoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedTodo?.description}
              />
            </Dialog>

            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
