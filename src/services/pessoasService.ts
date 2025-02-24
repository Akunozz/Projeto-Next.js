import { fetcher } from "./api";

export const getPessoas = async () => {
  return await fetcher("http://localhost:3000/pessoas");
};
