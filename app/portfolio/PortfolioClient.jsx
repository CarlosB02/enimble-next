'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import ContactSection from '@/components/sections/ContactSection';
import './Portfolio.css';
import ScrollFloat from '@/components/ui/ScrollFloat';

const PORTFOLIO_ITEMS = [
    {
        id: 'moving-people-website',
        image: '/assets/portfolio/moving people website.webp',
        link: 'https://movingpeople.com',
        title: 'Moving People',
        description: 'Website Corporativo',
        category: 'website',
    },
    {
        id: 'moving-people-ads',
        image: '/assets/portfolio/moving-people-ads.webp',
        link: '#',
        title: 'Moving People',
        description: 'Anúncios Pagos / Campaign Design',
        category: 'branding',
    },
    {
        id: 'carmetrix-website',
        image: '/assets/portfolio/carmetrix-website.webp',
        link: 'https://carmetrix.pt',
        title: 'Carmetrix',
        description: 'Website & Plataforma Digital',
        category: 'website',
    },
    {
        id: 'carmetrix-branding',
        image: '/assets/portfolio/logo-carmetrix.webp',
        link: '#',
        title: 'Carmetrix',
        description: 'Identidade Visual & Branding',
        category: 'branding',
    },
    {
        id: 'file-on-website',
        image: '/assets/portfolio/fileon website.webp',
        link: 'https://fileon.pt',
        title: 'File On',
        description: 'Website Corporativo de Serviços',
        category: 'website',
    },
    {
        id: 'viriatus-brunch-logo',
        image: '/assets/portfolio/logo viriatus.webp',
        link: '#',
        title: 'Viriatus Brunch',
        description: 'Design de Logótipo & Branding',
        category: 'branding',
    },
    {
        id: 'viriatus-brunch-website',
        image: '/assets/portfolio/viriatus brunch-website.webp',
        link: 'https://viriatusbrunch.pt',
        title: 'Viriatus Brunch',
        description: 'Website de Restauração & Menu Digital',
        category: 'website',
    },
    {
        id: 'loja-dos-pets-website',
        image: '/assets/portfolio/loja dos pets-website.webp',
        link: 'https://lojadospets.pt',
        title: 'Loja dos Pets',
        description: 'E-commerce / Loja de Animais',
        category: 'website',
    },
    {
        id: 'polly-photo-website',
        image: '/assets/portfolio/polly-website.webp',
        link: 'https://polly.photo/pt',
        title: 'Polly Photo',
        description: 'Website de Portfolio Fotográfico',
        category: 'website',
    },
    {
        id: 'polly-photo-logo',
        image: '/assets/portfolio/logo-polly.webp',
        link: '#',
        title: 'Polly Photo',
        description: 'Identidade Corporativa & Logo',
        category: 'branding',
    },
    {
        id: 'orion-aviation-website',
        image: '/assets/portfolio/orion-aviation-website.webp',
        link: 'https://orionaviation.eu',
        title: 'Orion Aviation',
        description: 'Website Institucional de Aviação',
        category: 'website',
    },
    {
        id: 'panoramas-logo',
        image: '/assets/portfolio/panoramas_logo.webp',
        link: '#',
        title: 'Panoramas',
        description: 'Identidade Visual & Branding',
        category: 'branding',
    },
    {
        id: 'panoramas-website',
        image: '/assets/portfolio/panoramas-website.webp',
        link: 'https://panoramas.pt',
        title: 'Panoramas',
        description: 'Website Institucional',
        category: 'website',
    },
    {
        id: 'pedro-media-logo',
        image: '/assets/portfolio/pedro black outline com texto.webp',
        link: '#',
        title: 'Pedro Media',
        description: 'Design de Logótipo & Branding',
        category: 'branding',
    },
    {
        id: 'pedrom-media-website',
        image: '/assets/portfolio/pedrom media website.webp',
        link: 'https://pedro-sorde.vercel.app',
        title: 'PedroM Media',
        description: 'Website Institucional',
        category: 'website',
    },
    {
        id: 'inpe-logo',
        image: '/assets/portfolio/logo inpe.webp',
        link: '#',
        title: 'INPE',
        description: 'Identidade Corporativa & Logo',
        category: 'branding',
    },
    {
        id: 'inpe-website',
        image: '/assets/portfolio/inpe-website.webp',
        link: 'https://inpe.pt',
        title: 'INPE',
        description: 'Website Institucional',
        category: 'website',
    },
    {
        id: 'moonlight-ink-website',
        image: '/assets/portfolio/moonlight website.webp',
        link: 'https://moonlight-jet.vercel.app',
        title: 'Moonlight Ink',
        description: 'Website Institucional',
        category: 'website',
    },
    {
        id: 'flad-cartazes',
        image: '/assets/portfolio/outsiders.webp',
        link: '#',
        title: 'FLAD',
        description: 'Design de Cartazes & Branding',
        category: 'branding',
    },
    {
        id: 'startup-world-cup-branding',
        image: '/assets/portfolio/startup-world-cup.png',
        link: '#',
        title: 'Startup World Cup',
        description: 'Identidade Visual & Branding',
        category: 'branding',
    }
];

