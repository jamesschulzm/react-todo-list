import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { ToDoProvider } from "./components/ToDoProvider/index.jsx";
import "./index.css";

// Renderiza a aplicação dentro do elemento com id 'root'
createRoot(document.getElementById("root")).render(
  // StrictMode ajuda a identificar problemas no desenvolvimento
  <StrictMode>
    {/* ToDoProvider fornece o contexto global de tarefas */}
    <ToDoProvider>
      {/* Componente principal da aplicação */}
      <App />
    </ToDoProvider>
  </StrictMode>,
);
