"use client";

import Image from "next/image";
import { FC, useState } from "react";

interface ProjectGalleryProps {
  platforms: Record<string, string[]>;
}

export const ProjectGallery: FC<ProjectGalleryProps> = ({ platforms }) => {
  const platformKeys = Object.keys(platforms || {});
  const [activePlatform, setActivePlatform] = useState(platformKeys[0] || "");

  if (platformKeys.length === 0) {
    return <p className="text-gray-500 italic">Нет доступных скриншотов</p>;
  }

  const activeImages = platforms[activePlatform] || [];

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">📱 Скриншоты</h2>

      {platformKeys.length > 1 && (
        <div className="flex gap-2 mb-4">
          {platformKeys.map((platform) => (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`px-4 py-2 rounded-xl border transition ${
                activePlatform === platform
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {platform.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {activeImages.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {activeImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`${activePlatform} screenshot`}
              width={300}
              height={600}
              className="rounded-xl border shadow-sm"
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">
          Нет скриншотов для платформы {activePlatform.toUpperCase()}
        </p>
      )}
    </>
  );
};
