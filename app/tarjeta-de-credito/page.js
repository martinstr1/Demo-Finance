import Link from 'next/link';
import BenefitItem from '@/components/BenefitItem';
import TrustBadges from '@/components/TrustBadges';

export const metadata = {
  title: 'Tarjeta de Crédito DD — DD Finance',
  description: 'La tarjeta de crédito con 0% comisión anual, 18 MSI y 2% cashback. Solicita en línea.',
};

const metrics = [
  { value: '0%', label: 'Comisión Anual (1er año)' },
  { value: '18', label: 'Meses Sin Intereses' },
  { value: '2%', label: 'Cashback en Compras' },
  { value: '$150K', label: 'Límite MXN' },
];

const benefits = [
  'Sin comisión anual el primer año (y condonable a partir del segundo)',
  '2% de cashback en todas tus compras, sin límite',
  'Hasta 18 meses sin intereses en tiendas participantes',
  'Seguro de compra y de viaje incluido sin costo adicional',
  'Control total desde la app móvil: bloquea, desbloquea y gestiona tu tarjeta',
  'Pagos con NFC (contactless) y Google Pay / Apple Pay',
  'Sin cargos por retiro de efectivo en cajeros afiliados',
  'Programa de puntos DD: acumula y canjea en más de 500 marcas',
];

const requirements = [
  'Ser mayor de 18 años',
  'Ingresos mensuales mínimos de $8,000 MXN',
  'Identificación oficial vigente (INE / Pasaporte)',
  'Comprobante de domicilio (no mayor a 3 meses)',
  'CURP',
];

export default function TarjetaCreditoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-brand-gold/20 text-brand-gold text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-brand-gold/30">
            Tarjeta de Crédito
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Tarjeta de Crédito <span className="text-brand-gold">DD</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            La tarjeta que se adapta a tu estilo de vida. Cashback real, meses sin intereses
            y sin comisión anual el primer año.
          </p>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="bg-white border-b border-gray-200 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m) => (
            <div key={m.label} className="p-4">
              <div className="text-3xl font-extrabold text-brand-blue mb-1">{m.value}</div>
              <div className="text-sm text-gray-500">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Beneficios</h2>
            <div className="space-y-4">
              {benefits.map((b) => (
                <BenefitItem key={b} text={b} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title">Requisitos</h2>
            <div className="space-y-3">
              {requirements.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-gray-700">{r}</span>
                </div>
              ))}
            </div>

            {/* CTA block */}
            <div className="mt-10 p-6 bg-brand-blue rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">¿Te interesa esta tarjeta?</h3>
              <p className="text-gray-300 text-sm mb-5">
                Solicita en minutos. Sin visitar una sucursal.
              </p>
              <Link
                id="cta-producto"
                href="/solicitar?producto=tarjeta"
                className="btn-primary block text-center"
              >
                Solicitar Tarjeta de Crédito
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-white border-t border-gray-200">
        <TrustBadges />
      </section>
    </>
  );
}
