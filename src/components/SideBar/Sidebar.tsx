"use client"


import { Home, LogIn, User2, Building, Landmark, ClipboardList, ClipboardCheck, ClipboardType, ListChecks, ClipboardPenLine, Users, CarFront, Car, UserSquare2 } from "lucide-react"
import Image from 'next/image'
import logo from '../../../public/logo-appelsoft.png'

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [

  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "LoginPage",
    url: "/LoginPage",
    icon: LogIn,
  },
  {
    title: "Usuários",
    url: "/Usuarios",
    icon: User2,
  },
  {
    title: "Empresas",
    url: "/Empresas",
    icon: Building,
  },
  {
    title: "Centro de Custo",
    url: "/CentroDeCusto",
    icon: Landmark,
  },
  {
    title: "Módulos",
    url: "/Modulos",
    icon: ClipboardList,
  },
  {
    title: "Checklist",
    url: "/Checklist",
    icon: ClipboardCheck,
  },
  {
    title: "Tipos de Checklist",
    url: "/TiposDeChecklist",
    icon: ClipboardType,
  },
  {
    title: "Itens",
    url: "/Itens",
    icon: ListChecks,
  },
  {
    title: "Itens Status",
    url: "/ItensStatus",
    icon: ClipboardPenLine,
  },
  {
    title: "Grupos",
    url: "/Grupos",
    icon: Users,
  },
  {
    title: "Veículos",
    url: "/Veiculos",
    icon: CarFront,
  },
  {
    title: "Marcas de Veículos",
    url: "/MarcasDeVeiculos",
    icon: Car,
  },
  {
    title: "Motoristas",
    url: "/Motoristas",
    icon: UserSquare2,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar variant="inset" collapsible="icon" {...props} className="bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-none  text-black dark:text-white ">
      <SidebarHeader>
        <Image
          src={logo}
          alt="Logo Frota Certa"
        />

      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive className="hover:bg-gray-200 dark:hover:bg-zinc-600 border-b border-zinc-300 dark:border-zinc-600">
                    <a href={item.url} className="flex items-center space-x-2 p-6">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}