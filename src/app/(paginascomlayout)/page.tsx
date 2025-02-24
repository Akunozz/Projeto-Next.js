import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl mb-5">Home page</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-4 gap-4 space-x-2">

        <div className="rounded-2xl border-2 border-zinc-400 p-4">
          <div className="flex flew-row">
            <Button className="bg-blue-500">
              <Truck />
            </Button>
            <h1 className="text-2xl ml-5 text-black dark:text-white font-extrabold">42</h1>
          </div>
          <p className="mt-2 text-zinc-600 dark:text-gray-400">Em rota</p>
          <p className="text-sm"><strong>+ 18.2% </strong>em relação a última semana</p>
        </div>

        <div className="rounded-2xl border-2 border-zinc-400 p-4">
          <div className="flex flew-row">
            <Button className="bg-blue-500">
              <Truck />
            </Button>
            <h1 className="text-2xl ml-5 text-black dark:text-white font-extrabold">42</h1>
          </div>
          <p className="mt-2 text-zinc-600 dark:text-gray-400">Em rota</p>
          <p className="text-sm"><strong>+ 18.2% </strong>em relação a última semana</p>
        </div>

        <div className="rounded-2xl border-2 border-zinc-400 p-4">
          <div className="flex flew-row">
            <Button className="bg-blue-500">
              <Truck />
            </Button>
            <h1 className="text-2xl ml-5 text-black dark:text-white font-extrabold">42</h1>
          </div>
          <p className="mt-2 text-zinc-600 dark:text-gray-400">Em rota</p>
          <p className="text-sm"><strong>+ 18.2% </strong>em relação a última semana</p>
        </div>

        <div className="rounded-2xl border-2 border-zinc-400 p-4">
          <div className="flex flew-row">
            <Button className="bg-blue-500">
              <Truck />
            </Button>
            <h1 className="text-2xl ml-5 text-black dark:text-white font-extrabold">42</h1>
          </div>
          <p className="mt-2 text-zinc-600 dark:text-gray-400">Em rota</p>
          <p className="text-sm"><strong>+ 18.2% </strong>em relação a última semana</p>
        </div>

      </div>
    </div>
  );
}
