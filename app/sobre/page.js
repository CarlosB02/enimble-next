import SobreClient from './SobreClient';

export const metadata = {
  title: 'Sobre Nós | A Nossa História & Valores',
  description: 'Conheça a equipa ENimble, a nossa visão de marketing digital H2H (Human to Human) e compromisso com o design.',
  alternates: {
    canonical: '/sobre',
  },
};

export default function SobrePage() {
  return <SobreClient />;
}
