import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser("");
  };

  return (
    <div className="app">
      {user ? (
        <div className="welcome-container">
          <h1>¡Hola de nuevo {user}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="forms-container">
          <Login onLogin={handleLogin} />
          <Register />
        </div>
      )}
    </div>
  );
}

export default App;