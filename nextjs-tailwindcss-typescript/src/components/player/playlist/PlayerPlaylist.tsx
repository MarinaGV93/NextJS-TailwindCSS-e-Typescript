"use client";

import { useState } from "react";
import {
  IPlayerClassGroupProps,
  PlayerClassGroup,
} from "./components/PlayerClassGroup";
import { useRouter } from "next/navigation";

interface IPlayerPlaylistProps {
  classGroups: Pick<IPlayerClassGroupProps, "title" | "classes">[];
  playingClassId: string;
  playingCourseId: string;
}

export const PlayerPlaylist = ({
  classGroups,
  playingClassId,
  playingCourseId,
}: IPlayerPlaylistProps) => {
  // Aceita numero ou undefined
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(
    // Quando inicializar o componente, verificar qual id da aula está sendo executado, compara na playlist, para saber qual modulo precisa ser aberto por padrao
    classGroups
      // Procura o index
      .findIndex((classGroup) =>
        // Retorna true no 1º item
        // true

        // Analisa quais das classes tem a condição true e irá receber true no some que significa que o classGroup tem a condição verdadeira
        classGroup.classes.some(
          (classItem) => classItem.classId === playingClassId
        )
      )
  );

  const router = useRouter();

  return (
    // h-full irá ocupar todo espaço disponivel na tela
    <div className="flex flex-col gap-2 h-full">
      <div className="flex flex-col p-4 bg-paper">
        <h3 className="text-lg font-bold">Conteúdo do curso</h3>
      </div>

      {/* Overflow- auto é para o scroll */}
      <ol className="overflow-auto overflow-primary">
        {classGroups.map((classGroup, index) => (
          <li key={classGroup.title}>
            <PlayerClassGroup
              {...classGroup}
              playingClassId={playingClassId}
              // Adicionando o position automaticamente começando em 1
              position={index + 1}
              // Se o openedIndex for igual ao index, ele vai ser true
              open={openedIndex === index}
              onToggle={() =>
                // Se o openedIndex for igual ao index, ele vai ser undefined, se não, ele vai ser o index
                setOpenedIndex(openedIndex === index ? undefined : index)
              }
              onPlay={(classId) => {
                // Pegar id da aula
                // console.log("play", classId);

                // Navegação para a aula
                router.push(`/player/${playingCourseId}/${classId}`);
              }}
              onCheck={(classId) => {
                // Altera o localStorage falando que a aula foi concluida
                console.log("check", classId);
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
