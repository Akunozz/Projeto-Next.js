import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMotorista } from "@/services/motoristasService";

export const useDeleteMotorista = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteMotorista,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["motorista"] });
        },
    });
};
