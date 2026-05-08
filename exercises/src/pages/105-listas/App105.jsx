import React from 'react'
import Lista from './Lista'

const App105 = () => {
  const frutas = ["abacaxi", "laranja", "maçã", "ameixa"]
  const cores = ["amarelo", "laranja", "vermelho", "roxo"]
  return (
    <div>
      <Lista titulo="Frutas" itens={frutas} />
      <Lista titulo="Cores" itens={cores} />
    </div>
  )
}

export default App105
