import { allDocuments } from "contentlayer/generated";
import { notFound } from "next/dist/server/web/exports/not-found";
import { LicenseBadge } from "@/components/LicenseBadge";
import Link from "next/link";

export const generateStaticParams = async () => allDocuments.map((doc) => ({ slug: doc.slug }));

export default function DocumentPage({ params }: { params: { slug: string } }) {
  const doc = allDocuments.find((d) => d.slug === params.slug);

  if (!doc) notFound();

  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
      <article className="bg-cosmic-800/50 backdrop-blur-md rounded-2xl p-10 border border-cosmic-700/50">
        <h1 className="text-5xl font-bold mb-4">{doc.title}</h1>
        <p className="text-2xl text-gray-300 mb-6">
          {doc.author} • {doc.year}
        </p>
        <div className="flex gap-4 mb-8">
          <LicenseBadge license={doc.license} />
          <Link
            href={doc.source}
            target="_blank"
            className="text-cosmic-accent hover:underline"
          >
            Original Source →
          </Link>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed mb-10">{doc.description}</p>

        <div className="border-t border-cosmic-700/50 pt-10">
          <a
            href={doc.file}
            download
            className="inline-block px-8 py-4 bg-cosmic-accent text-black font-bold rounded-xl hover:bg-cosmic-teal transition-all"
          >
            Download PDF
          </a>
        </div>
      </article>
    </div>
  );
}
