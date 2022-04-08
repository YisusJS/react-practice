// Importamos funcionalidades de react
import { useState } from 'react';

// Importamos nuestros componentes
import Card from './Card';
import Container from './Container';
import UserForm from './UserForm';

// Componente principal
function App() {
  // Hooks de react
  const [users, setUsers] = useState([]);

  // Funcion para agregar usuarios
  const handleAddUsers = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Retornamos JSX
  return (
    <Container>
      <Card>
        <UserForm submit={handleAddUsers} />
      </Card>
      {users.length ? (
        <Card>
          <ul>
            {users.map((user) => (
              <li
                key={user.email}
              >{`${user.name} ${user.lastname}: ${user.email}`}</li>
            ))}
          </ul>
        </Card>
      ) : null}
    </Container>
  );
}

export default App;
