import { useEffect, useRef } from "react";
import { IconClose } from "../icons";
import "./dialog.style.css";

export function Dialog({ isOpen, onClose, children }) {
  // Referência para o elemento <dialog> no DOM
  const dialogRef = useRef(null);

  // Abre ou fecha o dialog conforme o valor de isOpen
  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);
  // O useEffect acima executa sempre que isOpen muda

  // Adiciona e remove o listener para o evento 'close' do dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", onClose);
    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

  // Função para abrir o dialog de forma modal
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // Função para fechar o dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrapper">
          {/* Botão para fechar o dialog */}
          <button autoFocus onClick={onClose} className="btn-close">
            <IconClose />
          </button>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </>
  );
}
