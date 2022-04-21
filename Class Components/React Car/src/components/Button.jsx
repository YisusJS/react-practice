import { Component } from 'react'

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: '#fff',
    border: 'none',
    outline: 'none',
    width: '40%',
    height: '30px',
    fontSize: '0.8rem',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}

class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />
  }
}

export default Button
