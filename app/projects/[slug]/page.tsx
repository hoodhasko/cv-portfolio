import fs from "fs";
import path from "path";
import Image from "next/image";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/projects");
  return fs.readdirSync(dir).map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
    return { slug: data.slug };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content/projects", `${slug}.json`),
      "utf8"
    )
  );

  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="mb-6 text-gray-700">{data.description}</p>

      <h2 className="text-xl font-semibold mb-2">🧰 Стек</h2>
      <ul className="mb-6 list-disc list-inside text-gray-600">
        {data.stack.map((tech: string) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="flex gap-4 mb-8">
        {data.links.appstore && (
          <a href={data.links.appstore} className="text-blue-500 underline">
            App Store
          </a>
        )}
        {data.links.playstore && (
          <a href={data.links.playstore} className="text-green-600 underline">
            Google Play
          </a>
        )}
        {data.links.rustore && (
          <a href={data.links.rustore} className="text-orange-500 underline">
            RuStore
          </a>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4">📱 Скриншоты</h2>
      {Object.entries(data.platforms).map(([platform, images]) => (
        <div key={platform} className="mb-6">
          <h3 className="font-medium mb-2">{platform.toUpperCase()}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {(images as string[]).map((src) => (
              <Image
                key={src}
                src={src}
                alt={platform}
                width={300}
                height={600}
                className="rounded-xl border"
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
