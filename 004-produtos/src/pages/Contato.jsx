import React from "react";
import maquina from "../assets/maquina-de-escrever.jpg"
import styles from "./Contato.module.css"
import Head from "../Head";

const Contato = () => {
  return (
    <section className={`${styles.main} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato"/>
      <img src={maquina} alt="Imagem de uma máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul>
          <li>andressa.tomiozzo.dev@gmail.com</li>
          <li>(65) 999855542</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
