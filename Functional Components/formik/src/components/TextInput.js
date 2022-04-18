import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  // En el primer tenemos la información de name, value y sus eventos y el segundo contiene las propiedades de error, touched, initialValue, value
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
