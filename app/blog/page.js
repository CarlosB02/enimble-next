import BlogClient from './BlogClient';
import { getAllPosts } from '@/lib/blog-data';

export const metadata = {
  title: 'Blog de Marketing Digital, Web Design & Performance',
  description: 'Artigos estratégicos, guias práticos e tendências sobre criação de websites, tráfego pago, SEO e automação para fazer o seu negócio crescer.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog de Marketing Digital, Web Design & Performance | ENimble',
    description: 'Artigos estratégicos, guias práticos e tendências sobre criação de websites, tráfego pago, SEO e automação.',
    url: 'https://enimble.pt/blog',
    siteName: 'ENimble',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog ENimble | Estratégia Digital, Web Design & Resultados',
    description: 'Aprenda como transformar o seu website numa máquina de geração de clientes.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}
