"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Trash2 } from "lucide-react"
import IPessoa from "@/interfaces/IPessoas"

export const getColumns = (onDelete: (id: string) => void): ColumnDef<IPessoa>[] => [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "aniversario",
    header: "Data Nascimento",
    cell: ({ row }) => {
      const data = row.getValue<string>("aniversario");

      if (!data) return "-";

      const dataFormatada = new Date(data).toLocaleDateString("pt-BR");

      return dataFormatada;
    }
  },
  {
    id: "acoes",
    header: "Ações",
    cell: ({ row }) => {
      const id = String(row.original.id);
      return (
        <button
          onClick={() => onDelete(id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={20} />
        </button>
      );
    },
  },
];
