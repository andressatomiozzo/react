const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const App02 = () => {
  return (
    <section>
      <h1>Atividade 02</h1>
      {produtos
        .filter((produto) => Number(produto.preco.replace("R$ ", "")) > 1500)
        .map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>Preço: {produto.preco}</p>
            <ul style={{ width: "500px" }}>
              {produto.cores.map((cor) => (
                <li key={cor} style={{ color: "white", backgroundColor: cor }}>{cor}</li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default App02;
