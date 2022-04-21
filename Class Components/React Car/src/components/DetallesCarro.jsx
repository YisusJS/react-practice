import { Component } from 'react'

const styles = {
  detallesCarro: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0, 0, 0,0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50,
  },
  ul: {
    padding: 0,
    margin: 0,
  },
  producto: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '25px 20px',
    borderBottom: '1px solid #ccc',
  },
}

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((item, index) => {
            return (
              <li style={styles.producto} key={index}>
                <img alt={item.name} src={item.img} width='50px' height='32' />
                {item.name} <span>{item.cantidad}</span>{' '}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default DetallesCarro
