import PortfolioClient from './PortfolioClient';

export const metadata = {
  title: 'Portfólio de Projetos & Casos de Sucesso',
  description: 'Conheça os projetos de web design, branding, e-commerce e marketing digital desenvolvidos pela ENimble.',
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
