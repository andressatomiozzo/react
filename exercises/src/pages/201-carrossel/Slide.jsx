import React from 'react'

import styles from "./Carrossel.module.css"


const Slide = ({src, alt, className, onClick}) => {
  return (
    <img src={src} alt={alt} className={className} onClick={onClick} />
  )
}

export default Slide
