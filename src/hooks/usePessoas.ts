import { useQuery } from "@tanstack/react-query";
import { getPessoas } from "@/services/pessoasService";

export const usePessoas = () => {
  return useQuery({
    queryKey: ["pessoas"],
    queryFn: getPessoas,
  });
};
