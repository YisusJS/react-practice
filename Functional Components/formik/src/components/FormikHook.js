import './App.css';
import { useFormik } from 'formik';

// Validations
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length <= 5) {
    errors.name = 'Name is too short';
  }

  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (values.lastname.length <= 5) {
    errors.lastname = 'Lastname is too short';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" {...formik.getFieldProps('name')} />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <label htmlFor="lastname">Lastname</label>
      <input id="lastname" type="text" {...formik.getFieldProps('lastname')} />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <label htmlFor="email">Email</label>
      <input id="email" type="text" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default App;
