import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const App08 = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const { response, json } = await request("https://ranekapi.origamid.dev/json/api/produto/");
    }
    fetchData()
  }, [request]);

  if (error) return <p>Erro</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App08;
