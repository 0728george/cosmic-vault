"use client";

import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import { allDocuments } from "@/content/documents";
import { DocumentCard } from "@/components/DocumentCard";

export function SearchInterface() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(allDocuments);

  const fuse = useMemo(() => {
    return new Fuse(allDocuments, {
      keys: ["title", "author", "year", "tags", "description"],
      threshold: 0.3,
      includeScore: true,
      shouldSort: true,
    });
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults(allDocuments.slice(0, 12)); // show recent/popular on empty
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
          className="w-full px-8 py-6 text-2xl bg-cosmic-800/80 backdrop-blur-md border border-cosmic-accent/30 rounded-2xl focus:outline-none focus:border-cosmic-accent transition-all duration-300 placeholder-gray-500 text-white shadow-2xl"
          autoFocus
        />
        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-cosmic-accent text-3xl">
          ⌖
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((doc) => (
          <DocumentCard key={doc.slug} {...doc} />
        ))}
      </div>

      {results.length === 0 && query && (
        <p className="text-center text-gray-400 mt-12 text-xl">
          No documents found in this timeline. The vault is still expanding...
        </p>
      )}
    </div>
  );
}
