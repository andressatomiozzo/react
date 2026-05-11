import React from "react";

import styles from "./Carrossel.module.css";

import Slide from "./Slide";

// Importando as imagens
import imagem1 from "./img/1.png";
import imagem2 from "./img/2.png";
import imagem3 from "./img/3.png";
import imagem4 from "./img/4.png";

const Carrossel = () => {
  const [indexAtual, setIndexAtual] = React.useState(0);
  const imagens = [imagem1, imagem2, imagem3, imagem4];
  const indexTotal = imagens.length;

  const handleClick = (index) => {
    setIndexAtual((index + indexTotal) % indexTotal);
  };

  const autoplayId = React.useRef(null);
  const stopAutoplay = () => clearInterval(autoplayId.current);
  const startAutoplay = () => {
    stopAutoplay();
    autoplayId.current = setInterval(() => setIndexAtual((indexAtual) => (indexAtual + 1) % indexTotal), 3000);
  };

  React.useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  return (
    <div className={styles.container} onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
      <div className={styles.viewport}>
        {imagens.map((imagem, i) => {
          let classe = "";

          if (i === (indexAtual - 1 + indexTotal) % indexTotal) classe = styles.prev;
          else if (i === indexAtual) classe = styles.active;
          else if (i === (indexAtual + 1) % indexTotal) classe = styles.next;
          else classe = styles.hidden;

          return <Slide key={imagem} src={imagem} alt={`Imagem ${i + 1}`} className={`${styles.img} ${classe}`} onClick={() => handleClick(i)} />;
        })}
      </div>
      <div className={styles.dotsContainer}>
        {imagens.map((imagem, i) => (
          <button
            className={`${styles.dot} ${i === indexAtual && styles.dotActive}`}
            aria-label={`Ir para a imagem ${i + 1}`}
            onClick={() => handleClick(i)}
            key={imagem}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
