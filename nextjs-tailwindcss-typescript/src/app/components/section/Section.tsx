import { Card, ICardProps } from "../card/Card";

interface ISectionProps {
  title: string;
  variant: "grid" | "h-list";
  items: // Receber os itens do card
  ICardProps[];
}
export const Section = ({ title, items, variant = "grid" }: ISectionProps) => {
  return (
    <section className="flex flex-col gap-2 px-4">
      <h2 className="font-bold text-xl">{title}</h2>

      <ul
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
      </ul>
    </section>
  );
};
