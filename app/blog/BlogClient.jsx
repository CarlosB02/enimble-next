'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Blog.css';

const categories = ['Todos', 'Web Design', 'Tráfego Pago', 'Automação & IA', 'E-commerce'];

export default function BlogClient({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'Todos' || post.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.seo?.keywords && post.seo.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <main className="blog-hub-page">
      {/* Background ambient glows */}
      <div className="blog-glow blog-glow-top-left" aria-hidden="true" />
      <div className="blog-glow blog-glow-bottom-right" aria-hidden="true" />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">

            <h1 className="blog-title">
              Ideias, Estratégia & Design que{' '}
              <span className="gradient-word">Geram Faturação</span>
            </h1>

            <p className="blog-subtitle">
              Guias práticos, análises aprofundadas e metodologias comprovadas no terreno
              para transformar websites e marcas em motores de vendas contínuas.
            </p>

            {/* Filter and Search Bar */}
            <div className="blog-controls-wrapper">
              <div className="blog-categories-pill">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="blog-search-box">
                <svg
                  className="search-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Pesquisar por tema, palavra-chave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="blog-search-input"
                  aria-label="Pesquisar artigos do blog"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="clear-search-btn"
                    aria-label="Limpar pesquisa"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="blog-grid-section">
        <div className="container">
          {/* Featured Post Banner */}
          {featuredPost && selectedCategory === 'Todos' && !searchQuery && (
            <div className="featured-article-container">
              <span className="featured-section-label">Artigo em Destaque</span>
              <article className="featured-post-card">
                <Link href={`/blog/${featuredPost.slug}`} className="featured-post-link" aria-label={featuredPost.title}>
                  <div className="featured-post-grid">
                    <div className="featured-image-wrapper">
                      <Image
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        width={700}
                        height={460}
                        className="featured-cover-img"
                        priority
                      />
                      <div className="featured-image-overlay" />
                      <span className="featured-category-badge">{featuredPost.category}</span>
                    </div>

                    <div className="featured-post-body">
                      <div className="featured-meta">
                        <span className="featured-date">{featuredPost.publishDate}</span>
                        <span className="meta-separator">•</span>
                        <span className="featured-read-time">{featuredPost.readTime}</span>
                      </div>

                      <h2 className="featured-post-title">
                        {featuredPost.title}
                      </h2>

                      <p className="featured-post-excerpt">
                        {featuredPost.excerpt}
                      </p>

                      <div className="featured-footer">
                        <div className="author-info">
                          <Image
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            width={44}
                            height={44}
                            className="author-avatar"
                          />
                          <div>
                            <span className="author-name">{featuredPost.author.name}</span>
                            <span className="author-role">{featuredPost.author.role}</span>
                          </div>
                        </div>

                        <span className="read-article-btn">
                          Ler Artigo Completo
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </div>
          )}

          {/* Grid of articles */}
          <div className="articles-section-header">
            <h3 className="articles-heading">
              {searchQuery
                ? `Resultados para "${searchQuery}" (${filteredPosts.length})`
                : selectedCategory === 'Todos'
                  ? 'Todos os Artigos & Guias'
                  : `Artigos em ${selectedCategory} (${filteredPosts.length})`}
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="no-posts-found">
              <div className="no-posts-icon">🔍</div>
              <h4>Nenhum artigo encontrado</h4>
              <p>Tente ajustar a sua pesquisa ou explorar outra categoria temática.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                }}
                className="btn-reset-filters"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="blog-posts-grid">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="blog-card">
                  <Link href={`/blog/${post.slug}`} className="blog-card-link">
                    <div className="blog-card-media">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={480}
                        height={300}
                        className="blog-card-img"
                      />
                      <span className="blog-card-category">{post.category}</span>
                    </div>

                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span>{post.publishDate}</span>
                        <span className="meta-separator">•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="blog-card-title">{post.title}</h3>

                      <p className="blog-card-excerpt">{post.excerpt}</p>

                      <div className="blog-card-footer">
                        <div className="card-author">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="card-author-avatar"
                          />
                          <span>{post.author.name}</span>
                        </div>

                        <span className="card-read-link">
                          Ler
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Strategic Call to Action Section */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="blog-cta-card">
            <div className="blog-cta-decoration" aria-hidden="true" />
            <div className="blog-cta-body">
              <span className="blog-cta-badge">Próximo Passo</span>
              <h2 className="blog-cta-title">
                Quer aplicar estas estratégias de <span className="gradient-word">alta conversão</span> no seu negócio?
              </h2>
              <p className="blog-cta-desc">
                Analisamos a presença digital do seu negócio, a concorrência e o potencial do seu nicho sem compromisso.
                Venha tomar um café connosco ou agende uma reunião online.
              </p>
              <div className="blog-cta-actions">
                <Link href="/contactos" className="blog-cta-btn-primary">
                  Pedir Diagnóstico Gratuito
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/#servicos" className="blog-cta-btn-secondary">
                  Ver Todos os Serviços
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
