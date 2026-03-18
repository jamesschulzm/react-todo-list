import { useEffect, useRef } from "react";
import "./dialog.style.css";

export function Dialog({ isOpen, onClose }) {
  // Não utilizar!!!
  // const dialog = document.querySelector("dialog");

  const dialogRef = useRef(null);

  useEffect(() => {
    console.log("Dialog isOpen:", isOpen);

    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);
  // isOpen = toda vez que esse valor mudar, o useEffect será executado
  // Toda vez que o valor muda, aquela função vai ser executada

  // "Show the dialog" button opens the dialog modally
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
    </>
  );
}
