const badges = [
  {
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Regulado por la CNBV',
    desc: 'Operamos bajo estricta supervisión de la Comisión Nacional Bancaria y de Valores.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Protegido por el IPAB',
    desc: 'Tus depósitos están protegidos hasta $3,000,000 MXN por el Instituto para la Protección al Ahorro Bancario.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '+500,000 clientes satisfechos',
    desc: 'Más de medio millón de mexicanos confían en DD Finance para gestionar sus finanzas.',
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6 py-12">
      {badges.map((b) => (
        <div key={b.title} className="flex flex-col items-center text-center gap-3">
          {b.icon}
          <h3 className="font-bold text-gray-800">{b.title}</h3>
          <p className="text-sm text-gray-500">{b.desc}</p>
        </div>
      ))}
    </div>
  );
}
