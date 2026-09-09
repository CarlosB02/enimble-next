import EcommerceClient from './EcommerceClient';

export const metadata = {
  title: 'Lojas Online & E-commerce de Alta Conversão',
  description: 'Desenvolvemos lojas online rápidas, intuitivas e seguras em Shopify e WooCommerce prontas para vender 24/7.',
  alternates: {
    canonical: '/ecommerce',
  },
};

export default function EcommercePage() {
  return <EcommerceClient />;
}
