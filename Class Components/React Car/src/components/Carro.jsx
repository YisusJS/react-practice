import { Component } from 'react'
import { BubbleAlert, DetallesCarro } from '@components'

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: '10%',
  },
}

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props
    const cantidad = carro.reduce((previous, current) => {
      return previous + current.cantidad
    }, 0)

    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.carro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    )
  }
}

export default Carro
