// Con use ref podemos seleccionar elementos jsx
import { useRef } from 'react';

const App = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const click = () => {
    console.log(paraRef.current);
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focus}>Input focus</button>
      <p onClick={click} ref={paraRef}>Hello</p>
    </div>
  );
};


export default App;
