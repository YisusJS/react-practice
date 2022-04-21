import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState({
    name: 'Soy el valor inicial del name',
    lastname: 'Soy el valor inicial del lastname',
    language: '',
    check: false,
    estado: 'vue',
  });
  // const handleChange = (e) => {
  //   setValue({ ...value, [e.target.name]: e.target.value });
  // };

  // Se hace destructuring en las propiedades del evento e.target
  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  };

  console.log(value);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastname"
        value={value.lastname}
        onChange={handleChange}
      />

      <select name="language" onChange={handleChange} value={value.language}>
        <option value="">-- Seleccione --</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="react">React</option>
      </select>

      <input
        type="checkbox"
        name="check"
        checked={value.check}
        onChange={handleChange}
      />

      <div>
        <label htmlFor="">Frameworks</label>
        <input
          onChange={handleChange}
          type="radio"
          value="vue"
          name="estado"
          checked={value.estado === 'vue'}
        />{' '}
        Vue
        <input
          onChange={handleChange}
          type="radio"
          value="angular"
          name="estado"
          checked={value.estado === 'angular'}
        />{' '}
        Angular
        <input
          onChange={handleChange}
          type="radio"
          value="svelte"
          name="estado"
          checked={value.estado === 'svelte'}
        />{' '}
        Svelte
      </div>
    </div>
  );
};

export default App;
