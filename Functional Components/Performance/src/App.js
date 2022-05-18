// Función de memoizatión para funciones, esto hace que la función no se procese si siempre es la misma
import { useState, useCallback, useMemo } from 'react';
import Title from './components/Title';
import MyForm from './components/Forms/MyForm';
import MyList from './components/Lists/MyList';

function App() {
  const [valores, setValores] = useState([]);
  const handleSubmit = useCallback((values) => {
    setValores((data) => [...data, values]);
  }, []);

  const iterador = 50000000;
  console.time('memo');

  // 1. Función que guarda el resultado si los argumentos no cambiaron
  // 2. Argumentos que recibe la función
  const memoized = useMemo(() => {
    let total = 0;

    for (let i = 0; i < iterador; i++) {
      total = total * iterador;
    }
    return total
  }, [iterador]);
  console.timeEnd('memo');

  return (
    <div>
      <Title>Mi título</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;
