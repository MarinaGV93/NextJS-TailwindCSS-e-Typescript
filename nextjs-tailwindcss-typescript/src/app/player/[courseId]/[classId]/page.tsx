export interface Props {
  params: {
    courseId: string;
    classId: string;
  };
}

export default function PagePlayer({ params: { courseId, classId } }: Props) {
  return (
    <div>
      <h1>
        Player {courseId} {classId}
      </h1>
    </div>
  );
}
