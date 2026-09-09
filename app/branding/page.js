import BrandingClient from './BrandingClient';

export const metadata = {
  title: 'Branding & Identidade Visual',
  description: 'Criamos marcas com personalidade, logótipos memoráveis, guias de estilo e identidade visual estratégica.',
  alternates: {
    canonical: '/branding',
  },
};

export default function BrandingPage() {
  return <BrandingClient />;
}
