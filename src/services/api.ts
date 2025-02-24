export const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar os dados");
    }
    return response.json();
  };
  