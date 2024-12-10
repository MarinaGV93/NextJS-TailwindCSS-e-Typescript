"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Card, ICardProps } from "../card/Card";
import { useRef, useState, UIEvent } from "react";

interface ISectionProps {
  title: string;
  variant: "grid" | "h-list";
  items: // Receber os itens do card
  ICardProps[];
}
export const Section = ({ title, items, variant = "grid" }: ISectionProps) => {
  // Referencia para o scroll
  const scrollRef = useRef<HTMLUListElement>(null);

  // Acompanhar o scroll
  const [scrollAt, setScrollAt] = useState<"start" | "middle" | "end">("start");

  // Saber a posicao do scroll (escutar o movimento do scroll dentro do UL)
  const handleScroll =
    // Evento do e do onScroll no UL
    (event: UIEvent<HTMLUListElement>) => {
      // console.log(
      //   // Analisar o tamanho disponivel total do scroll
      //   event.currentTarget.scrollWidth,
      //   // Analisar o tamanho do scroll disponivel
      //   event.currentTarget.clientWidth,
      //   // Analisar em que posicao o scroll se encontra
      //   event.currentTarget.scrollLeft
      // );

      // Se tiver no comeco do scroll
      if (event.currentTarget.scrollLeft === 0) {
        setScrollAt("start");
      }

      // Se tiver no final do scroll
      else if (
        // Tamanho total do scroll - tamanho disponivel = valor total do scroll quando estiver no final
        event.currentTarget.scrollWidth - event.currentTarget.clientWidth ===
        event.currentTarget.scrollLeft
      ) {
        setScrollAt("end");
      } else {
        setScrollAt("middle");
      }
    };

  // Definir o scroll
  const handleSetScroll = (scroll: number) => {
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
        onScroll={
          // (e) =>

          // Colocar no handleScroll
          // UIEvent<HTMLUListElement>
          handleScroll
        }
        className="
        // Nome da classe
        overflow-primary 
        // Definir o grid
        grid 
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
        {/* Quando nao for GRID */}
        {variant === "h-list" && (
          <button
            // Desabilitar o botão se o scroll estiver no inicio
            disabled={scrollAt === "start"}
            onClick={() => handleSetScroll(-350)}
            className="h-14 w-14 bg-primary rounded-full 
            // Esconder por padrao
            hidden
            // Se nao for mobile
            sm:flex justify-center items-center sticky my-auto left-0 -ml-14 transition-opacity 
            // Mostrar um pouco
            active: opacity-80
          // Se desabilitado, esconder
          disabled:opacity-0 
          "
          >
            <MdKeyboardArrowLeft size={32} />
          </button>
        )}

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

        {/* Quando nao for GRID */}
        {variant === "h-list" && (
          <button
            // Desabilitar o botão se o scroll estiver no fim
            disabled={scrollAt === "end"}
            onClick={() => handleSetScroll(350)}
            className="h-14 w-14 bg-primary rounded-full 
            // Esconder por padrao
            hidden
            // Se nao for mobile
            sm:flex justify-center items-center sticky my-auto right-0 -ml-14 transition-opacity 
            // Mostrar um pouco
            active: opacity-80
          // Se desabilitado, esconder
          disabled:opacity-0 
          "
          >
            <MdKeyboardArrowRight size={32} />
          </button>
        )}
      </ul>
    </section>
  );
};
