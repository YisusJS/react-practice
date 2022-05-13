import Button from '../Button'
import './index.css'
// Componente para generar li dinámicos

// Función que retorna los estilos de los enlaces
const listStyle = () => ({
  listStyle: 'none',
})

const fontBold = {
  fontWeight: 'bold',
}

// Componente
const CreateNewItemList = ({ children, lastname }) => {
  // Props = {children: x, lastname: y}
  return (
    <li className='test' style={{ ...fontBold, ...listStyle() }}>
      {children} {lastname}
    </li>
  )
}

// Componente para crear listas dinámicas usando otro componente

// Función que retorna los estilos de la lista
const ulStyle = ({ bg = '#888' }) => ({
  backgroundColor: bg,
  padding: '20px 20px 20px 20px',
})

const newFunctionLog = () => alert('Hello world')

const CreateNewList = () => {
  return (
    <ul style={ulStyle({ bg: '#333' })}>
      <Button onClick={newFunctionLog}>Enviar</Button>
      <CreateNewItemList lastname={'Jesús'}>Edwin</CreateNewItemList>
      <CreateNewItemList lastname={'Nicolas'}>Yeison</CreateNewItemList>
      <CreateNewItemList lastname={'Steven'}>Gilberth</CreateNewItemList>
    </ul>
  )
}

export default CreateNewList
