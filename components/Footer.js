import Link from 'next/link';

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 11.5C7 9.57 8.57 8 10.5 8H13v2h-2.5C9.67 10 9 10.67 9 11.5S9.67 13 10.5 13H13v2h-2.5C8.57 15 7 13.43 7 11.5z"/>
              </svg>
              <span className="text-white font-bold text-lg">
                DD <span className="text-brand-gold">Finance</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3">Tu futuro financiero, hoy.</p>
            <p className="text-xs text-gray-500">
              DD Finance, S.A. de C.V., SOFOM, E.N.R.<br />
              Regulada y supervisada por la Comisión Nacional Bancaria y de Valores (CNBV).
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Productos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tarjeta-de-credito" className="hover:text-white transition-colors">Tarjeta de Crédito</Link></li>
              <li><Link href="/cuenta-de-ahorro" className="hover:text-white transition-colors">Cuenta de Ahorro</Link></li>
              <li><Link href="/hipoteca" className="hover:text-white transition-colors">Hipoteca</Link></li>
              <li><Link href="/solicitar" className="hover:text-white transition-colors">Solicitar un Producto</Link></li>
            </ul>
          </div>

          {/* Regulatory */}
          <div>
            <h3 className="text-white font-semibold mb-4">Regulación y Protección</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Entidad regulada por la CNBV</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Depósitos protegidos por el IPAB hasta $3,000,000 MXN</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Conducef: 800 999 8080</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-xs text-gray-500 text-center">
          © 2024 DD Finance, S.A. de C.V., SOFOM, E.N.R. Todos los derechos reservados. |{' '}
          <span className="hover:text-gray-300 cursor-pointer">Aviso de Privacidad</span> |{' '}
          <span className="hover:text-gray-300 cursor-pointer">Términos y Condiciones</span>
        </div>
      </div>
    </footer>
  );
}
