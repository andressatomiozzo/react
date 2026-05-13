import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <nav className='navHeader'>
        <li>
          <NavLink className="linksNavHeader" to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink className="linksNavHeader" to="contato">Contato</NavLink>
        </li>
      </nav>
    </header>
  )
}

export default Header
