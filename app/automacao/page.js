import AutomacaoClient from './AutomacaoClient';

export const metadata = {
  title: 'Automação de Processos & Inteligência Artificial',
  description: 'Automatize tarefas repetitivas, integre CRMs e acelere a eficiência operacional da sua empresa com IA.',
  alternates: {
    canonical: '/automacao',
  },
};

export default function AutomacaoPage() {
  return <AutomacaoClient />;
}
