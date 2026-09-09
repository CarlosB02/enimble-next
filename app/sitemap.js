export default function sitemap() {
  const baseUrl = 'https://enimble.pt';
  const routes = [
    '',
    '/ads',
    '/automacao',
    '/branding',
    '/contactos',
    '/ecommerce',
    '/formacao',
    '/portfolio',
    '/redes-sociais',
    '/sobre',
    '/website-design',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
