import { Metadata } from "next";
import { Section } from "./components/section/Section";

export const metadata: Metadata = {
  title: "CodarSe - Página Inicial",
};

export default function PageHome() {
  return (
    <main
      // Usar a cor criada no arquivo tailwind.config
      className="bg-background"
    >
      <Section title="Veja mais cursos" variant="h-list" />
    </main>
  );
  // Adicionar atributo
  // document.documentElement.setAttribute("light", "true");
  // Remover atributo
  // document.documentElement.removeAttribute("light");
}
