import ContactosClient from './ContactosClient';

export const metadata = {
  title: 'Contactos & Reunião Gratuita',
  description: 'Fale com a equipa ENimble. Agende uma reunião presencial ou online para impulsionar o seu negócio.',
  alternates: {
    canonical: '/contactos',
  },
};

export default function ContactosPage() {
  return <ContactosClient />;
}
