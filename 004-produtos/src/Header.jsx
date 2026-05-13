import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>  {" | "}
      <NavLink to="contato">Contato</NavLink>
    </nav>
  )
}

export default Header
