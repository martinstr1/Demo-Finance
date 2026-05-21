import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DD Finance — Tu Futuro Financiero',
  description: 'Tarjetas de crédito, cuentas de ahorro e hipotecas diseñadas para México. Solicita en línea en minutos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
