// Add at top
import { useState } from 'react';

// In function
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;
const indexOfLast = currentPage * itemsPerPage;
const indexOfFirst = indexOfLast - itemsPerPage;
const currentResults = results.slice(indexOfFirst, indexOfLast);

// Replace grid with
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {currentResults.map((doc) => (
    <DocumentCard key={doc.slug} {...doc} />
  ))}
</div>

<div className="mt-8 flex justify-center gap-4">
  <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 bg-cosmic-700 rounded">
    Previous
  </button>
  <button onClick={() => setCurrentPage((p) => p + 1)} disabled={indexOfLast >= results.length} className="px-4 py-2 bg-cosmic-700 rounded">
    Next
  </button>
</div>
