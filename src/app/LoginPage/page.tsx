import Image from "next/image"
import FormularioLogin from "@/components/FormularioLogin/FormularioLogin"
import logo from "../../../public/logo-appelsoft.png"
import frotacerta from "../../../public/logo-frota-certa.png"
import Link from "next/link"

export default function LoginPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-[2fr_1fr]">
            <div className="relative hidden bg-blue-400 dark:bg-blue-950 lg:flex justify-center items-center">
                <Image
                    src={frotacerta}
                    alt="frota certa"
                />
            </div>

            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-medium">
                        <div className="flex items-center justify-center rounded-md text-primary-foreground">
                            <Image
                                src={logo}
                                alt="logo Appelsoft"
                                width={300}
                            />
                            
                        </div>

                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <FormularioLogin />
                    </div>
                </div>
            </div>

        </div>
    )
}
