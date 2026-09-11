import { Sora, Syne } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
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
    default: 'ENimble | Agência de Marketing Digital em Portugal',
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
    title: 'ENimble | Agência de Marketing Digital em Portugal',
    description: 'Elevamos o seu negócio digital com estratégias de tráfego pago, web design, branding e automação.',
    url: 'https://enimble.pt',
    siteName: 'ENimble',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENimble | Agência de Marketing Digital em Portugal',
    description: 'Elevamos o seu negócio digital com estratégias de crescimento comprovadas.',
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
        {/* Google Consent Mode v2 - RGPD / CNPD Compliance */}
        <Script id="google-consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            var isGranted = false;
            try {
              var storedConsent = localStorage.getItem('enimble_cookie_consent');
              if (storedConsent === 'accepted') {
                isGranted = true;
              } else if (storedConsent && storedConsent !== 'declined') {
                var parsed = JSON.parse(storedConsent);
                if (parsed && parsed.analytics) isGranted = true;
              }
            } catch(e) {}

            gtag('consent', 'default', {
              'analytics_storage': isGranted ? 'granted' : 'denied',
              'ad_storage': isGranted ? 'granted' : 'denied',
              'ad_user_data': isGranted ? 'granted' : 'denied',
              'ad_personalization': isGranted ? 'granted' : 'denied'
            });

            gtag('js', new Date());
            gtag('config', 'G-RFPP2HGL4F');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RFPP2HGL4F"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
