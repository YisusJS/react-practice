// Componentes no controlados
function App() {
  // Función que toma los datos del formulario y los guarda en un array
  const submit = (e) => {
    e.preventDefault();
    let data = Array.from(new FormData(e.target));
    data = Object.fromEntries(data);
    console.log(data);
  };

  return (
    // Añadimos el evento al presionar el botón submit
    <form onSubmit={submit}>
      <div>
        <span>Lala</span>
        <input name="campo" type="text" />
      </div>
      <input name="campo-2" type="text" />
      <input name="files" type="file" />
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default App;
