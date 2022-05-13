import { Component } from 'react'
import { Item } from '@components'

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
}

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props
    return (
      <div style={styles.productos}>
        {productos.map((producto) => (
          <Item
            key={producto.name}
            producto={producto}
            agregarAlCarro={agregarAlCarro}
          />
        ))}
      </div>
    )
  }
}

export default Productos
