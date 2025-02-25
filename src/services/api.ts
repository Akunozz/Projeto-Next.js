const API_BASE_URL = "https://67a9ea7365ab088ea7e4f65e.mockapi.io/api/estudo";

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar ${endpoint}`);
    }

    return response.json();
  },

  delete: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error(`Erro ao excluir ${endpoint}`);
    }
  },
};
