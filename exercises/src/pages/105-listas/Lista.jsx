import React from 'react'
import "./Lista.css"

const Lista = ({titulo, itens}) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <ul>
        {itens.map((item) => (
          <li key={item} className='lista'>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Lista
