import { Metadata } from "next";
import { Card } from "./components/card/Card";

export const metadata: Metadata = {
  title: "CodarSe - Página Inicial",
};

export default function PageHome() {
  return (
    <main
      // Usar a cor criada no arquivo tailwind.config
      className="bg-background"
    >
      <Card />
    </main>
  );
  // Adicionar atributo
  // document.documentElement.setAttribute("light", "true");
  // Remover atributo
  // document.documentElement.removeAttribute("light");
}
