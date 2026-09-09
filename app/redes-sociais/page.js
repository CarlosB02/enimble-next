import RedesSociaisClient from './RedesSociaisClient';

export const metadata = {
  title: 'Gestão de Redes Sociais & Criação de Conteúdo',
  description: 'Gerimos as suas redes sociais no Instagram, TikTok e Facebook com estratégia, conteúdos virais e comunidade ativa.',
  alternates: {
    canonical: '/redes-sociais',
  },
};

export default function RedesSociaisPage() {
  return <RedesSociaisClient />;
}
