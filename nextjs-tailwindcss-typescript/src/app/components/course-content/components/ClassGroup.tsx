"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Class } from "./Class";
import { useState } from "react";

interface IClassGroupProps {
  title: string;
  courseId: string;
  classes: {
    // Lista de aulas
    id: string;
    title: string;
  }[];
}

export const ClassGroup = ({ title, courseId, classes }: IClassGroupProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-6 p-4 bg-paper"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <MdKeyboardArrowDown size={24} />
        ) : (
          <MdKeyboardArrowRight size={24} />
        )}
        {title}
      </button>

      <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
        {/* Renderizando uma lista de aulas */}
        {classes.map(
          ({
            // Desistruturando o class
            id,
            title,
          }) => (
            <li key={id}>
              <Class title={title} playerUrl={`/cursos/${courseId}/${id}`} />
            </li>
          )
        )}
      </ol>
    </>
  );
};
