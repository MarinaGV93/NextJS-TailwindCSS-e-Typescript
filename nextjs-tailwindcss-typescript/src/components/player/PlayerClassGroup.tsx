import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PlayerClass, IPlayerClassrProps } from "./PlayerClass";

interface IPlayerClassGroupProps {
  position: number;
  title: string;

  // Omitir os atributos onPlay e onCheck
  classes: Omit<IPlayerClassrProps, "onPlay" | "onCheck">[];

  // Incluir os atributos done, playing e title
  // classes: Pick<IPlayerClassrProps, 'done' | 'playing' | 'title'>[];

  open: boolean;

  // Quando executar, irá abrir ou fechar o menu
  onToggle: () => void;
}

export const PlayerClassGroup = ({
  position,
  title,
  classes,
  open,
  onToggle,
}: IPlayerClassGroupProps) => {
  return (
    <div className="flex flex-col">
      <button className="flex gap-2 p-4 bg-paper items-center" onClick={onToggle}>
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
              onPlay={() => console.log("play")}
              onCheck={() => console.log("check")}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
