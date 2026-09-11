import TermosClient from './TermosClient';

export const metadata = {
  title: 'Termos e Condições',
  description: 'Termos e Condições de utilização do website e serviços da ENimble - Agência de Marketing Digital em Portugal.',
  alternates: {
    canonical: '/termos-e-condicoes',
  },
  openGraph: {
    title: 'Termos e Condições | ENimble',
    description: 'Consulte os Termos e Condições que regulam a utilização do website e serviços prestados pela ENimble.',
    url: 'https://enimble.pt/termos-e-condicoes',
    siteName: 'ENimble',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function TermosPage() {
  return <TermosClient />;
}
