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
        image: '/assets/portfolio/moving-people-website.webp',
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
        image: '/assets/portfolio/carmetrix-branding.webp',
        link: '#',
        title: 'Carmetrix',
        description: 'Identidade Visual & Branding',
        category: 'branding',
    },
    {
        id: 'file-on-website',
        image: '/assets/portfolio/file-on-website.webp',
        link: 'https://fileon.pt',
        title: 'File On',
        description: 'Website Corporativo de Serviços',
        category: 'website',
    },
    {
        id: 'viriatus-brunch-logo',
        image: '/assets/portfolio/viriatus-brunch-logo.webp',
        link: '#',
        title: 'Viriatus Brunch',
        description: 'Design de Logótipo & Branding',
        category: 'branding',
    },
    {
        id: 'viriatus-brunch-website',
        image: '/assets/portfolio/viriatus-brunch-website.webp',
        link: 'https://viriatusbrunch.pt',
        title: 'Viriatus Brunch',
        description: 'Website de Restauração & Menu Digital',
        category: 'website',
    },
    {
        id: 'loja-dos-pets-website',
        image: '/assets/portfolio/loja-dos-pets-website.webp',
        link: '#',
        title: 'Loja dos Pets',
        description: 'E-commerce / Loja de Animais',
        category: 'website',
    },
    {
        id: 'polly-photo-website',
        image: '/assets/portfolio/polly-photo-website.webp',
        link: 'https://polly.photo/pt',
        title: 'Polly Photo',
        description: 'Website de Portfolio Fotográfico',
        category: 'website',
    },
    {
        id: 'polly-photo-logo',
        image: '/assets/portfolio/polly.photo-logo.webp',
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
        description: 'Website Corporativo de Aviação',
        category: 'website',
    }
];

const Portfolio = () => {
    useScrollReveal();
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);
    const [selectedFilter, setSelectedFilter] = useState('all');

    useEffect(() => {
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
            document.body.classList.remove('portfolio-body');
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
                                                            {item.link !== '#' && (
                                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="visit-site-link">
                                                                    Visitar Website
                                                                    <span className="link-arrow">↗</span>
                                                                </a>
                                                            )}
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
                                <img src="/assets/portfolio/detalhe-1.webp"
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
        </>
    );
};

export default Portfolio;
