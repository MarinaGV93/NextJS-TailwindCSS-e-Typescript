// Imports externos
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

// Imports internos
import Header from "@/components/header/Header";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Título da aplicação
  title: "CodarSe - Os melhores cursos de programação gratuitos",
  // Descricão da aplicação
  description:
    "Os melhores cursos de programação gratuitos com a melhor experiência de aprendizado e foco",
};

interface IRootLayout
  // Extende a interface do Layout da aplicação
  extends Readonly<{
    children: React.ReactNode;
  }> {}

// Algo mais externo da aplicação
export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        {/* Header para mostrar em todas as paginas */}
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
