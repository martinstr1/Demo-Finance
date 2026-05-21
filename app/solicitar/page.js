import { Suspense } from 'react';
import TrustBadges from '@/components/TrustBadges';
import SolicitudForm from '@/components/SolicitudForm';

export const metadata = {
  title: 'Solicitar — DD Finance',
  description: 'Solicita tu tarjeta de crédito, cuenta de ahorro o hipoteca DD Finance en minutos.',
};

export default function SolicitudPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-brand-blue text-white py-14 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-3">Solicita tu Producto</h1>
          <p className="text-gray-300 text-lg">
            Completa el formulario y un asesor te contactará en menos de 24 horas hábiles.
            Sin compromisos.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="card">
          <Suspense fallback={null}>
            <SolicitudForm />
          </Suspense>
        </div>

        {/* Trust below form */}
        <div className="mt-10">
          <TrustBadges />
        </div>
      </div>
    </div>
  );
}
