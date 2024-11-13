import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

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
  return (
    <div className="p-3 bg-paper rounded-md flex flex-col gap-4">
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
  );
};
