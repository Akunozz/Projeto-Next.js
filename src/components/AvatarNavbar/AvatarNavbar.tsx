import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import { Separator } from "../ui/separator"
import { CircleDollarSign, HelpCircle, LogOut, Settings, User2 } from "lucide-react"


export default function Navbar() {
    return (
        <Popover>
            <PopoverTrigger>
                <Avatar className='border-2 border-gray-500 dark:border-none'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className="bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700">
                <div className="flex space-x-4">
                    <Avatar className="border-2 border-gray-500 dark:border-none">
                        <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="flex flex-col">
                        <h1>Nome</h1>
                        <span className="text-xs text-zinc-500 dark:text-zinc-300">Admin</span>
                    </div>
                </div>

                <Separator className="mt-3 mb-3 bg-zinc-500 dark:bg-300" />
                <div className="p-2 space-y-5">
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-400">
                        <User2 size={20} />
                        <span>Perfil</span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-400">
                        <Settings size={20} />
                        <span>Configurações</span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-400">
                        <CircleDollarSign size={20} />
                        <span>Orçamento</span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-400">
                        <HelpCircle size={20} />
                        <span>FAQ</span>
                    </div>
                </div>
                <div>
                    <Separator className="mt-3 mb-3 bg-zinc-500 dark:bg-300"/>
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-400">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </div>
                </div>

            </PopoverContent>
        </Popover>
    )
}