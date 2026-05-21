import Link from 'next/link';

export default function ProductCard({ icon, title, description, highlights, href, ctaText }) {
  return (
    <div className="card flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
      <div className="text-brand-gold">{icon}</div>
      <h3 className="text-xl font-bold text-brand-blue">{title}</h3>
      <p className="text-gray-600 text-sm flex-1">{description}</p>
      <ul className="space-y-1">
        {highlights.map((h) => (
          <li key={h} className="text-sm text-gray-700 flex items-center gap-2">
            <span className="text-brand-gold font-bold">✓</span> {h}
          </li>
        ))}
      </ul>
      <Link href={href} className="btn-primary text-center mt-2">
        {ctaText}
      </Link>
    </div>
  );
}
