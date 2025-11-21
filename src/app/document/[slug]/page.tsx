import { documents } from '@/data/documents';
import { notFound } from 'next/navigation';
import { LicenseBadge } from '@/components/LicenseBadge';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DocumentPage({ params }: Props) {
  const { slug } = await params;
  const doc = documents.find((d) => d.slug === slug);
  if (!doc) notFound();

  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
      <article className="bg-cosmic-800/50 backdrop-blur-md rounded-2xl p-10 border border-cosmic-700/50">
        <h1 className="text-5xl font-bold mb-4">{doc.title}</h1>
        <p className="text-2xl text-gray-300 mb-6">{doc.author} • {doc.year}</p>
        <div className="flex gap-4 mb-8">
          <LicenseBadge license={doc.license} />
          <Link href={doc.source} target="_blank" className="text-cosmic-accent hover:underline">
            Original Source →
          </Link>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed mb-10">{doc.description}</p>
        <a
          href={doc.file}
          download
          className="inline-block px-8 py-4 bg-cosmic-accent text-black font-bold rounded-xl hover:bg-cosmic-teal transition-all"
        >
          Download PDF
        </a>
      </article>
    </div>
  );
}
