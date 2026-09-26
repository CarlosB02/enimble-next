import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import { getPostBySlug, getAllPosts } from '@/lib/blog-data';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado | ENimble',
    };
  }

  const siteUrl = 'https://enimble.pt';
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const ogImageUrl = post.seo.ogImage.startsWith('http')
    ? post.seo.ogImage
    : `${siteUrl}${post.seo.ogImage}`;

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    authors: [{ name: post.author.name, url: siteUrl }],
    creator: post.author.name,
    publisher: 'ENimble',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      url: canonicalUrl,
      siteName: 'ENimble',
      locale: 'pt_PT',
      type: 'article',
      publishedTime: post.isoDate,
      authors: [post.author.name],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [ogImageUrl],
      creator: '@enimble',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Structured Data (JSON-LD) for Google Rich Snippets
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://enimble.pt/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.seo.metaDescription,
    image: `https://enimble.pt${post.coverImage}`,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: 'https://enimble.pt/sobre',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ENimble',
      logo: {
        '@type': 'ImageObject',
        url: 'https://enimble.pt/favicon.ico',
      },
    },
    keywords: post.seo.keywords.join(', '),
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://enimble.pt',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://enimble.pt/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://enimble.pt/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
