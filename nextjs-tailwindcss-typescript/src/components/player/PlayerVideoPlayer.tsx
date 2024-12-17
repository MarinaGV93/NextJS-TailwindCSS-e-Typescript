"use client";

// Mostrar onde um component ou algo especifico vai ser importado
import dynamic from "next/dynamic";

// Importar dinamicamente
const ReactPlayer = dynamic(
  () =>
    // Importar o react player
    import("react-player"),
  // Pode passar opções
  // Se o import irá acontecer no servidor
  { ssr: false }
);

// import ReactPlayer from "react-player";

interface IPlayerVideoPlayerProps {
  videoId: string;
}

export const PlayerVideoPlayer = ({ videoId }: IPlayerVideoPlayerProps) => {
  // Vai ser executado quando a aplicação for carregada
  // Irá retornar uma promise
  // const test = import("react-player").then();

  return (
    <>
      <ReactPlayer
        height="100%"
        width="100%"
        // Mostrar os controles de reprodução
        controls={true}
        // Comecar a reproduzir ao carregar a pagina
        playing={true}
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </>
  );
};
