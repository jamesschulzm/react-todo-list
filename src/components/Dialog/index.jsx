import { useEffect, useRef } from "react";
import { IconClose } from "../icons";
import "./dialog.style.css";

export function Dialog({ isOpen, onClose, children }) {
  // Não utilizar!!!
  // const dialog = document.querySelector("dialog");

  const dialogRef = useRef(null);

  useEffect(() => {
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
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrapper">
          <button autoFocus onClick={onClose} className="btn-close">
            <IconClose />
          </button>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </>
  );
}
