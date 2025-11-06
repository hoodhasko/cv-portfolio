import fs from "fs";
import path from "path";
import {
  ProjectGallery,
  ProjectHeader,
  ProjectJobsList,
  ProjectMarkets,
  ProjectTechStack,
} from "./components";

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
    <main className="max-w-3xl mx-auto px-4 py-8">
      <ProjectHeader title={data.title} description={data.description} />
      <ProjectTechStack stack={data.stack} />
      <ProjectJobsList works={data.works} />
      <ProjectMarkets links={data.links} />
      <ProjectGallery platforms={data.platforms} />
    </main>
  );
}
