import { Class } from "@/app/components/course-content/components/Class";
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
        min-[880px]:max-w-[880px] px-2 flex flex-col gap-4 lg:px-0 md:flex-row-reverse"
      >
        <div
          className="
        // 1 terço
        flex-1"
        >
          <StartCourse
            idCouse="1"
            idClass="1"
            imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
          />
        </div>

        <div
          className="
        // 2 terços
        flex-[2]"
        >
          <CourseHeader />
          <Class
            title="NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
            // https://www.codarse.com/player/PL29TaWXah3iaKcSxmOa_e_bKCkS10Rsn-/UEwyOVRhV1hhaDNpYUtjU3htT2FfZV9iS0NrUzEwUnNuLS41NkI0NEY2RDEwNTU3Q0M2
            playerUrl="/player/{courseId}/{classId}"
          />

          {/* Pega o id da URL */}
          {/* {params.id} */}
        </div>
      </div>
    </main>
  );
}
