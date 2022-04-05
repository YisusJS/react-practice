import React from 'react'
import ReactDOM from 'react-dom'
// Importamos nuestro componente
import CreateNewList from './components/NewList/index.js'
import reportWebVitals from './reportWebVitals'

// Modo estricto: ayuda a detectar errores, 1: Render, 2: Elemento donde se renderizará
ReactDOM.render(
  <React.StrictMode>
    <CreateNewList />
  </React.StrictMode>,
  document.getElementById('root')
)

// 1: Elementos a renderizar, 2: Elemento donde se renderizará
// ReactDOM.render(<CreateNewList />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
