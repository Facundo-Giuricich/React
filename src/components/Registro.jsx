import React from "react";
import useForm from "../hooks/useForm"; // Importo el custom hook useForm que maneja el estado de los formularios

// Componente de Registro
const Registro = () => {
  const { formValues, handleChange, handleReset } = useForm({
    username: "",   
    email: "",      
    password: "",   
    firstname: "",  
    lastname: "",   
  });

  // Esta función se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    console.log("Datos del registro:", formValues); // Muestra los datos ingresados en la consola del navegador
    handleReset(); // Resetea el formulario
  };

  return (
    // Cuando se envía el formulario, se ejecuta handleSubmit
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={formValues.user}
        onChange={handleChange}
      />

      
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />

      <label>Nombre:</label>
      <input
        type="text"
        name="firstname"
        value={formValues.firstname}
        onChange={handleChange}
      />

      <label>Apellido:</label>
      <input
        type="text"
        name="lastname"
        value={formValues.lastname}
        onChange={handleChange}
      />

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Registro;
