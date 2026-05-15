import React from 'react'

const App203 = () => {
  const [texto, setTexto] = React.useState(null)
  return (
    <div>
      <label htmlFor="texto">Digite seu nome:</label>
      <input type="text" id='texto' name='texto' onChange={(e) => setTexto(e.target.value)} />
      <p>{texto}</p>
    </div>
  )
}

export default App203
