"use client";

import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { ContextCopy } from "./components/ContextCopy";

export interface ICourseHeaderProps {
  title: string;
  description: string;
  numberOfClasses: number;
}

export const CourseHeader = ({
  title,
  description,
  numberOfClasses,
}: ICourseHeaderProps) => {
  return (
    <div
      className="
    // Auto layout no Figma
    flex 
    flex-col gap-2 
    "
    >
      <h1 className="font-extrabold text-xl">{title}</h1>

      <CollapsibleText
        // Numero de linhas para mostrar quando o componente estiver minimizado
        numberOfLinesWhenClosed={3}
      >
        {description}
      </CollapsibleText>

      <div className="flex gap-2 items-center">
        <ContextCopy title="Copie o link abaixo" content={window.location.href}>
          <button className="py-2 px-4 bg-paper rounded-full flex gap-2 items-center">
            <MdShare />
            Compartilhar
          </button>
        </ContextCopy>
        <span>{numberOfClasses} aulas</span>
      </div>
    </div>
  );
};
