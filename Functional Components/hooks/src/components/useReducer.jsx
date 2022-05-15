// Alternativa a useState pero este permite añadir una función que se ejecuta cuando el tipo cambia, y también mantiene un estado
import { useReducer, useState } from 'react';

// const state = {contador: 0}
// action = {type: string, payload: any}

const initValue = { contador: 10 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { contador: state.contador + 1 };
    case 'decrement':
      return { contador: state.contador - 1 };
    case 'set':
      return { contador: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initValue);
  const [valor, setValor] = useState(0);

  return (
    <div>
      Contador: {state.contador}
      <input
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'set', payload: valor });
        }}
      >
        Set
      </button>
    </div>
  );
};

export default App;
