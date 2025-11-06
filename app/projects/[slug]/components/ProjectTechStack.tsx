import { FC } from "react";

interface ProjectTechStackProps {
  stack: string[];
}

export const ProjectTechStack: FC<ProjectTechStackProps> = ({ stack }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">🧰 Стек</h2>
      <ul className="mb-6 list-disc list-inside text-gray-600">
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </>
  );
};
