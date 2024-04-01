import NavBar from "@/components/NavBar"
import { ChevronDown, Utensils } from "lucide-react"

export default function Categorias() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />

      <section className="bg-slate900 rounded p-2 m-4">
        <h2 className="text-2xl font-semibold">Categorias Cadastradas</h2>
        <div id="data">
          <div className="flex justify-between " id="data-row">
            <div className="flex gap-1 items-center"></div>
            <Utensils size={20} />
            <span>Alimentação</span>
            <ChevronDown />
          </div>
        </div>
      </section>

    </main>
  );
}
