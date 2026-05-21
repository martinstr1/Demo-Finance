import Link from 'next/link';

export const metadata = {
  title: 'Solicitud Recibida — DD Finance',
  description: 'Tu solicitud ha sido recibida. Un asesor de DD Finance te contactará pronto.',
};

export default function GraciasPage() {
  return (
    <div id="pagina-gracias" className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full">
        <div id="conversion-confirmation" className="card text-center p-10">
          {/* Success icon */}
          <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-extrabold text-brand-blue mb-3">
            ¡Solicitud Recibida!
          </h1>
          <p className="text-gray-600 mb-2">
            Gracias por tu interés en <strong>DD Finance</strong>.
            Uno de nuestros asesores revisará tu solicitud y te contactará
            en las próximas <strong>24 horas hábiles</strong>.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Número de folio: <span className="font-mono font-semibold text-gray-600">#DDf-2024-{Math.floor(Math.random() * 90000) + 10000}</span>
          </p>

          {/* What's next */}
          <div className="bg-gray-50 rounded-xl p-5 text-left mb-8 space-y-3">
            <h2 className="font-bold text-gray-700 text-sm uppercase tracking-wide">¿Qué sigue?</h2>
            {[
              'Revisaremos tu solicitud en menos de 24 horas',
              'Un asesor te contactará por teléfono o correo',
              'Te guiaremos en cada paso del proceso',
            ].map((step, i) => (
              <div key={step} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-600 text-sm">{step}</span>
              </div>
            ))}
          </div>

          <Link id="cta-gracias-home" href="/" className="btn-primary inline-block px-8">
            Volver al Inicio
          </Link>
        </div>

        {/* Legal note */}
        <p className="text-xs text-gray-400 text-center mt-6">
          DD Finance, S.A. de C.V., SOFOM, E.N.R. Regulada por la CNBV.
          El envío de este formulario no garantiza la aprobación del producto solicitado.
        </p>
      </div>
    </div>
  );
}
