// Se ejecutan después de cada renderizado completado, pero se puede seguir ejecutando cuando ciertos valores cambien, similares a los watchers en vue
import { useState, useEffect } from 'react';

const useCount = (inicial) => {
  const [count, setContador] = useState(inicial);

  const setCount = () => {
    setContador(count + 1);
  };

  return [count, setCount];
};

const Interval = ({ count }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(count), 1000);
    return () => {
      clearInterval(i);
    };
  }, [count]);
  return <p>Intervalo {count}</p>;
};

const App = () => {
  const [count, setCount] = useCount(0);
  useEffect(() => {
    document.title = count;
  }, [count]);
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
      <Interval count={count} />
    </div>
  );
};

export default App;
