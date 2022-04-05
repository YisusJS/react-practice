/* Reglas de los hooks
Siempre se llama en el nivel más alto del componente de REACT
Se puede llamar en custom hooks "recordar que los hooks deben comenzar por use*"
NO se llaman en loops ni condicionales
*/

// Importamos el hook useState
import { useState } from 'react';

// Custom hook
const useCount = (inicial) => {
  // Generamos el useState, primero el contador y después la función para definir el nuevo valor del contador
  const [count, setContador] = useState(inicial);

  const setCount = () => {
    setContador(count + 1);
  };

  return [count, setCount];
};

const App = () => {
  const [count, setCount] = useCount(0);
  return (
    <div>
      <p>Contador: {count}</p>
      <button
        onClick={() => {
          setCount();
        }}
      >
        Incrementar contador
      </button>
    </div>
  );
};

export default App;
