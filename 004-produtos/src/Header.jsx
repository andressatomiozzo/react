import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <nav className='navHeader'>
        <NavLink className="linksNavHeader" to="/">Home</NavLink>
        <NavLink className="linksNavHeader" to="contato">Contato</NavLink>
      </nav>
    </header>
  )
}

export default Header
