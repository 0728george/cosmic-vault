'use client';

import { useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import { documents } from '@/data/documents';
import { DocumentCard } from './DocumentCard';

export function SearchInterface() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(documents);

  const fuse = useMemo(() => new Fuse(documents, {
    keys: ['title', 'author', 'year', 'description'],
    threshold: 0.3,
  }), []);

  useEffect(() => {
    if (query.trim() === '') {
      setResults(documents);
    } else {
      const fuseResults = fuse.search(query);
      setResults(fuseResults.map((r) => r.item));
    }
  }, [query, fuse]);

  return (
    <div className="w-full max-w-4xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the vault for eternal knowledge..."
          className="w-full px-8 py-6 text-2xl bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder-gray-500 text-white shadow-2xl"
          autoFocus
        />
        <span className="absolute left-8 top-1/2 -translate-y-1/2 text-cyan-500 text-3xl">
          ⌖
        </span>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((doc) => (
          <DocumentCard key={doc.slug} {...doc} />
        ))}
      </div>
      {results.length === 0 && query && (
        <p className="text-center text-gray-400 mt-12 text-xl">
          No documents found. The vault is expanding...
        </p>
      )}
    </div>
  );
}
