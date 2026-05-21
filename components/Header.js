'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/tarjeta-de-credito', label: 'Tarjeta de Crédito' },
  { href: '/cuenta-de-ahorro', label: 'Cuenta de Ahorro' },
  { href: '/hipoteca', label: 'Hipoteca' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-blue sticky top-0 z-50 shadow-lg">
      <nav aria-label="Navegación principal" className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white">
          <svg className="w-8 h-8 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 11.5C7 9.57 8.57 8 10.5 8H13v2h-2.5C9.67 10 9 10.67 9 11.5S9.67 13 10.5 13H13v2h-2.5C8.57 15 7 13.43 7 11.5z"/>
          </svg>
          <span className="text-xl font-bold tracking-tight">
            DD <span className="text-brand-gold">Finance</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-brand-gold border-b-2 border-brand-gold pb-0.5'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link id="cta-nav" href="/solicitar" className="hidden md:inline-block btn-primary text-sm py-2">
          Solicitar Ahora
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-blueLight px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-200 hover:text-white font-medium py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            id="cta-nav-mobile"
            href="/solicitar"
            onClick={() => setMenuOpen(false)}
            className="btn-primary block text-center text-sm py-2 mt-2"
          >
            Solicitar Ahora
          </Link>
        </div>
      )}
    </header>
  );
}
