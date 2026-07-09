import React from "react";

const useFetch = <T,>() => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url: string) => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      if (!response.ok) throw new Error("Não foi possível buscar os dados");
      setData(json);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro desconhecido");
      }
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
