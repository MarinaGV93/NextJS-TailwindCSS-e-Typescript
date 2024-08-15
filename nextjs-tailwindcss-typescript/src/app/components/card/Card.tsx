import Image from "next/image";
import Link from "next/link";

interface ICardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export const Card = ({ title, description, href, image }: ICardProps) => {
  return (
    <Link href="/cursos/aaaaa" className="hover:no-underline ">
      <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
        {/* 
      Usando API do youtube 
      https://developers.google.com/youtube/v3/docs/playlists/list?hl=pt-br
      e a parte 'APIs Explorer'
      */}
        <Image
          src={image}
          width={1000}
          height={0}
          alt={title}
          // Não deixar que arraste a imagem
          draggable={false}
          className="
        // Sempre especifica
        aspect-video
        // Resolver a distorçao, mantendo a perspectiva da imagem 
        object-cover
        rounded-3xl
        "
        />
        <h4 className="font-extrabold text-lg">{title}</h4>
        <p
          className="
        // Máxima de 3 linhas
        line-clamp-3
        "
        >
          {description}
        </p>
      </article>
    </Link>
  );
};
