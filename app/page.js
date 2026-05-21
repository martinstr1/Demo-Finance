import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import TrustBadges from '@/components/TrustBadges';

const cardIcon = (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const savingsIcon = (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const homeIcon = (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const products = [
  {
    icon: cardIcon,
    title: 'Tarjeta de Crédito DD',
    description: 'Disfruta de beneficios exclusivos, cashback y meses sin intereses en miles de establecimientos.',
    highlights: ['0% comisión anual (primer año)', '18 meses sin intereses', '2% Cashback en compras'],
    href: '/tarjeta-de-credito',
    ctaText: 'Ver Tarjeta',
  },
  {
    icon: savingsIcon,
    title: 'Cuenta de Ahorro DD',
    description: 'Haz crecer tu dinero con la mejor tasa del mercado, sin comisiones y con total liquidez.',
    highlights: ['8.5% tasa anual', 'Sin comisiones de mantenimiento', 'Apertura desde $1 MXN'],
    href: '/cuenta-de-ahorro',
    ctaText: 'Ver Cuenta',
  },
  {
    icon: homeIcon,
    title: 'Hipoteca DD',
    description: 'Consigue el hogar de tus sueños con las mejores condiciones del mercado hipotecario mexicano.',
    highlights: ['Desde 9.5% tasa anual', 'Hasta 90% de financiamiento', 'Plazos hasta 30 años'],
    href: '/hipoteca',
    ctaText: 'Ver Hipoteca',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="bg-brand-blue text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-brand-gold/20 text-brand-gold text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-brand-gold/30">
            Regulado por la CNBV
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Tu crédito.<br />Tu ahorro.<br />
            <span className="text-brand-gold">Tu hogar.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl">
            DD Finance te ofrece los mejores productos financieros del mercado mexicano,
            con procesos 100% digitales y atención personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link id="cta-hero" href="/solicitar" className="btn-primary text-center text-lg px-8 py-4">
              Solicitar Ahora
            </Link>
            <Link id="cta-hero-secondary" href="#productos" className="btn-outline-white text-center text-lg px-8 py-4">
              Ver Productos
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-12 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-brand-gold font-bold">✓</span> Sin sucursales, 100% en línea
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-gold font-bold">✓</span> Respuesta en 24 horas
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-gold font-bold">✓</span> Sin buró de crédito inicial
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestros Productos</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Soluciones financieras diseñadas para cada etapa de tu vida.
              Simples, transparentes y a tu medida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section id="confianza" className="bg-white border-y border-gray-200">
        <TrustBadges />
      </section>

      {/* Stats */}
      <section id="estadisticas" className="py-16 px-6 bg-brand-blue text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '+500K', label: 'Clientes' },
            { value: '$50B', label: 'MXN en créditos' },
            { value: '15', label: 'Años de experiencia' },
            { value: '98%', label: 'Clientes satisfechos' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-brand-gold mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta-banner" className="bg-brand-gold py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">¿Listo para empezar?</h2>
        <p className="text-white/90 mb-8 max-w-lg mx-auto">
          Solicita tu producto favorito en menos de 5 minutos. Sin papeleos, sin filas.
        </p>
        <Link
          id="cta-banner-btn"
          href="/solicitar"
          className="bg-white text-brand-goldDark font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block text-lg"
        >
          Solicitar en 5 minutos
        </Link>
      </section>
    </>
  );
}
