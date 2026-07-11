import { Sora, Syne } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-headings',
  display: 'swap',
});

export const metadata = {
  title: 'E-NIMBLE | Marketing Digital',
  description: 'Elevamos o seu negócio digital com estratégias que funcionam e design que apaixona.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${sora.variable} ${syne.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
