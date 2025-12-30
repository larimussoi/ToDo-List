import "./empty-state.estilos.css";

export function EmptyState() {
  return (
    <section className="empty-state">
      <>
        <p>Nenhuma tarefa por aqui! Adicione algo novo!</p>
        <img src="/empty.png" alt="Empty State" />
      </>
    </section>
  );
}
