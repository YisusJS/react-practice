import { Component } from 'react'
import { Button } from '@components'

const styles = {
  item: {
    width: '300px',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 1px #ccc',
    boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
    padding: '10px 15px',
    borderRadius: '8px',
  },
  img: {
    width: '200px',
    height: '150px',
  },
}

class Item extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props
    return (
      <div style={styles.item}>
        <img style={styles.img} alt={producto.name} src={producto.img} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    )
  }
}

export default Item
