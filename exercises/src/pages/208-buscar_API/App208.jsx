import React from "react";

const App208 = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null)
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        if (!response.ok) throw new Error("Houve algum problema com a API");
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {data && data.map((dado) => (
        <div key={dado.id}>
          <h2>{dado.name}</h2>
          <p>{dado.email}</p>
        </div>
      ))}
    </div>
  );
};

export default App208;
