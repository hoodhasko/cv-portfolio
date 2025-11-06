import Link from "next/link";
import fs from "fs";
import path from "path";
import Image from "next/image";

export default async function ProjectsPage() {
  const dir = path.join(process.cwd(), "content/projects");
  const files = fs.readdirSync(dir);
  const projects = files.map((file) =>
    JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"))
  );

  return (
    <section className="max-w-4xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block p-5 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex gap-4 md:items-center mb-2">
              {p.icon ? (
                <Image
                  src={p.icon}
                  alt={p.slug}
                  width={50}
                  height={50}
                  sizes="100vw"
                  className=" rounded-xl"
                />
              ) : null}

              <h2 className="text-xl font-semibold ">{p.title}</h2>
            </div>

            <p className="text-sm text-gray-500 line-clamp-3">
              {p.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
