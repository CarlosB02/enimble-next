export const blogPosts = [
  {
    slug: 'como-criar-website-alta-conversao',
    title: 'Como Criar um Website de Alta Conversão que Transforma Visitantes em Clientes',
    subtitle: 'Os 7 pilares fundamentais de web design, UX, velocidade e psicologia que separam sites comuns de verdadeiras máquinas de faturação digital.',
    excerpt: 'Ter um website bonito já não é suficiente. Em 2026, um website eficaz precisa de carregar em menos de 1.5s, comunicar valor instantâneo nos primeiros 3 segundos e conduzir o visitante pelo funil de conversão sem atrito.',
    category: 'Web Design',
    categorySlug: 'web-design',
    publishDate: '24 de Março, 2026',
    isoDate: '2026-03-24T10:00:00.000Z',
    readTime: '7 min de leitura',
    featured: true,
    coverImage: '/assets/blog/capa-website-design.webp',
    author: {
      name: 'Carlos Bernardo',
      role: 'CEO & Estrategista Digital @ ENimble',
      avatar: '/assets/carlos bernardo enimble.webp',
      bio: 'Especialista em ecossistemas digitais de alta conversão, unindo web design de excelência, tráfego qualificado e automações inteligentes.'
    },
    seo: {
      metaTitle: 'Como Criar um Website de Alta Conversão em 2026 | Guia ENimble',
      metaDescription: 'Aprenda como criar um website profissional orientado a resultados. Dicas práticas de web design, retenção de clientes, psicologia de conversão e vendas.',
      keywords: [
        'como criar website alta conversao',
        'criacao de websites profissionais',
        'web design Portugal',
        'otimizacao de taxa de conversao',
        'design de landing pages',
        'gerar leads no website',
        'agencia de web design Lisboa Porto'
      ],
      ogImage: '/assets/blog/capa-website-design.webp'
    },
    tableOfContents: [
      { id: 'realidade-mercado', title: '1. A dura verdade sobre 90% dos websites empresariais' },
      { id: 'regra-dos-3-segundos', title: '2. A Regra dos 3 Segundos e a Proposta de Valor' },
      { id: 'velocidade-performance', title: '3. Velocidade e Retenção: Cada segundo perdido custa clientes' },
      { id: 'arquitetura-ux-ui', title: '4. Arquitetura de Informação e Psicologia de Conversão' },
      { id: 'triade-crescimento', title: '5. A Tríade: Tráfego, Web Design e Automação' },
      { id: 'tabela-comparativa', title: '6. Website Comum vs. Website ENimble de Alta Performance' },
      { id: 'checklist-pratico', title: '7. Checklist Prático para Auditar o Seu Website' },
      { id: 'conclusao-proximos-passos', title: '8. Conclusão e Próximos Passos' }
    ]
  },
  {
    slug: 'automacao-ia-empresas-guia-pratico',
    title: 'Automação e IA para Empresas: Como Poupar Centenas de Horas e Escalar Vendas',
    subtitle: 'O guia estratégico para eliminar tarefas manuais, atender clientes em segundos no WhatsApp e criar uma máquina comercial que não dorme.',
    excerpt: 'Descubra como empresas estão a usar automação inteligente para acolher leads 24/7, sincronizar CRM e libertar equipas para fechar negócios de alto valor sem aumentar custos fixos.',
    category: 'Automação & IA',
    categorySlug: 'automacao',
    publishDate: '26 de Março, 2026',
    isoDate: '2026-03-26T10:00:00.000Z',
    readTime: '6 min de leitura',
    featured: false,
    coverImage: '/assets/blog/capa-automacao-ia.webp',
    author: {
      name: 'Carlos Bernardo',
      role: 'CEO & Estrategista Digital @ ENimble',
      avatar: '/assets/carlos bernardo enimble.webp',
      bio: 'Especialista em ecossistemas digitais de alta conversão, unindo web design de excelência, tráfego qualificado e automações inteligentes.'
    },
    seo: {
      metaTitle: 'Automação e IA para Empresas em 2026: Guia Estratégico | ENimble',
      metaDescription: 'Aprenda como a automação de processos e IA aumentam as vendas e reduzem custos operacionais. Estratégias práticas para WhatsApp, CRM e gestão de leads.',
      keywords: [
        'automacao de processos para empresas',
        'inteligencia artificial para negocios',
        'automacao comercial whatsapp',
        'integracao crm vendas',
        'como escalar empresa com inteligencia artificial',
        'eficiencia operacional pme Portugal',
        'consultoria de automacao Porto Lisboa'
      ],
      ogImage: '/assets/blog/capa-automacao-ia.webp'
    },
    tableOfContents: [
      { id: 'mito-ia-empresas', title: '1. O Grande Mito: IA não é ficção científica, é eficiência de caixa' },
      { id: 'custo-invisivel-trabalho-manual', title: '2. O Custo Invisível: Quanto dinheiro a sua empresa perde em tarefas manuais?' },
      { id: 'velocidade-resposta-leads', title: '3. A Regra dos 2 Minutos: Porque a rapidez no WhatsApp define quem fecha a venda' },
      { id: 'tres-pilares-automacao-comercial', title: '4. Os 3 Pilares da Automação Comercial de Alto Retorno' },
      { id: 'seguranca-governanca-ia', title: '5. Inteligência com Controlo: O papel do ser humano na supervisão' },
      { id: 'tabela-comparativa-operacao', title: '6. Operação Tradicional vs. Operação Automatizada Inteligente' },
      { id: 'checklist-identificar-oportunidades', title: '7. Diagnóstico Rápido: O que automatizar primeiro na sua empresa?' },
      { id: 'conclusao-escala-sem-atrito', title: '8. Conclusão: O futuro pertence a quem automatiza o rotineiro' }
    ]
  }
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCategories() {
  const categories = ['Todos', ...new Set(blogPosts.map((post) => post.category))];
  return categories;
}
