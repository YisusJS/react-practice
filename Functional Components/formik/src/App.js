import './App.css';
import TextInput from './components/TextInput';
import CheckBox from './components/CheckBox';
import Select from './components/Select';
import Radio from './components/Radio';
import { Formik, Form } from 'formik';

// Validations
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Nombre es requerido';
  } else if (values.firstName.length <= 5) {
    errors.firstName = 'Nombre es muy corto';
  }

  if (!values.lastname) {
    errors.lastname = 'Apellido es requerido';
  } else if (values.lastname.length <= 5) {
    errors.lastname = 'Apellido es muy corto';
  }

  if (!values.email) {
    errors.email = 'Email es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.language) {
    errors.language = 'Un lenguaje es requerido';
  }

  if (!values.acceptedTerms) {
    errors.acceptedTerms = 'Debe aceptar los términos';
  }

  return errors;
};

function App() {
  return (
    <Formik
      // Deben coincidir con los name de los inputs
      initialValues={{
        firstName: '',
        lastname: '',
        email: '',
        language: '',
        acceptedTerms: false,
        radioOption: 'perro',
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="firstName" label="Nombre" />
        <TextInput name="lastname" label="Lastname" />
        <TextInput name="email" label="Email" />

        <Select name="language" label="Select your language">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </Select>

        <CheckBox name="acceptedTerms">Terms</CheckBox>

        <Radio name="radioOption" label="Perro" value="perro" />
        <Radio name="radioOption" label="Gato" value="gato" />
        <Radio name="radioOption" label="Cangrejo" value="cangrejo" />

        <input type="submit" value="Enviar" />
      </Form>
    </Formik>
  );
}

export default App;
