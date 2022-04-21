// Podemos recibir props mediante los argumentos haciendo el destructuring directamente o también podemos recibir un objeto de props y por dentro de la función de componente hacer el destructuring
const MiComponente = ({ newProperty, children }) => {
  return <div>{`${newProperty} ${children}`}</div>;
};

// Podemos crear funciones flecha o declarativas, deben ser funciones puras, que siempre retornan lo mismo
const App = () => {
  return <MiComponente newProperty={'Nombre:'}>Edwin Jesús</MiComponente>;
};

export default App;
