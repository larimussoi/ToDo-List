import "./todoform.estilos.css";
import { TextInput } from "../TextInput";

export function ToDoForm({ onSubmit, defaultValue }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
        defaultValue={defaultValue}
      />

      <button type="submit" className="btn-submit">
        Salvar item
      </button>
    </form>
  );
}
