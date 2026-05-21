import Link from 'next/link';
import BenefitItem from '@/components/BenefitItem';
import TrustBadges from '@/components/TrustBadges';

export const metadata = {
  title: 'Cuenta de Ahorro DD — DD Finance',
  description: 'Ahorra con la mejor tasa del mercado: 8.5% anual, sin comisiones y apertura desde $1 MXN.',
};

const metrics = [
  { value: '8.5%', label: 'Tasa Anual (TIIE + 3%)' },
  { value: '$0', label: 'Comisiones' },
  { value: '$1', label: 'Apertura mínima MXN' },
  { value: 'SPEI', label: 'Transferencias incluidas' },
];

const benefits = [
  'Tasa de interés anual del 8.5% (TIIE + 3%), revisable trimestralmente',
  'Cero comisiones de mantenimiento o apertura',
  'Apertura de cuenta desde $1 peso mexicano',
  'Transferencias SPEI ilimitadas sin costo',
  'Intereses abonados mensualmente en tu cuenta',
  'Acceso a tu saldo 24/7 desde la app DD Finance',
  'Tarjeta de débito virtual para compras en línea',
  'Depósitos protegidos por el IPAB hasta $3,000,000 MXN',
];

const requirements = [
  'Ser mayor de 18 años',
  'Identificación oficial vigente (INE / Pasaporte)',
  'CURP',
  'Correo electrónico y número de teléfono',
  'No se requiere comprobante de ingresos',
];

export default function CuentaAhorroPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-brand-gold/20 text-brand-gold text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-brand-gold/30">
            Cuenta de Ahorro
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Cuenta de Ahorro <span className="text-brand-gold">DD</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Haz que tu dinero trabaje por ti. La mejor tasa del mercado con total liquidez
            y sin comisiones ocultas.
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
              <h3 className="text-xl font-bold mb-2">¿Te interesa esta cuenta?</h3>
              <p className="text-gray-300 text-sm mb-5">
                Ábrela en minutos desde tu teléfono o computadora.
              </p>
              <Link
                id="cta-producto"
                href="/solicitar?producto=cuenta"
                className="btn-primary block text-center"
              >
                Abrir Cuenta de Ahorro
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
