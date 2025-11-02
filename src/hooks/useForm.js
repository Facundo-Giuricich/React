import { useState } from "react"; //Esto trae la función useState desde React, sirve para guardar y actualizar datos dentro de un componente o un hook

const useForm = (initialValues) => {
  //Definición del hook personalizado useForm que recibe un objeto initialValues como parámetro
  const [formValues, setFormValues] = useState(initialValues); //formValues guarda los valores actuales del formulario,setFormValues es la función que actualiza esos valores

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      //esto se ejecuta cada vez que escriba en un input
      ...formValues, //se utiliza formValues para copiar lo que ya había y actualizar solo el campo que cambió
      [name]: value, //e.target.name es el nombre del input como el mail
    }); //e.target.value es lo que el usuario escribe
  };

  const handleReset = () => {
    setFormValues(initialValues);
  }; //Esto reinicia el formulario a su estado inicial, deja todos los campos por defecto

  return {
    formValues,
    handleChange,
    handleReset,
  }; // esto devuelve un objeto con los valores actuales del formulario, la función para resetear y actualizar el formulario
};

export default useForm;
