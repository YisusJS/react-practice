import { Component } from 'react'
import { Layout, Title, Productos, Navbar } from '@components'

class App extends Component {
  // Creamos nuestro estado del componente
  state = {
    productos: [
      { name: 'Tomate', price: 500, img: './src/img/tomate.jpg' },
      { name: 'Lechuga', price: 1000, img: './src/img/lechuga.jpg' },
      { name: 'Arbeja', price: 1500, img: './src/img/arbeja.jpg' },
      { name: 'Plátano', price: 2000, img: './src/img/platano.png' },
      { name: 'Maíz', price: 2500, img: './src/img/maiz.png' },
      { name: 'Aguacate', price: 3000, img: './src/img/aguacate.png' },
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name ? { ...x, cantidad: x.cantidad + 1 } : x
      )
      return this.setState({ carro: newCarro })
    }

    this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    {
      return (
        <div>
          <Navbar
            esCarroVisible={this.state.esCarroVisible}
            mostrarCarro={this.mostrarCarro}
            carro={this.state.carro}
          />
          <Layout>
            <Title />
            <Productos
              agregarAlCarro={this.agregarAlCarro}
              productos={this.state.productos}
            />
          </Layout>
        </div>
      )
    }
  }
}

export default App