const PortfolioClient = () => {
    useScrollReveal();
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [activeModalItem, setActiveModalItem] = useState(null);
    const [iframeLoading, setIframeLoading] = useState(true);

    const openModal = (item) => {
        setActiveModalItem(item);
        setIframeLoading(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setActiveModalItem(null);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        document.body.classList.add('portfolio-body');

        // Reveal Hero Logic
        const h1 = document.getElementById('hero-title');
        const p = document.getElementById('hero-subtitle');

        if (h1 && p) {
            h1.style.transition = 'all 1s ease-out';
            h1.style.opacity = '1';
            h1.style.transform = 'translateY(0)';

            setTimeout(() => {
                p.style.transition = 'all 1s ease-out';
                p.style.opacity = '1';
                p.style.transform = 'translateY(0)';
            }, 300);
        }

        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${posX}px`;
                cursorDotRef.current.style.top = `${posY}px`;
            }

            // Outline follows with animation
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Logic for other links to expand cursor
        const handleLinkEnter = () => {
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.width = '60px';
                cursorOutlineRef.current.style.height = '60px';
                cursorOutlineRef.current.style.backgroundColor = 'rgba(58, 0, 255, 0.05)';
            }
        };

        const handleLinkLeave = () => {
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.width = '40px';
                cursorOutlineRef.current.style.height = '40px';
                cursorOutlineRef.current.style.backgroundColor = 'transparent';
            }
        };

        const links = document.querySelectorAll('a:not(.project-item), button');
        links.forEach(el => {
            el.addEventListener('mouseenter', handleLinkEnter);
            el.addEventListener('mouseleave', handleLinkLeave);
        });

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.classList.remove('portfolio-body');
            document.body.style.overflow = '';
            window.removeEventListener('mousemove', handleMouseMove);
            links.forEach(el => {
                el.removeEventListener('mouseenter', handleLinkEnter);
                el.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []);

    const filteredItems = selectedFilter === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter(item => item.category === selectedFilter);

    return (
        <>
            {/* Custom Cursor Elements */}
            <div className="cursor-dot" ref={cursorDotRef}></div>
            <div className="cursor-outline" ref={cursorOutlineRef}></div>

            <main>
                <section className="portfolio-hero">
                    <div className="container">
                        <h1 id="hero-title">Resultados começam<br />com estratégia</h1>
                        <p id="hero-subtitle">Alguns dos projetos onde ajudámos marcas a fortalecer a sua presença digital e identidade.</p>
                    </div>
                </section>

                {/* Portfolio Showcase Grid */}
                <section className="portfolio-showcase-section">
                    <div className="container">
                        {/* Filters */}
                        <div className="portfolio-filters">
                            <button
                                className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                                onClick={() => setSelectedFilter('all')}
                            >
                                Tudo
                            </button>
                            <button
                                className={`filter-btn ${selectedFilter === 'website' ? 'active' : ''}`}
                                onClick={() => setSelectedFilter('website')}
                            >
                                Websites
                            </button>
                            <button
                                className={`filter-btn ${selectedFilter === 'branding' ? 'active' : ''}`}
                                onClick={() => setSelectedFilter('branding')}
                            >
                                Logos & Branding
                            </button>
                        </div>

                        {/* Grid */}
                        <div className="portfolio-grid">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="portfolio-card-wrapper"
                                >
                                    {item.category === 'website' ? (
                                        // Website Mockup Frame
                                        <div className="portfolio-card browser-card">
                                            <div className="browser-frame">
                                                <div className="browser-header">
                                                    <div className="browser-dots">
                                                        <span className="dot red"></span>
                                                        <span className="dot yellow"></span>
                                                        <span className="dot green"></span>
                                                    </div>
                                                    <div className="browser-address-bar">
                                                        {item.link !== '#' ? item.link.replace('https://', '') : `${item.title.toLowerCase().replace(/\s+/g, '')}.pt`}
                                                    </div>
                                                </div>
                                                <div className="browser-content">
                                                    <img src={item.image} alt={item.title} />
                                                    <div className="portfolio-overlay">
                                                        <div className="portfolio-overlay-content">
                                                            <span className="item-category">Website</span>
                                                            <h3>{item.title}</h3>
                                                            <p>{item.description}</p>
                                                            <button
                                                                type="button"
                                                                onClick={() => openModal(item)}
                                                                className="visit-site-link"
                                                            >
                                                                Ver Website
                                                                <img src="/assets/portfolio/visitar website.webp" alt="" className="link-arrow-img" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-info-below">
                                                <h3>{item.title}</h3>
                                                <span className="badge-category">Website</span>
                                            </div>
                                        </div>
                                    ) : (
                                        // Branding Presentation Frame
                                        <div className="portfolio-card branding-card">
                                            <div className="branding-frame">
                                                <div className="branding-content">
                                                    <img src={item.image} alt={item.title} />
                                                    <div className="portfolio-overlay">
                                                        <div className="portfolio-overlay-content">
                                                            <span className="item-category">Branding & Logo</span>
                                                            <h3>{item.title}</h3>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-info-below">
                                                <h3>{item.title}</h3>
                                                <span className="badge-category">Branding</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Visual Gallery (Refactored) */}
                <section className="gallery-section refactored-gallery">
                    <div className="container" style={{ position: 'relative' }}>
                        <div className="gallery-flex">
                            <div className="gallery-flex-item">
                                <img src="/assets/portfolio/detalhe-1.png"
                                    alt="Work 1" />
                            </div>
                            <div className="gallery-flex-item text-center">
                                <div className="gallery-text-block">
                                    <h3>O Detalhe Importa.</h3>
                                    <p>Cada pixel é pensado. Cada interação é planeada. Não deixamos
                                        nada ao acaso.</p>
                                </div>
                            </div>
                            <div className="gallery-flex-item">
                                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
                                    alt="Work 2" />
                            </div>
                            <div className="gallery-flex-item">
                                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
                                    alt="Work 3" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Creative CTA */}
                <section className="creative-cta">
                    <div className="container">
                        <ScrollFloat
                            containerClassName="cta-title"
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='top 60%'
                            scrollEnd='top 10%'
                            stagger={0.06}
                        >
                            {`Leve o seu projeto mais longe`}
                        </ScrollFloat>
                        <div className="cta-buttons">
                            <Link href="/contactos" className="btn btn-primary">Começar Agora</Link>
                            <Link href="/#servicos" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Ver Serviços</Link>
                        </div>
                    </div>
                </section>

                <ContactSection />
            </main>

            {/* Iframe Website Preview Modal */}
            {activeModalItem && (
                <div className="portfolio-modal-overlay" onClick={closeModal}>
                    <div className="portfolio-modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="portfolio-modal-header">
                            <div className="modal-header-left">
                                <div className="modal-header-dots">
                                    <span className="dot red" onClick={closeModal} title="Fechar"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <span className="modal-project-title">{activeModalItem.title}</span>
                            </div>
                            <div className="modal-header-address">
                                <span className="lock-icon">🔒</span>
                                <span className="address-text">
                                    {activeModalItem.link && activeModalItem.link !== '#'
                                        ? activeModalItem.link
                                        : `https://${activeModalItem.title.toLowerCase().replace(/\s+/g, '')}.pt`}
                                </span>
                            </div>
                            <div className="modal-header-actions">
                                {activeModalItem.link && activeModalItem.link !== '#' && (
                                    <a
                                        href={activeModalItem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-external-link"
                                        title="Abrir em novo separador"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        <span className="ext-text">Abrir no Navegador</span>
                                    </a>
                                )}
                                <button type="button" className="modal-close-btn" onClick={closeModal} aria-label="Fechar preview">
                                    ✕
                                </button>
                            </div>
                        </div>
                        <div className="portfolio-modal-body">
                            {iframeLoading && (
                                <div className="modal-iframe-loader">
                                    <div className="spinner"></div>
                                    <p>A carregar website <span>{activeModalItem.title}</span>...</p>
                                </div>
                            )}
                            <iframe
                                src={activeModalItem.link && activeModalItem.link !== '#'
                                    ? activeModalItem.link
                                    : `https://${activeModalItem.title.toLowerCase().replace(/\s+/g, '')}.pt`}
                                title={`Preview - ${activeModalItem.title}`}
                                className={`portfolio-modal-iframe ${iframeLoading ? 'loading' : 'loaded'}`}
                                onLoad={() => setIframeLoading(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PortfolioClient;

