import { Sora, Syne } from 'next/font/google';
import Script from 'next/script';
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
  metadataBase: new URL('https://enimble.pt'),
  title: {
    default: 'ENimble | Marketing Digital & Web Design de Alta Performance',
    template: '%s | ENimble',
  },
  description: 'Elevamos o seu negócio digital com estratégias de tráfego pago, web design, branding, automação e gestão de redes sociais orientados a resultados.',
  keywords: [
    'ENimble',
    'Marketing Digital',
    'Web Design',
    'Tráfego Pago',
    'Google Ads',
    'Meta Ads',
    'Branding',
    'Automação',
    'Gestão de Redes Sociais',
    'E-commerce',
    'Agência de Marketing Portugal'
  ],
  authors: [{ name: 'ENimble', url: 'https://enimble.pt' }],
  creator: 'ENimble',
  publisher: 'ENimble',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ENimble | Marketing Digital & Web Design de Alta Performance',
    description: 'Elevamos o seu negócio digital com estratégias de tráfego pago, web design, branding e automação.',
    url: 'https://enimble.pt',
    siteName: 'ENimble',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENimble | Marketing Digital & Web Design',
    description: 'Elevamos o seu negócio digital com estratégias que funcionam e design que apaixona.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${sora.variable} ${syne.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RFPP2HGL4F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RFPP2HGL4F');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
