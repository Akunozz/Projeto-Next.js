"use client"
import { DataTable } from "@/components/ui/DataTable"
import { getColumns } from "./columns"
import { useMotoristas } from "@/hooks/useMotoristas"
import { useDeleteMotorista } from "@/hooks/useMutateMotoristas"

export default function TabelaMotoristas() {
    const { data, isPending, error } = useMotoristas();
    const mutation = useDeleteMotorista();

    const handleDelete = (id: string) => {
        if (confirm("Tem certeza que deseja excluir este motorista?")) {
            mutation.mutate(id);
        }
    };

    if (isPending) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar os dados</p>;

    return (
        <div className="container mx-auto py-10">
            <DataTable
                columns={getColumns(handleDelete)} // Passa onDelete diretamente
                data={data}
            />
        </div>
    );
}
