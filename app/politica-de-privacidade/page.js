import PrivacidadeClient from './PrivacidadeClient';

export const metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade da ENimble. Transparência, segurança e conformidade rigorosa com o Regulamento Geral sobre a Proteção de Dados (RGPD).',
  alternates: {
    canonical: '/politica-de-privacidade',
  },
  openGraph: {
    title: 'Política de Privacidade | ENimble',
    description: 'Conheça como a ENimble recolhe, trata e protege os seus dados pessoais com transparência e em conformidade com o RGPD.',
    url: 'https://enimble.pt/politica-de-privacidade',
    siteName: 'ENimble',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function PoliticaDePrivacidadePage() {
  return <PrivacidadeClient />;
}
