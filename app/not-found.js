import NotFoundClient from './NotFoundClient';

export const metadata = {
  title: '404 - Rota Não Encontrada',
  description: 'A página solicitada não existe ou foi alterada. Explore as soluções ágeis da ENimble.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
