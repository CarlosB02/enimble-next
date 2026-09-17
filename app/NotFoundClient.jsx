'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './NotFound.css';

export default function NotFoundClient() {
  const router = useRouter();
  const glowBlueRef = useRef(null);
  const glowRedRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    // Add page-specific body class for transparent header & styling
    document.body.classList.add('notfound-body');

    // Subtle cursor-driven glow parallax
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const moveX = (clientX - windowWidth / 2) * 0.05;
      const moveY = (clientY - windowHeight / 2) * 0.05;

      if (glowBlueRef.current) {
        glowBlueRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }

      if (glowRedRef.current) {
        glowRedRef.current.style.transform = `translate3d(${-moveX}px, ${-moveY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.body.classList.remove('notfound-body');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    if (scrollWidth <= clientWidth) return;

    const card = carouselRef.current.children[0];
    const cardWidth = card ? card.offsetWidth : clientWidth * 0.78;
    const gap = 14;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveCardIndex(Math.min(Math.max(index, 0), 3));
  };

  const scrollToCard = (index) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.children[index];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveCardIndex(index);
    }
  };

  return (
    <main className="notfound-wrapper" role="main">
      {/* Dynamic Ambient Glow Orbs */}
      <div
        ref={glowBlueRef}
        className="notfound-glow notfound-glow-blue"
        aria-hidden="true"
      />
      <div
        ref={glowRedRef}
        className="notfound-glow notfound-glow-red"
        aria-hidden="true"
      />
      <div className="notfound-vignette" aria-hidden="true" />

      <div className="notfound-container">
        {/* 404 Creative Radar Visual */}
        <div className="notfound-display" aria-label="Erro 404">
          <span className="notfound-digit">4</span>

          {/* Central Radar '0' */}
          <div className="notfound-radar-container" title="Radar ENimble em busca da rota perdida">
            <div className="notfound-radar-outer" aria-hidden="true" />
            <div className="notfound-radar-inner" aria-hidden="true" />
            <div className="notfound-radar-crosshair-h" aria-hidden="true" />
            <div className="notfound-radar-crosshair-v" aria-hidden="true" />
            <div className="notfound-radar-sweep" aria-hidden="true" />
            <div className="notfound-radar-center-blip" aria-hidden="true" />
          </div>

          <span className="notfound-digit">4</span>
        </div>

        {/* Branded Headline & Copy */}
        <h1 className="notfound-title">
          Ups, esta página não está aqui. <span>Vamos resolver isso.</span>
        </h1>
        <p className="notfound-description">
          O conteúdo que procura pode ter sido movido ou o endereço pode estar errado.
        </p>

        {/* Action Buttons */}
        <div className="notfound-actions">
          <Link href="/" className="notfound-btn-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Voltar ao Início</span>
          </Link>

          <button
            type="button"
            onClick={handleGoBack}
            className="notfound-btn-secondary"
            aria-label="Voltar à página anterior"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Página Anterior</span>
          </button>
        </div>

        {/* Fast Route Shortcuts */}
        <section className="notfound-shortcuts" aria-label="Rotas recomendadas">
          <div className="notfound-shortcuts-heading">
            Páginas Recomendadas no Ecossistema ENimble
          </div>

          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="notfound-shortcuts-grid"
          >
            {/* Website Design */}
            <Link href="/website-design" className="notfound-card">
              <div className="notfound-card-content">
                <div className="notfound-card-icon">
                  <img
                    src="/assets/icons/web-design.webp"
                    alt="Web Design"
                    width="24"
                    height="24"
                    className="notfound-card-img"
                  />
                </div>
                <div className="notfound-card-title">
                  <span>Web Design</span>
                  <span className="notfound-card-arrow" aria-hidden="true">→</span>
                </div>
                <div className="notfound-card-desc">
                  Sites de alta conversão, rápidos e focados em impacto.
                </div>
              </div>
            </Link>

            {/* Tráfego Pago */}
            <Link href="/anuncios-pagos" className="notfound-card">
              <div className="notfound-card-content">
                <div className="notfound-card-icon">
                  <img
                    src="/assets/icons/conversion.webp"
                    alt="Tráfego Pago"
                    width="24"
                    height="24"
                    className="notfound-card-img"
                  />
                </div>
                <div className="notfound-card-title">
                  <span>Tráfego Pago</span>
                  <span className="notfound-card-arrow" aria-hidden="true">→</span>
                </div>
                <div className="notfound-card-desc">
                  Campanhas Google & Meta focadas em ROAS escalável.
                </div>
              </div>
            </Link>

            {/* Automação */}
            <Link href="/automacao" className="notfound-card">
              <div className="notfound-card-content">
                <div className="notfound-card-icon">
                  <img
                    src="/assets/icons/engrenagem.webp"
                    alt="Automação"
                    width="24"
                    height="24"
                    className="notfound-card-img"
                  />
                </div>
                <div className="notfound-card-title">
                  <span>Automação</span>
                  <span className="notfound-card-arrow" aria-hidden="true">→</span>
                </div>
                <div className="notfound-card-desc">
                  Otimize processos com inteligência artificial e fluxos inteligentes.
                </div>
              </div>
            </Link>

            {/* Contactos */}
            <Link href="/contactos" className="notfound-card">
              <div className="notfound-card-content">
                <div className="notfound-card-icon">
                  <img
                    src="/assets/icons/comunidade.webp"
                    alt="Contactos"
                    width="24"
                    height="24"
                    className="notfound-card-img"
                  />
                </div>
                <div className="notfound-card-title">
                  <span>Contactos</span>
                  <span className="notfound-card-arrow" aria-hidden="true">→</span>
                </div>
                <div className="notfound-card-desc">
                  Fale com a equipa e marque uma sessão estratégica.
                </div>
              </div>
            </Link>
          </div>

          {/* Carousel Dots */}
          <div className="notfound-carousel-dots" aria-label="Navegação do carrossel">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                type="button"
                className={`notfound-carousel-dot ${activeCardIndex === index ? 'active' : ''}`}
                onClick={() => scrollToCard(index)}
                aria-label={`Ver cartão ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
