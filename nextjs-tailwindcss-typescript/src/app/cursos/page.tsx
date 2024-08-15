import { Metadata } from "next";
import { Section } from "../components/section/Section";

export const metadata: Metadata = {
  title: "CodarSe - Todos os Cursos",
};

export default function PageCursos() {
  return (
    <main>
      <Section title="Todos os Cursos" variant="grid" />
    </main>
  );
}
