"use client";

import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer";

interface IStartCourseProps {
  idCouse: string;
  idClass: string;
  imageUrl: string;
}

export const StartCourse = ({
  idCouse,
  idClass,
  imageUrl,
}: IStartCourseProps) => {
  const [ref, inView] = useInView({
    // Indica a porcentagem de visibilidade que o elemento precisa estar para o inView ser alterado ou não
    threshold: 0.2,
    // já inicia com o elemento visivel
    initialInView: true,
  });

  return (
    <>
      <div ref={ref} className="p-3 bg-paper rounded-md flex flex-col gap-4">
        <Link
          href={`/player/${idCouse}/${idClass}`}
          // Pegar a imagem
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="w-full 
        // Imagem irá ocupar todo espaço que tiver disponivel
        bg-cover
        bg-no-repeat 
        // Forçar o tamanho da imagem para manter a perspectiva de um video
        aspect-video
        bg-center
        rounded
        "
        >
          {/* Ocupa 100% do tamanho do pai (Link) */}
          <div
            className="w-full h-full flex items-center justify-center rounded 
        // Sombreando ao passar o mouse
        bg-background opacity-0 hover:opacity-80 transition-opacity"
          >
            <MdPlayCircleOutline size={58} />
          </div>
        </Link>
        <Link
          href={`/player/${idCouse}/${idClass}`}
          className="bg-primary p-2 px-3 rounded text-center"
        >
          Começar curso
        </Link>
      </div>
      {/* Mostra se está ou nao na tela */}
      {/* {inView === true ? "true" : "false"} */}

      {!inView && (
        <div className="p-3 px-2 bg-paper flex flex-col gap-4 absolute left-0 right-0 top-14">
          <h1 className="font-extrabold text-xl">
            🎩 Curso de Figma para DEVs
          </h1>
          <Link
            href={`/player/${idCouse}/${idClass}`}
            className="bg-primary p-2 px-3 rounded text-center"
          >
            Começar curso
          </Link>
        </div>
      )}
    </>
  );
};
