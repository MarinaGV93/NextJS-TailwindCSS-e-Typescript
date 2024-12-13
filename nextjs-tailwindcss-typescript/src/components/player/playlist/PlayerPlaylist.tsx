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
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(undefined);

  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col p-4 bg-paper">
        <h3 className="text-lg font-bold">Conteúdo do curso</h3>
      </div>

      <ol>
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
