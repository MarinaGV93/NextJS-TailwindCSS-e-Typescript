import { CourseHeader } from "@/app/components/course-header/CourseHeader";
import { StartCourse } from "@/app/components/StartCourse";
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
      <div
        className="
        // Tamanho total
        w-full
        // Se a tela for pelo menos 880px, irá limitar o tamanho em 880px
        min-[880px]:max-w-[880px] px-2 flex flex-col gap-4
        "
      >
        <StartCourse
          idCouse="1"
          idClass="1"
          imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
        />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        {/* Pega o id da URL */}
        {/* {params.id} */}
      </div>
    </main>
  );
}
