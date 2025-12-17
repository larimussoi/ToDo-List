import "./todoform.estilos.css";
import { TextInput } from "../TextInput";

export function ToDoForm(onSubmit) {
  return (
    <form action={onSubmit} className="todo-form">
      <TextInput placeholder="Digite o item que deseja adicionar" />
    </form>
  );
}
