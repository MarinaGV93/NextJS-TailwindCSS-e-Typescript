// Componente que funciona só como use client
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function Header() {
  // Pega o path atual
  const currentPath = usePathname();

  return (
    <nav className="flex items-center justify-center bg-primary py-4">
      <ul className="flex gap-4 items-center">
        <li className="my-2">
          <Link href="/" className="border-2 rounded-md py-2 px-1 font-bold">
            CODARSE
          </Link>
        </li>
        <li>
          {/* Link = navega sem fazer reload da aplicação */}
          <Link
            href="/"
            data-active={currentPath === "/"}
            // Se o active for true, adiciona o underline
            className="data-[active=true]:underline"
          >
            Página Inicial
          </Link>
        </li>
        <li>
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            // Se o active for true, adiciona o underline
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li>
          <Link
            href="https://blog.codarse.com"
            target="_blank"
            className="flex gap-1 items-center"
          >
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
