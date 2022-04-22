// Components
import { Search, List, Counter, Item, Button } from '../../components';
// Styles
import './App.css';
// Variables
const todos = [
  { text: 'Learn React', done: false },
  { text: 'Learn Redux', done: false },
  { text: 'Learn Jest', done: false },
];

function App() {
  return (
    // Esto es un fragmento, es decir, no se va a renderizar nada, solo lo de adentro
    <>
      <Counter />
      <Search />
      <List>
        {todos.map((to, index) => (
          <Item key={index} {...to} />
        ))}
      </List>
      <Button />
    </>
  );
}

export default App;
