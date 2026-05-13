import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      home
      <Link to="produtos/notebook">Notebook</Link>
      <Link to="produtos/smartphone">Smartphone</Link>
    </div>
  )
}

export default Home
