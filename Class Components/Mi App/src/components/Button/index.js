import './index.css'

const arr = ['feliz', 'triste', 'emocionado']

const Button = ({ onClick, children }) => {
  const isLoged = false

  if (isLoged) {
    return <p>Edwin Jesús</p>
  }

  return (
    <div>
      {arr.map((el) => (
        <p key={el}>{el}</p>
      ))}
      <button onClick={onClick} className='btn'>
        {children}
      </button>
    </div>
  )
}

export default Button
