const FormikValidate = (values) => {
  const errors = {};

  // Deposit
  if (!values.deposit) {
    errors.deposit = 'Depósito es requerido';
  } else if (isNaN(Number(values.deposit))) {
    errors.deposit = 'Depósito debe ser un número';
  } else if (values.deposit < 1000) {
    errors.deposit = 'El depósito debe ser mayor a $1000';
  }

  // Contribution
  if (!values.contribution) {
    errors.contribution = 'Contribución es requerido';
  } else if (isNaN(Number(values.contribution))) {
    errors.contribution = 'Contribución debe ser un número';
  }

  // Years
  if (!values.years) {
    errors.years = 'Años es requerido';
  } else if (isNaN(Number(values.years))) {
    errors.years = 'Años debe ser un número';
  } else if (values.years <= 0) {
    errors.years = 'El año debe ser mayor a 0';
  }

  // Intereses
  if (!values.interes) {
    errors.interes = 'Intereses es requerido';
  } else if (isNaN(Number(values.interes))) {
    errors.interes = 'Intereses debe ser un número';
  } else if (values.interes <= 0) {
    errors.interes = 'El depósito debe ser mayor a 0';
  }

  return errors;
};

export { FormikValidate };
