import { getAllPosts } from '@/lib/blog-data';

export default function sitemap() {
  const baseUrl = 'https://enimble.pt';
  const routes = [
    '',
    '/blog',
    '/anuncios-pagos',
    '/automacao',
    '/branding',
    '/contactos',
    '/ecommerce',
    '/formacao',
    '/portfolio',
    '/redes-sociais',
    '/sobre',
    '/website-design',
    '/politica-de-privacidade',
    '/termos-e-condicoes',
  ];

  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : route === '/blog' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : route === '/blog' ? 0.9 : 0.8,
  }));

  const blogPosts = getAllPosts();
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.isoDate || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticEntries, ...blogEntries];
}
