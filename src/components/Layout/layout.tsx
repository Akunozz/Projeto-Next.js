"use client"

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";

import { ThemeButton } from "../ui/themeButton"
import { ThemeProvider } from "@/Provider/theme-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/LoginPage") {
    return ( 
  <>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" md:w-2/3 lg:bg-blue-400 lg:dark:bg-blue-950">
          <ThemeButton className=" border-2 border-zinc-300 dark:border-zinc-700" />
          </div>
          {children}
          </ThemeProvider>
          </>
        );
  }

        return <Navbar>{children}</Navbar>;
}
