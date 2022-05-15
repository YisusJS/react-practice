// Utilities
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './components/Input';
import Button from './components/Button';
import Balance from './components/Balance';
import Container from './components/Container';
import Section from './components/Section';
import LeftRight from './components/LeftRight';
import { useState } from 'react';

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;

  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (1 + rate);
  }

  return Math.round(total);
};

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function App() {
  const [balance, setBalance] = useState('');

  // Función que se ejecuta al presionar enter usando Formik
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(deposit, contribution, years, rate);
    setBalance(formatter.format(val));
  };

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          // Validaciones
          validationSchema={Yup.object({
            deposit: Yup.number().required('Obligatorio'),
            contribution: Yup.number().required('Obligatorio'),
            years: Yup.number().required('Obligatorio'),
            rate: Yup.number()
              .required('Obligatorio')
              .min(0, 'El valor mínimo es de 0')
              .max(1, 'El valor máximo es 1'),
          })}
          // Pasamos la función que manipulará la data del formulario, se envía un objeto con los valores del formulario por defecto
          onSubmit={handleSubmit}
        >
          <Form>
            <Input
              name="deposit"
              label="Depósito inicial"
              type="number"
              placeholder="Debe ser un número"
            />
            <Input
              name="contribution"
              label="Contribución"
              type="number"
              placeholder="Debe ser un número"
            />
            <Input
              name="years"
              label="Años"
              type="number"
              placeholder="Debe ser un número"
            />
            <Input
              name="rate"
              label="Interes"
              type="number"
              placeholder="Debe ser un número"
            />
            <LeftRight className="">
              <Button type="submit">Calcular</Button>
              {balance ? <Balance>Balance final: {balance} </Balance> : null}
            </LeftRight>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
