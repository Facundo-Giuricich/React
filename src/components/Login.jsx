import React from "react";
import useForm from "../hooks/useForm"; //esto es para importar el custom hook que maneja el estado del formulario


const Login = ({ onLogin }) => {
  const { formValues, handleChange, handleReset } = useForm({
    email: "",            //usa hook useForm con valores iniciales para el login
    password: "",         
  });

  // Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    const username = formValues.email.split("@")[0];  // Toma el nombre del usuario antes del "@" 
    onLogin(username); // Llama a la función que viene desde App.jsx y le pasa el nombre
    handleReset(); // Resetea los campos del formulario a sus valores iniciales
  };


// "onSubmit" hace que se ejecute handleSubmit cuando se envía el formulario
  return (
    <form onSubmit={handleSubmit}>    
      <h2>Login</h2>                      
      <label>Email:</label>
      <input
        type="email"
        name="email"               // este nombre debe coincidir con la clave en formValues
        value={formValues.email}   // valor actual del campo
        onChange={handleChange}    // actualiza el estado cada vez que se escribe algo
      />

      {/* esto es el campo para la contraseña */}
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />

      {/* Botón para enviar el formulario */}
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

// Exportamos el componente para poder usarlo en App.jsx
export default Login;
