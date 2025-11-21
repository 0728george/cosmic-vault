interface LicenseBadgeProps {
  license: string;
}

export function LicenseBadge({ license }: LicenseBadgeProps) {
  const badges: Record<string, { text: string; className: string }> = {
    PD: { text: 'Public Domain', className: 'bg-teal-900/60 border-teal-600' },
    CC0: { text: 'CC0', className: 'bg-blue-900/60 border-blue-600' },
    'CC-BY': { text: 'CC-BY', className: 'bg-purple-900/60 border-purple-600' },
    'CC-BY-SA': { text: 'CC-BY-SA', className: 'bg-orange-900/60 border-orange-600' },
  };

  const badge = badges[license] || badges['PD'];

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${badge.className} text-white`}>
      {badge.text}
    </span>
  );
}
