'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './BlogPost.css';
import ArticleWebsiteAltaConversao from './articles/ArticleWebsiteAltaConversao';
import ArticleAutomacaoIA from './articles/ArticleAutomacaoIA';

export default function BlogPostClient({ post, relatedPosts }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    post.tableOfContents?.[0]?.id || ''
  );

  // Scroll progress listener and scrollspy for TOC
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }

      // Check active heading
      if (post.tableOfContents) {
        for (let i = post.tableOfContents.length - 1; i >= 0; i--) {
          const item = post.tableOfContents[i];
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 180) {
              setActiveSection(item.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post.tableOfContents]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const shareTitle = encodeURIComponent(post.title);

  return (
    <article className="blog-post-page">
      {/* Top Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Ambient Glows */}
      <div className="post-glow post-glow-top" aria-hidden="true" />
      <div className="post-glow post-glow-mid" aria-hidden="true" />

      {/* Breadcrumb Header */}
      <div className="container">
        <nav className="post-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Início</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/blog">Blog</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{post.category}</span>
        </nav>
      </div>

      {/* Post Hero Section */}
      <header className="post-hero">
        <div className="container">
          <div className="post-hero-inner">
            <div className="post-meta-top">
              <span className="post-category-tag">{post.category}</span>
              <span className="post-meta-bullet">•</span>
              <time dateTime={post.isoDate} className="post-date">{post.publishDate}</time>
              <span className="post-meta-bullet">•</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>

            <h1 className="post-main-title">
              {post.title}
            </h1>

            <p className="post-main-subtitle">
              {post.subtitle}
            </p>

            <div className="post-author-bar">
              <div className="post-author-left">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={52}
                  height={52}
                  className="post-author-photo"
                  priority
                />
                <div>
                  <div className="post-author-name">{post.author.name}</div>
                  <div className="post-author-title">{post.author.role}</div>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="post-share-actions">
                <span className="share-label">Partilhar:</span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn"
                  aria-label="Partilhar no LinkedIn"
                  title="Partilhar no LinkedIn"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn"
                  aria-label="Partilhar no WhatsApp"
                  title="Partilhar no WhatsApp"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className={`share-btn copy-link-btn ${copiedLink ? 'copied' : ''}`}
                  aria-label="Copiar link do artigo"
                  title="Copiar link"
                >
                  {copiedLink ? (
                    <span className="copied-text">✓ Copiado!</span>
                  ) : (
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Post Cover Media */}
          <div className="post-cover-container">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={620}
              className="post-cover-image"
              priority
            />
            <div className="post-cover-caption">
              Arquitetura de conversão, UX sem ruído e estética de autoridade: os alicerces de um website com retorno real sobre o investimento.
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Sticky Sidebar */}
      <section className="post-content-section">
        <div className="container">
          <div className="post-layout-grid">
            {/* Sticky Left Sidebar: Table of Contents & Author Card */}
            <aside className="post-sidebar">
              <div className="post-sidebar-sticky">
                <div className={`sidebar-widget toc-widget ${isMobileTocOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="sidebar-widget-title toc-mobile-toggle"
                    onClick={() => setIsMobileTocOpen((prev) => !prev)}
                    aria-expanded={isMobileTocOpen}
                    aria-label="Alternar índice do artigo"
                  >
                    <span className="toc-title-left">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                      Índice do Artigo
                    </span>
                    <span className="toc-toggle-chevron" aria-hidden="true">▾</span>
                  </button>
                  <ul className="toc-list">
                    {post.tableOfContents?.map((item) => (
                      <li key={item.id} className="toc-item">
                        <button
                          type="button"
                          onClick={() => {
                            scrollToHeading(item.id);
                            setIsMobileTocOpen(false);
                          }}
                          className={`toc-link ${activeSection === item.id ? 'active' : ''}`}
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar Quick Action Card (desktop only, hidden on mobile) */}
                <div className="sidebar-widget cta-widget">
                  <div className="cta-widget-badge">Diagnóstico Grátis</div>
                  <h4 className="cta-widget-title">
                    {post.slug === 'automacao-ia-empresas-guia-pratico'
                      ? 'Quer automatizar os processos da sua empresa?'
                      : 'O seu site atual está a converter?'}
                  </h4>
                  <p className="cta-widget-text">
                    {post.slug === 'automacao-ia-empresas-guia-pratico'
                      ? 'Descubra como poupar horas manuais e responder a clientes no WhatsApp em segundos.'
                      : 'Descubra os pontos de fuga de clientes e as melhorias técnicas que podem triplicar os seus leads.'}
                  </p>
                  <Link href="/contactos" className="cta-widget-btn">
                    Marcar um café ☕
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Editorial Article Body */}
            <div className="post-article-body">
              {post.slug === 'automacao-ia-empresas-guia-pratico' ? (
                <ArticleAutomacaoIA />
              ) : (
                <ArticleWebsiteAltaConversao />
              )}

              {/* End of article Author Bio Box */}
              <div className="author-bio-card">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="bio-photo"
                />
                <div className="bio-content">
                  <div className="bio-header">
                    <h4>{post.author.name}</h4>
                    <span>{post.author.role}</span>
                  </div>
                  <p className="bio-desc">
                    {post.author.bio} Apaixonado por transformar ideias ambiciosas em resultados palpáveis através de tecnologia de ponta e design focado no ser humano (H2H).
                  </p>
                  <div className="bio-links">
                    <Link href="/sobre" className="bio-link">Conhecer a equipa ENimble →</Link>
                  </div>
                </div>
              </div>

              {/* Related Services Recommendation Grid */}
              <div className="related-services-box">
                <h3 className="related-services-title">Serviços Relacionados</h3>
                <div className="related-services-grid">
                  <Link href="/website-design" className="related-service-card">
                    <span className="service-icon">💻</span>
                    <h4>Website Design</h4>
                    <p>Websites institucionais e landing pages desenhados para gerar autoridade e vendas contínuas.</p>
                    <span className="service-arrow">Saber mais →</span>
                  </Link>
                  <Link href="/anuncios-pagos" className="related-service-card">
                    <span className="service-icon">📈</span>
                    <h4>Tráfego Pago</h4>
                    <p>Campanhas em Google Ads e Meta Ads com foco estrito em ROAS e ROI.</p>
                    <span className="service-arrow">Saber mais →</span>
                  </Link>
                  <Link href="/automacao" className="related-service-card">
                    <span className="service-icon">⚡</span>
                    <h4>Automação & IA</h4>
                    <p>Atendimento inteligente no WhatsApp, automações de CRM e e-mail marketing.</p>
                    <span className="service-arrow">Saber mais →</span>
                  </Link>
                </div>
              </div>

              {/* Bottom Back Button */}
              <div className="post-bottom-nav">
                <Link href="/blog" className="btn-back-blog">
                  ← Voltar a Todos os Artigos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
