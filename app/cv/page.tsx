import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";

const components = {
  a: (props: any) => {
    const isInternal = props.href?.startsWith("/");
    if (isInternal) return <Link href={props.href}>{props.children}</Link>;
    return <a {...props} target="_blank" rel="noopener noreferrer" />;
  },
};

export default async function CVPage() {
  const source = fs.readFileSync(
    path.join(process.cwd(), "content/cv.md"),
    "utf8"
  );

  return (
    <main className="max-w-3xl mx-auto prose prose-neutral">
      <MDXRemote
        source={source}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        components={components}
      />
    </main>
  );
}
