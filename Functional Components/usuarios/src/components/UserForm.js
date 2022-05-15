// Importar los estilos
import './UserForm.css';
// Importamos componentes
import Input from './Input';
import Button from './Button';
// Importamos nuestro custom hook
import useForm from '../hooks/useForm';

const UserForm = ({ submit }) => {
  // Hacemos uso del custom hook
  const [form, handleChange, resetForm] = useForm({
    name: '',
    lastname: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Your  name"
        label={'Nombre'}
        name={'name'}
        value={form.name}
        onChange={handleChange}
      />

      <Input
        placeholder="Your lastname"
        label={'Apellido'}
        name={'lastname'}
        value={form.lastname}
        onChange={handleChange}
      />

      <Input
        placeholder="email@example.com"
        label={'Correo'}
        name={'email'}
        value={form.email}
        onChange={handleChange}
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
