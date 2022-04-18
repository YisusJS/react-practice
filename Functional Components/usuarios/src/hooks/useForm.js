// Importamos useState de react
import { useState } from 'react';

// Creamos nuestro custom hook
const useForm = (value) => {
  const [form, setForm] = useState(value);

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const resetForm = () => {
    setForm(value);
  };

  return [form, handleChange, resetForm];
};

// Exportamos nuestro custom hook
export default useForm;
