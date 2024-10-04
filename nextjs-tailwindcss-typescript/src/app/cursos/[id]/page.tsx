import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

// Rota dinamica
export async function generateMetadata({ params }: Props): // Nao é obrigatorio
Promise<Metadata> {
  // Na API do youtube, pega os dados necessario

  return {
    // Título dinamico
    title: params.id,
  };
}

export default function PageDetalheCurso({ params }: Props) {
  return (
    <main className="mt-8 flex justify-center">
      Detalhe do curso
      {/* Pega o id da URL */}
      {params.id}
    </main>
  );
}
