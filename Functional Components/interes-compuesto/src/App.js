// Utilities
import { Formik, Form } from 'formik';
import { FormikValidate as validate } from './utilities';
import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';
import Section from './components/Section';

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;

  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (1 + rate);
  }

  return Math.round(total);
};

function App() {
  // Función que se ejecuta al presionar enter usando Formik
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(deposit, contribution, years, rate);
    console.log(val);
  };

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: 1000,
            contribution: 1000,
            years: 1,
            rate: 0.1,
          }}
          // Validaciones
          validate={validate}
          // Pasamos la función que manipulará la data del formulario
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Depósito inicial" type="number" />
            <Input name="contribution" label="Contribución" type="number" />
            <Input name="years" label="Años" type="number" />
            <Input name="rate" label="Interes" type="number" />
            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
