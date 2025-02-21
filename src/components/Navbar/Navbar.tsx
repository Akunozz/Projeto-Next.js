import { cookies } from "next/headers"
import logo from '../../../public/logo-appelsoft.png'
import Image from "next/image"
import AvatarNavbar from '../AvatarNavbar/AvatarNavbar'
import { AppSidebar } from "@/components/SideBar/Sidebar"
import { ThemeProvider } from "@/Provider/theme-provider";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { ThemeButton } from "../ui/themeButton"
import { ToasterProvider } from "@/Provider/toaster-provider";


export default async function Navbar({ children }: Readonly<{ children: React.ReactNode }>) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider
                defaultOpen={defaultOpen}>
                <AppSidebar />
                <SidebarInset>
                        <header className="p-4">
                            <div className="flex justify-center items-center w-full p-4 border-2 border-zinc-400 dark:border-none bg-white dark:bg-zinc-700 text-black dark:text-white rounded-lg">
                                <div className="flex flex=row space-x-2">
                                    <SidebarTrigger className="border-2 border-zinc-300 dark:border-zinc-700" />
                                    <ThemeButton className="border-2 border-zinc-300 dark:border-zinc-700" />
                                </div>
                                <Image
                                    src={logo}
                                    alt="Logo Frota Certa"
                                    className="flex p-2 mx-auto w-44"
                                />
                                <AvatarNavbar />
                            </div>
                        </header>
                    <main className="p-4">
                        <ToasterProvider />
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}

<div className="flex justify-center items-center w-full p-4 border-2 border-zinc-400 dark:border-none bg-white dark:bg-zinc-700 text-black dark:text-white rounded-lg">

    <Image
        src={logo}
        alt="Logo Frota Certa"
        className="flex p-2 mx-auto w-44"
    />
    <AvatarNavbar />
</div>