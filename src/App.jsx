import { use } from "react";
import { TodoContext } from "./components/TodoProvider";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { ToDoForm } from "./components/ToDoForm";
import { TodoGroup } from "./components/TodoGroup";
import { EmptyState } from "./components/EmptyState";

function App() {
  const {
    todos,
    addToDo,
    showDialog,
    openDialogForEdit,
    closeDialogForEdit,
    selectedTodo,
    editTodo,
  } = use(TodoContext);

  const handleFormSubmit = (formData) => {
    if (selectedTodo) {
      editTodo(formData);
    } else {
      addToDo(formData);
    }
    closeDialogForEdit();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Lista de Tarefas
          </Heading>
        </Header>
        <Dialog />
        <ChecklistsWrapper>
          <TodoGroup
            heading="Para fazer"
            itens={todos.filter((t) => !t.completed)}
          />
          {todos.length == 0 && <EmptyState />}
          <TodoGroup
            heading="Concluído"
            itens={todos.filter((t) => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={closeDialogForEdit}>
              <ToDoForm
                onSubmit={handleFormSubmit}
                defaultValue={selectedTodo?.description}
              />
            </Dialog>
            <FabButton onClick={() => openDialogForEdit()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
