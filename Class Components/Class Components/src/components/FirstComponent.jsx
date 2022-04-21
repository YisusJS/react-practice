
// Se importa la clase Component de react
import { Component } from 'react'
import './FirstComponent.css'

// Un componente tiene 3 estados con distintos procesos
/* 1. Mounting: Cuando el componente se monta en el DOM { 
  Constructor,
  Render,
  React actualiza el DOM,
  Método de cuando se monta "componentDidMount" }
*/
/* 2. Updating: Cuando el componente se actualiza {
  Render,
  React actualiza el DOM,
  Método de cuando se actualiza }
*/
/* 3. Unmounting: Cuando el componente se desmonta del DOM {
  Método de cuando se desmonta }
*/
class Button extends Component {
  // Mala práctica 1. en ejecutarse
  // constructor(props) {
  //   super(props)
  //   console.log('1. Ejecutando el método constructor de Button', props)
  // }

  state = {
    count: 0,
  }

  // 3. en ejecutarse
  componentDidMount() {
    console.log('3. Ejecutando el método componentDidMount del button')
  }

  // 4. en ejecutarse (guarda las propiedades previas del componente y su estado)
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
    console.log('4. Ejecutando el método componentDidUpdate del button')
  }

  // 5. en ejecutarse
  componentWillUnmount() {
    console.log(
      '5. Ejecutando el método componentWillUnmount del button',
      this.props,
      this.state
    )
  }

  // Método para actualizar el estado del componente
  // updateCount = () => {
  //   const count = this.state.count
  //   this.setState({ count: count + 1 })
  // }

  updateCount() {
    const count = this.state.count
    this.setState({ count: count + 1 })
  }

  // 2. en ejecutarse
  render() {
    console.log('2. Ejecutando el método render del button')
    return (
      <button onClick={this.updateCount.bind(this)}>{this.state.count}</button>
    )
  }
}

// Se genera una herencia de la clase Component
class FirstComponent extends Component {
  state = {
    color: 'initial-state',
    isVisible: true,
  }

  // Método importante, se debe colocar para renderizar el componente
  render() {
    console.log('1. Ejecutando el método render de App')
    return (
      <div>
        <p>Hola mundo</p>
        { this.state.isVisible ? <Button text={'Hola mundo'} /> : null}
        <button
          className={`${this.state.color}`}
          onClick={() => this.setState({ color: 'second-state', isVisible: false })}
        >
          Send
        </button>
      </div>
    )
  }
}

export default FirstComponent
