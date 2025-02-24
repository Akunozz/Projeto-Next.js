"use client"

import { ColumnDef } from "@tanstack/react-table"
import IPessoa from "@/interfaces/IPessoas"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<IPessoa>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "usuario",
    header: "Usuário",
  },
//   {
//     accessorKey: "setor",
//     header: "Setor",
//   },
]
