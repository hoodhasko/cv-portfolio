import { FC } from "react";

interface ProjectMarketsProps {
  links: { appstore?: string; playstore?: string; rustore?: string };
}

export const ProjectMarkets: FC<ProjectMarketsProps> = ({ links }) => {
  const hasLinks = links.appstore || links.playstore || links.rustore;
  if (!hasLinks) return null;

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">🏬 Маркеты</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {links.appstore && (
          <a
            href={links.appstore}
            target="_blank"
            className="text-blue-500 underline hover:text-blue-700"
          >
            App Store
          </a>
        )}
        {links.playstore && (
          <a
            href={links.playstore}
            target="_blank"
            className="text-green-600 underline hover:text-green-800"
          >
            Google Play
          </a>
        )}
        {links.rustore && (
          <a
            href={links.rustore}
            target="_blank"
            className="text-orange-500 underline hover:text-orange-700"
          >
            RuStore
          </a>
        )}
      </div>
    </>
  );
};
