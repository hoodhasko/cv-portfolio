import { FC } from "react";

interface ProjectJobsListProps {
  works: string;
}

export const ProjectJobsList: FC<ProjectJobsListProps> = ({ works }) => {
  if (!works.length) return null;

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">✅ Задачи</h2>
      <ul className="mb-6 list-disc list-inside text-gray-600">
        {works.split(".").map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>
    </>
  );
};
