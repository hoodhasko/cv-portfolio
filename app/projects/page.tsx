import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function ProjectsPage() {
  const dir = path.join(process.cwd(), "content/projects");
  const files = fs.readdirSync(dir);
  const projects = files.map((file) =>
    JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"))
  );

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Мои проекты</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block p-5 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-sm text-gray-500 line-clamp-3">
              {p.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
