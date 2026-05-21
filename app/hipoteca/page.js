import Link from 'next/link';
import BenefitItem from '@/components/BenefitItem';
import TrustBadges from '@/components/TrustBadges';

export const metadata = {
  title: 'Hipoteca DD — DD Finance',
  description: 'Hipoteca desde 9.5% anual, hasta 90% de financiamiento y plazos de hasta 30 años. Proceso 100% digital.',
};

const metrics = [
  { value: '9.5%', label: 'Tasa Desde (Anual Fija)' },
  { value: '90%', label: 'Financiamiento Máximo' },
  { value: '30', label: 'Años de Plazo Máximo' },
  { value: '$0', label: 'Penalización Pago Anticipado' },
];

const benefits = [
  'Tasa fija desde 9.5% anual — sin sorpresas en tu mensualidad',
  'Financia hasta el 90% del valor del inmueble',
  'Plazos flexibles de 5 a 30 años según tu capacidad de pago',
  'Sin penalización por pago anticipado total o parcial',
  'Proceso 100% digital: firma tu escritura desde casa',
  'Avalúo digital en 48 horas con PROFECO',
  'Seguro de vida e inmueble incluido durante el plazo',
  'Asesoría personalizada sin costo con nuestros especialistas hipotecarios',
];

const requirements = [
  'Ser mayor de 18 años y menor de 65 al término del crédito',
  'Ingresos mensuales comprobables mínimos de $25,000 MXN',
  'Antigüedad laboral mínima de 2 años (o 1 año para cuenta propia)',
  'Historial crediticio positivo en Buró de Crédito',
  'Enganche mínimo del 10% del valor del inmueble',
  'Identificación oficial vigente (INE / Pasaporte)',
  'Comprobante de ingresos (últimas 3 nóminas o estados de cuenta)',
  'Comprobante de domicilio (no mayor a 3 meses)',
];

export default function HipotecaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-brand-gold/20 text-brand-gold text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-brand-gold/30">
            Hipoteca
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hipoteca <span className="text-brand-gold">DD</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            El hogar de tus sueños está más cerca de lo que piensas.
            Tasa fija, proceso digital y sin sorpresas en cada mensualidad.
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
              <h3 className="text-xl font-bold mb-2">¿Te interesa esta hipoteca?</h3>
              <p className="text-gray-300 text-sm mb-5">
                Un asesor hipotecario te contactará en menos de 24 horas.
              </p>
              <Link
                id="cta-producto"
                href="/solicitar?producto=hipoteca"
                className="btn-primary block text-center"
              >
                Solicitar Hipoteca DD
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
