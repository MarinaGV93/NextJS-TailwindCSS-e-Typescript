// Componente que funciona só como use client
"use client";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  // Forçar a atualização
  const [title, setTitle] = useState("CodarSe");

  // Pega o path atual
  const currentPath = usePathname();

  useEffect(
    () => {
      setTitle(document.title);
    },
    // Dispara um fluxo de atualização quando o path atual muda
    [currentPath]
  );

  // Configurar primeiro para mobile e depois para demais telas
  return (
    // Breakpoints

    /* sm = Mínimo de 640px
    md = Mínimo de 768px
    lg = Mínimo de 1024px
    xl = Mínimo de 1280px
    2xl = Mínimo de 1536px */
    <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-8">
      <button
        // Botão some depois de 768px
        className="sm:hidden"
      >
        <MdMenu size={24} />
      </button>

      <ul className="flex gap-4 items-center">
        <li className="my-2">
          <Link href="/" className="border-2 rounded-md py-2 px-1 font-bold">
            CODARSE
          </Link>
        </li>

        <li className="hidden sm:block">
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

        <li className="hidden sm:block">
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            // Se o active for true, adiciona o underline
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>

        <li className="hidden sm:block">
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

      <h1 className="sm:hidden">
        {/* Pegar o titulo da pagina inicial */}
        {/* {document.title} */}
        {title}
      </h1>
    </nav>
  );
}