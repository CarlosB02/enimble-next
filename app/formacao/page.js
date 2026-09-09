import FormacaoClient from './FormacaoClient';

export const metadata = {
  title: 'Formação Certificada DGERT em Marketing Digital',
  description: 'Formações práticas e financiadas em marketing digital, redes sociais, publicidade paga e IA para empresas.',
  alternates: {
    canonical: '/formacao',
  },
};

export default function FormacaoPage() {
  return <FormacaoClient />;
}
