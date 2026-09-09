import HomeClient from './HomeClient';

export const metadata = {
  title: 'ENimble | Marketing Digital, Web Design & Tráfego Pago',
  description: 'Elevamos o seu negócio digital com estratégias de tráfego pago, web design, branding, automação e redes sociais orientados a resultados.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
