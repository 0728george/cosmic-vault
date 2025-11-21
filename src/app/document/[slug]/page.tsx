import { documents } from '@/data/documents';
import { notFound } from 'next/navigation';
import { LicenseBadge } from '@/components/LicenseBadge';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export default function DocumentPage({ params }: Props) {
  const doc = documents.find((d) => d.slug === params.slug);
  if (!doc) notFound();

  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
      <article className="bg-black/50 backdrop-blur-md rounded-2xl p-10 border border-purple-900/50">
        <h1 className="text-5xl font-bold mb-4">{doc.title}</h1>
        <p className="text-2xl text-gray-300 mb-6">{doc.author} • {doc.year}</p>
        <div className="flex gap-4 mb-8 flex-wrap">
          <LicenseBadge license={doc.license} />
          <Link href={doc.source} target="_blank" className="text-cyan-500 hover:underline">
            Original Source →
          </Link>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed mb-10">{doc.description}</p>
        <a
          href={doc.file}
          download
          className="inline-block px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-teal-400 transition-all"
        >
          Download PDF
        </a>
      </article>
    </div>
  );
}
