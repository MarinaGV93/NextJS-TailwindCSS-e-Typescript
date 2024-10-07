"use client";

import { useState } from "react";

interface ICollapsibleTextProps {
  numberOfLinesWhenClosed: number;
  children: React.ReactNode;
}

export const CollapsibleText = ({
  children,
  numberOfLinesWhenClosed,
}: ICollapsibleTextProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-end">
      <p
        data-open={open}
        style={
          {
            // Criar variavel
            "--number-of-lines-when-closed": numberOfLinesWhenClosed,
          } as React.CSSProperties
        }
        className="
        // Se o open for false
        // Controlar quando esta aplicado e quando nao esta
        data-[open='false']:line-clamp-[var(--number-of-lines-when-closed)]"
      >
        {children}
      </p>

      {/* Ver mais */}
      <button
        data-open={open}
        className="px-1 bg-paper rounded border border-primary 
        // Quando tiver fechado, colocar sobreposto
        data-[open='false']:-mt-7"
        onClick={() => setOpen(!open)}
      >
        {open ? "Ver menos" : "Ver mais"}
      </button>
    </div>
  );
};
