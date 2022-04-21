import { useRef } from 'react';

// Componentes no controlados
function App() {
  const input = useRef(null);
  const file = useRef(null);
  const submit = () => {
    const form = new FormData();
    form.append('archivo', file.current.files[0]);
    form.append('campo', input.current.value);
    console.log(Object.fromEntries(form));
    // fetch('/lala', { method: 'POST', body: form });
  };

  return (
    // Añadimos el evento al presionar el botón submit
    <div>
      <div>
        <span>Lala</span>
        <input ref={input} type="text" name="campo" />
        <input ref={file} type="file" />
      </div>
      <input type="submit" value="enviar" onClick={submit} />
    </div>
  );
}

export default App;
