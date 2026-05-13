import React from "react";
import maquina from "../assets/maquina-de-escrever.jpg"
import styles from "./Contato.module.css"
import Head from "../Head";

const Contato = () => {
  return (
    <main className={styles.main}>
      <Head title="Ranek | Contato" description="Página de contato"/>
      <img src={maquina} alt="Imagem de uma máquina de escrever" />
      <div>
        <h2>Entre em contato</h2>
        <ul>
          <li>andressa.tomiozzo.dev@gmail.com</li>
          <li>(65) 999855542</li>
        </ul>
      </div>
    </main>
  );
};

export default Contato;
