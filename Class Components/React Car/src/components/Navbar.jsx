import { Component } from 'react'
import { Logo, Carro } from '@components'

const styles = {
  navbar: {
    display: 'flex',
    flexDirction: 'row',
    alignItems: 'center',
    height: '100px',
    padding: '0 50px',
    justifyContent: 'space-between',
    position: 'relative',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  },
}

class Navbar extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro
          esCarroVisible={esCarroVisible}
          mostrarCarro={mostrarCarro}
          carro={carro}
        />
      </nav>
    )
  }
}

export default Navbar
