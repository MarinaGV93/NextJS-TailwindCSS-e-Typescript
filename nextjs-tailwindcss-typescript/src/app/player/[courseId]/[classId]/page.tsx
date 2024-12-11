"use client";

import { PlayerClass, PlayerHeader } from "@/components/player";

export interface Props {
  params: {
    courseId: string;
    classId: string;
  };
}

export default function PagePlayer({ params: { 
  courseId, classId } }: Props) {
  return (
    <>
      <PlayerHeader
        title="API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias
          usadas e muito mais"
        subtitle="🏆 Curso de API Rest, Node e Typescript"
      />
      Player {courseId} {classId}
      <PlayerClass
        title="API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais"
        playing
        done={false}
        onPlay={() => console.log("play")}
        onCheck={() => console.log("check")}
      />
    </>
  );
}
