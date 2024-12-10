import { ClassGroup, IClassGroupProps } from "./ClassGroup";

export interface ICourseContentProps {
  // Lista de aulas
  classGroups: IClassGroupProps[];
}

export const CourseContent = ({ classGroups }: ICourseContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-extrabold">Conteúdo do curso</h2>
      <ol
        className="flex flex-col rounded-lg 
    // Ignorar tudo que estiver fora do ol
      overflow-clip"
      >
        {classGroups.map((classGroup) => (
          <li key={classGroup.title} className="flex flex-col">
            <ClassGroup
              //   Chamando o classGroup
              {...classGroup}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
