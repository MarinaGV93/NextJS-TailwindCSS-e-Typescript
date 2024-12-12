"use client";

import { PlayerClassGroup, PlayerHeader } from "@/components/player";

interface Props {
  params: {
    courseId: string;
    classId: string;
  };
}

export default function PagePlayer(/*{ params: { courseId, classId } }: Props*/) {
  return (
    <main className="flex flex-col gap-20">
      <PlayerHeader
        title="API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias
          usadas e muito mais"
        subtitle="🏆 Curso de API Rest, Node e Typescript"
      />
      {/* Player {courseId} {classId} */}
      <PlayerClassGroup
        open={false}
        position={1}
        title="Introdução e apresentação do projeto"
        onToggle={() => console.log("Toggle")}
        classes={[
          {
            done: true,
            playing: false,
            title:
              "API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais",
          },
          {
            done: false,
            playing: true,
            title:
              "API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais",
          },
          {
            done: true,
            playing: false,
            title:
              "API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais",
          },
          {
            done: false,
            playing: true,
            title:
              "API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais",
          },
        ]}
      />
    </main>
  );
}
