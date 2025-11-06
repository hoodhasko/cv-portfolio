import { FC } from "react";

interface ProjectHeaderProps {
  title: string;
  description: string;
}

export const ProjectHeader: FC<ProjectHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="mb-6 text-gray-700">{description}</p>
    </>
  );
};
