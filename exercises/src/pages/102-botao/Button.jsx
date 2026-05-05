import React from 'react'
import "./Button.css"

const Button = ({children, tipo}) => {
  return (
    <button className={`btn ${tipo}`}>
      {children}
    </button>
  )
}

export default Button
