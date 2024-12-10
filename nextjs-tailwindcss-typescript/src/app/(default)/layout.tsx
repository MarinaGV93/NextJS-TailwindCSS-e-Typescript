// Imports internos
import Header from "@/components/header/Header";

interface ILayout
  // Extende a interface do Layout da aplicação
  extends Readonly<{
    children: React.ReactNode;
  }> {}

// Algo mais externo da aplicação
export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
