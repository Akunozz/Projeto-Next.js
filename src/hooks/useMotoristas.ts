import { useQuery } from "@tanstack/react-query";
import { getMotoristas } from "@/services/motoristasService";

export const useMotoristas = () => {
    return useQuery({
        queryKey: ["motorista"],
        queryFn: getMotoristas,
    });
};
