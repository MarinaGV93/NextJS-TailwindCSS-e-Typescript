"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { MdCheck, MdContentCopy } from "react-icons/md";

export interface IContextCopyProps {
  title: string;
  // Copiar o link
  content: string;
  children: React.ReactNode;
}

export const ContextCopy = ({
  title,
  content,
  children,
}: IContextCopyProps) => {
  const [copied, setCopied] = useState(false);

  // Depois de um tempo, voltar a true
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  const handleCopy = () => {
    setCopied(true);
    // Copiar o content (link) para a area de transferencia
    navigator.clipboard.writeText(content);
  };

  return (
    // Envolve o dropdown
    <DropdownMenu.Root>
      {/* Ativa o dropdown. É um botão */}
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      {/* Pega o content e irá renderizar direto no body para deixar flutuante */}
      <DropdownMenu.Portal>
        {/* Dropdown */}
        <DropdownMenu.Content className="p-2 bg-paper borde border-primary rounded-lg flex flex-col gap-2 max-w-sm min-w-72">
          <span>{title}</span>

          <div className="flex items-center gap-1">
            {/* Mostrar o link */}
            <input
              readOnly
              autoFocus
              // Ao focar, selecionar o texto
              onFocus={(e) => e.target.select()}
              value={content}
              className="bg-background p-1 px-2 rounded w-full"
            />
            <button className="p-2" onClick={handleCopy}>
              {copied ? (
                <MdCheck className="text-primary" />
              ) : (
                <MdContentCopy />
              )}
            </button>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
