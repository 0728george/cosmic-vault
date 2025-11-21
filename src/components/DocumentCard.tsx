import Link from 'next/link';
import { LicenseBadge } from './LicenseBadge';

interface DocumentCardProps {
  slug: string;
  title: string;
  author: string;
  year: string;
  license: string;
  description: string;
}

export function DocumentCard({ slug, title, author, year, license, description }: DocumentCardProps) {
  return (
    <Link href={`/document/${slug}`} className="block">
      <div className="group bg-black/50 backdrop-blur-sm border border-purple-900/50 rounded-xl p-6 hover:border-cyan-500/70 transition-all duration-300 hover:scale-105">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mt-1">
          {author} • {year}
        </p>
        <p className="text-gray-300 text-sm mt-3 line-clamp-3">
          {description}
        </p>
        <div className="mt-4">
          <LicenseBadge license={license} />
        </div>
      </div>
    </Link>
  );
}
