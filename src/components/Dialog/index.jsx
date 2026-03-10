import "./dialog.style.css";

export function Dialog() {
  // Não utilizar!!!
  // const dialog = document.querySelector("dialog");

  // "Show the dialog" button opens the dialog modally
  const openDialog = () => {
    dialog.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialog.close();
  };

  return (
    <>
      <dialog>
        <button autoFocus onClick={closeDialog}>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
      <button onClick={openDialog}>Show the dialog</button>
    </>
  );
}
