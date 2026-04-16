import React from 'react'
import NavBar from "./NavBar03.jsx";
import Home from "./Home03.jsx";
import Produtos from "./Produtos03.jsx";

const App03 = () => {
  const {pathname} = window.location;
  let Pagina;
  pathname === "/produtos" ? Pagina = Produtos : Pagina = Home

  return (
  <>
    <NavBar/>
    <Pagina />
  </>
  )
}

export default App03
