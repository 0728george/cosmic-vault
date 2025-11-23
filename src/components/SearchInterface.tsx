"use client";

import { useState } from "react";
import { DocumentCard } from "./DocumentCard";
import type { Document } from "@/types/document";

interface SearchInterfaceProps {
  initialDocuments: Document[];
}

export function SearchInterface({ initialDocuments }: SearchInterfaceProps) {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 12;

  // Filter documents based on search query
  const filteredDocuments = initialDocuments.filter(
    (doc) =>
      doc.title.toLowerCase().includes(query.toLowerCase()) ||
      doc.description.toLowerCase().includes(query.toLowerCase()) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  // Pagination logic
  const indexOfLast = currentPage * documentsPerPage;
  const indexOfFirst = indexOfLast - documentsPerPage;
  const currentResults = filteredDocuments.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Search Input */}
      <div className="mb-12">
        <input
          type="text"
          placeholder="Search documents by title, description or tags..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
          className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-cosmic-500/30"
        />
      </div>

      {/* Results Count */}
      {query && (
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Found {filteredDocuments.length} result{filteredDocuments.length !== 1 ? "s" : ""}{" "}
          {query && `for "${query}"`}
        </p>
      )}

      {/* Documents Grid */}
      {currentResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentResults.map((doc) => (
            <DocumentCard key={doc.slug} {...doc} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500 dark:text-gray-400">
            {query ? "No documents found matching your search." : "No documents available."}
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-cosmic-700 text-white rounded-lg hover:bg-cosmic-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          <span className="text-lg">
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-cosmic-700 text-white rounded-lg hover:bg-cosmic-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
