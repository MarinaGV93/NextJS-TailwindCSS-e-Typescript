"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Card, ICardProps } from "../card/Card";
import { useRef } from "react";

interface ISectionProps {
  title: string;
  variant: "grid" | "h-list";
  items: // Receber os itens do card
  ICardProps[];
}
export const Section = ({ title, items, variant = "grid" }: ISectionProps) => {
  // Referencia para o scroll
  const scrollRef = useRef<HTMLUListElement>(null);

  const handleScroll = (scroll: number) => {
    const currentScrollLeft =
      // Pegar a posicao do scroll atual
      scrollRef.current?.scrollLeft || 0;

    scrollRef.current?.scrollTo({
      // Suave
      behavior: "smooth",
      // Passar a nova posicao somando a antiga e a nova
      left: currentScrollLeft + scroll,
    });
  };

  return (
    <section className="flex flex-col gap-2 px-4">
      <h2 className="font-bold text-xl">{title}</h2>

      <ul
        ref={scrollRef}
        data-variant={variant}
        className="grid 
      // 1 coluna
      grid-cols-1

      sm:grid-cols-none

      // Quando a variant for grid
      data-[variant=grid]:sm:grid-cols-2
      data-[variant=grid]:md:grid-cols-3 
      gap-2

      // Modifica como as colunas vao se comportar
      data-[variant=h-list]:sm:grid-flow-col

      // Permitir que consiga colocar o scroll na parte de baixo
      data-[variant=h-list]:sm:overflow-x-auto
      "
      >
        <button
          onClick={() => handleScroll(-350)}
          className="h-14 w-14 bg-primary rounded-full flex justify-center items-center sticky my-auto left-0 -ml-14"
        >
          <MdKeyboardArrowLeft size={32} />
        </button>

        {/* Cada item do card */}
        {items.map((item) => (
          <li
            // Cada item terá uma chave
            key={item.title}
            data-variant={variant}
            className="w-full data-[variant=h-list]:sm:w-72"
          >
            <Card
              href={item.href}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </li>
        ))}

        <button
          onClick={() => handleScroll(350)}
          className="h-14 w-14 bg-primary rounded-full flex justify-center items-center sticky my-auto right-0 -ml-14"
        >
          <MdKeyboardArrowRight size={32} />
        </button>
      </ul>
    </section>
  );
};
