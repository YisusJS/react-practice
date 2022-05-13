// Importamos styled components
import styled, { keyframes } from 'styled-components';

// Componentes usando styled components
const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

const Button = styled.button`
  transition: all 0.4s ease;
  border: 1px solid red;
  padding: 10px 15px;
  background-color: ${(props) => (props.primary ? 'red' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'red')};
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? 'white' : 'red')};
    color: ${(props) => (props.primary ? 'red' : 'white')};
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
  }

  /* Solo para clases del mismo componente */
  &.secondary {
    background-color: blue;
    border: 1px solid blue;
  }

  /* También podemos agregarle clases extra pero solo lo tomarán los que estén dentro del componente button */
  .info {
    font-size: 40px;
  }
`;

// Aquí estamos haciendo un tipo de "herencia", también podemos pasarle componentes pero debemos pasarle la propiedad de classname al componente ya creado
// const Link = ({ classname, ...props }) => {
//   return <a className={classname} {...props} />;
// };

// const LinkStyled = styled(Link)`
//   color: red;
// `;

// Pasar propiedades al componente usando styled components
const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
  color: props.color || 'red',
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${(props) => props.color};
`;

const BlockButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 24px;
`;

// Animaciones, se exporta keyframes de styled-components
const girar = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotar = styled.div`
  animation: ${girar} 2s linear infinite;
`;

function App() {
  return (
    <Content>
      <P>Hello</P>
      <Button primary>
        <p className="info">Font</p>
      </Button>
      <Button className="secondary">
        <p className="info">Font</p>
      </Button>
      <BlockButton as="a" href="https://facebook.com" primary>
        Button
      </BlockButton>
      <Input type="number" color="yellow" />
      <Rotar>
        <Input type="number" color="yellow" />
      </Rotar>
    </Content>
  );
}

export default App;
