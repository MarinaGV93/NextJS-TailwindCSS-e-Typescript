"use client";

// Mostrar onde um component ou algo especifico vai ser importado
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";
import { MdPlayArrow } from "react-icons/md";
// Tipo do ReactPlayer
// import type TReactPlayer from "react-player";

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
  onPlayNext: () => void;
}

export const PlayerVideoPlayer = ({
  videoId,
  onPlayNext,
}: IPlayerVideoPlayerProps) => {
  // Vai ser executado quando a aplicação for carregada
  // Irá retornar uma promise
  // const test = import("react-player").then();

  const [progress, setProgress] = useState<number | undefined>(undefined);
  const [totalDuration, setTotalDuration] = useState<number | undefined>(
    undefined
  );

  // Pegar referência do componente e solicitar para que ele devolva algumas configurações
  //   const playerRef = useRef<TReactPlayer | null>(null);

  // Pega a duração total em segundos do video
  //   const totalDuration = useMemo(
  //     () => {
  //       // Se nao tiver videoId
  //       if (!videoId) return undefined;

  //       return playerRef.current?.getDuration();
  //     },
  //     // Reexecute sempre que mudar de video
  //     [videoId]
  //   );

  const secondsUntilEnd = useMemo(() => {
    // Se nao tem duração total
    if (!totalDuration) return undefined;

    // Se nao tem progresso
    if (!progress) return undefined;

    return Number((totalDuration - progress).toFixed(0));
  }, [totalDuration, progress]);

  const showNextButton = useMemo(() => {
    // Se for um numerico e se for um numerico menor ou igual a 20
    return !!secondsUntilEnd && secondsUntilEnd <= 20;
  }, [secondsUntilEnd]);

  return (
    <>
      {showNextButton && (
        <button
          onClick={onPlayNext}
          className="absolute right-4 top-28 bg-primary p-3 px-4 rounded-lg font-bold flex gap-2 items-center"
        >
          Próxima aula em {secondsUntilEnd}
          <MdPlayArrow size={18} />
        </button>
      )}

      <ReactPlayer
        height="100%"
        width="100%"
        // Mostrar os controles de reprodução
        controls={true}
        // Comecar a reproduzir ao carregar a pagina
        playing={false}
        // Quando acabar o video
        onEnded={() => {
          onPlayNext();
        }}
        // Qual o progresso do video
        onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
        // Pegar a referência
        // onReady={(ref) => (playerRef.current = ref)}
        // Qual o tamanho total do video
        // Quando tiver informação que o video inicializou, seta o duration
        onDuration={(duration) => setTotalDuration(duration)}
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </>
  );
};
