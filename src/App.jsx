import React, { useState } from "react"; // useState permite guardar y actualizar valores como el usuario logueado
import Login from "./components/Login";
import Registro from "./components/Registro";

function App() {
  const [user, setUser] = useState("");                     // Esta función se ejecuta cuando alguien hace login desde el componente Login
  const handleLogin = (username) => {                      // Recibe el "username" como parámetro y actualiza el estado "user"
    setUser(username); // guarda el nombre del usuario
  };

  // Esta función se ejecuta cuando el usuario hace click en el botón "Logout"
  // Su tarea es limpiar el estado "user"
  const handleLogout = () => {
    setUser("");
  };

  // La parte que devuelve el componente (lo que se muestra en pantalla)
  return (
    <div>
      {user ? (
        // Caso 1: Hay un usuario logueado
        <div>
          <h1>¡Hola de nuevo {user}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // Caso 2: No hay usuario logueado
        <div>
          <h1>Bienvenido</h1>
          <Login onLogin={handleLogin} />
          <Registro />
        </div>
      )}
    </div>
  );
}

export default App;
