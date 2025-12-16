import { useEffect, useRef } from "react";
import "./dialog.estilos.css";

export function Dialog({ isOpen, onClose }) {
  //var dialog = document.getElementById("updateDetails");

  const dialogRef = useRef(null);

  useEffect(() => {
    console.log("deveriamos mostrar a modal?", isOpen);
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>
          Close
        </button>
        <p>This modal </p>
      </dialog>
    </>
  );
}
