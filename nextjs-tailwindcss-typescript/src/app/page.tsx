export default function PageHome() {
  return (
    <main
      // Usar a cor criada no arquivo tailwind.config
      className="bg-background"
    >
      Home
    </main>
  );
  // Adicionar atributo
  document.documentElement.setAttribute("light", "true");
  // Remover atributo
  document.documentElement.removeAttribute("light");
}
