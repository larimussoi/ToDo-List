import { useRef } from "react";
import "./dialog.estilos.css";

export function Dialog() {
  //var dialog = document.getElementById("updateDetails");

  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={closeDialog}>
          Close
        </button>
        <p>This modal </p>
      </dialog>
      <button onClick={openDialog}>Show the dialog</button>
    </>
  );
}
