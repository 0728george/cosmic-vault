export function LicenseBadge({ license }: { license: string }) {
  const badges: Record<string, { text: string; color: string }> = {
    "PD": { text: "Public Domain", color: "bg-teal-900/60 border-teal-600" },
    "CC0": { text: "CC0", color: "bg-blue-900/60 border-blue-600" },
    "CC-BY": { text: "CC-BY", color: "bg-purple-900/60 border-purple-600" },
    "CC-BY-SA": { text: "CC-BY-SA", color: "bg-orange-900/60 border-orange-600" },
  };

  const badge = badges[license] || badges["PD"];

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${badge.color} text-white`}>
      {badge.text}
    </span>
  );
}
