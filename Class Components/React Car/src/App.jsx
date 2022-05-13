import { Component } from 'react'
import { Layout, Title, Productos, Navbar } from '@components'

class App extends Component {
  // Creamos nuestro estado del componente
  state = {
    productos: [
      { name: 'Tomate', price: 500, img: 'https://agroactivocol.com/wp-content/uploads/2020/07/Tomate-Lancero.jpg' },
      { name: 'Lechuga', price: 1000, img: 'https://okdiario.com/img/recetas/2016/09/18/lechuga-boston.jpg' },
      { name: 'Arveja', price: 1500, img: 'https://surtifruver.com/wp-content/uploads/2017/04/las-arvejas-1.jpg' },
      { name: 'Maíz', price: 2500, img: 'https://i.blogs.es/c5c0b8/maices-1/1366_2000.jpg' },
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
