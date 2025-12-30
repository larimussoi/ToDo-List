import { useEffect, useRef } from "react";
import "./dialog.estilos.css";

export function Dialog({ isOpen, onClose, children }) {
  //var dialog = document.getElementById("updateDetails");

  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.addEventListener("close", onClose);
    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <button onClick={onClose} className="btn-close">
          X
        </button>
        <div className="body">{children}</div>
      </dialog>
    </>
  );
}
