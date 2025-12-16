import { useEffect, useRef } from "react";
import "./dialog.estilos.css";

export function Dialog({ isOpen, onClose, children, submitBtn }) {
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
      <dialog ref={dialogRef} className="dialog">
        <div className="close-btn">
          <button autoFocus onClick={onClose} className="btn-close">
            X
          </button>
        </div>
        <div className="body">{children}</div>
        <div className="submit-btn">
          <button autoFocus onClick={submitBtn} className="btn-submit">
            Salvar item
          </button>
        </div>
      </dialog>
    </>
  );
}
