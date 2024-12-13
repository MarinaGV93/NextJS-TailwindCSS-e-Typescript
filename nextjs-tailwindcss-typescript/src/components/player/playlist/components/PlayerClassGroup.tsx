"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PlayerClass, IPlayerClassrProps } from "./PlayerClass";

export interface IPlayerClassGroupProps {
  position: number;
  title: string;

  // Ver a aula que está sendo reproduzida
  playingClassId: string;

  // Omitir os atributos onPlay e onCheck
  // classes: Omit<IPlayerClassrProps, "onPlay" | "onCheck">[];

  // Incluir os atributos done, playing e title
  classes: (Pick<IPlayerClassrProps, "done" | "title"> & { classId: string })[]; // Receber também o id da aula

  open: boolean;

  // Quando executar, irá abrir ou fechar o menu
  onToggle: () => void;

  onPlay: (classId: string) => void;
  onCheck: (classId: string) => void;
}

export const PlayerClassGroup = ({
  position,
  title,
  classes,
  open,
  playingClassId,
  onToggle,
  onPlay,
  onCheck,
}: IPlayerClassGroupProps) => {
  return (
    <div className="flex flex-col">
      <button
        className="flex gap-2 p-4 bg-paper items-center active:opacity-50"
        onClick={onToggle}
      >
        <div className="flex bg-background w-12 h-12 rounded-full items-center justify-center">
          {position}
        </div>

        <div className="flex flex-col flex-1 items-start">
          <span className="font-bold  text-start line-clamp-1">{title}</span>
          <span className="text-sm font-light text-start line-clamp-1">
            {/* Ve as aulas concluidas e pega o total de aulas */}
            {classes.filter((classItem) => classItem.done).length}/
            {classes.length} aulas
          </span>
        </div>

        {open ? (
          <MdKeyboardArrowDown size={28} />
        ) : (
          <MdKeyboardArrowRight size={28} />
        )}
      </button>

      <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
        {classes.map((classItem) => (
          <li key={classItem.title}>
            <PlayerClass
              // Passar todos os atributos do classItem
              {...classItem}
              // Se o id da aula for igual ao id da aula que está sendo reproduzida, ele vai ser true
              playing={classItem.classId === playingClassId}
              onPlay={() => onPlay(classItem.classId)}
              onCheck={() => onCheck(classItem.classId)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
