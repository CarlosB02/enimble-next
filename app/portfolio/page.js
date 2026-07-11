'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import InfiniteMenu from '@/components/ui/InfiniteMenu';
import ContactSection from '@/components/sections/ContactSection';
import './Portfolio.css';
import ScrollFloat from '@/components/ui/ScrollFloat';

const Portfolio = () => {
    useScrollReveal();
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    // Gallery Scroll Logic
    const galleryRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (galleryRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
            const scrollableDist = scrollWidth - clientWidth;
            if (scrollableDist > 0) {
                const scrolled = (scrollLeft / scrollableDist) * 100;
                setScrollProgress(scrolled);
            }
        }
    };

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

            // Outline follows with animation
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Add Event Listeners for Hover Effects via Delegation or direct attachment
        // Since we are in React, we can attach handlers directly in JSX mostly,
        // but for 'a' tags outside our control (like nav), global is harder.
        // We will handle project items specifically in JSX.

        // Logic for other links to expand cursor
        const handleLinkEnter = () => {
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.width = '60px';
                cursorOutlineRef.current.style.height = '60px';
                cursorOutlineRef.current.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }
        };

        const handleLinkLeave = () => {
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.width = '40px';
                cursorOutlineRef.current.style.height = '40px';
                cursorOutlineRef.current.style.backgroundColor = 'transparent';
            }
        };

        // Attach to general links not caught by React (if any) or simplified usage
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

                <section style={{ height: '600px', position: 'relative', margin: '4rem 0' }}>
                    <InfiniteMenu items={[
                        {
                            image: '/assets/portfolio/moving-people-website.png',
                            link: '#',
                            title: 'Moving People',
                            description: 'Website',
                            position: 'top center',
                            iframe: 'https://movingpeople.com'
                        },
                        {
                            image: '/assets/portfolio/moving-people-ads.png',
                            link: '#',
                            title: 'Moving People',
                            description: 'Anuncios Pagos',
                            fit: 'contain'
                        },
                        {
                            image: '/assets/portfolio/carmetrix-website.png',
                            link: '#',
                            title: 'Carmetrix',
                            description: 'Website',
                            position: 'top center',
                            iframe: 'https://carmetrix.pt'
                        },
                        {
                            image: '/assets/portfolio/carmetrix-branding.png',
                            link: '#',
                            title: 'Carmetrix',
                            description: 'Branding',
                            fit: 'contain'
                        },
                        {
                            image: '/assets/portfolio/file-on-website.png',
                            link: '#',
                            title: 'File On',
                            description: 'Website',
                            position: 'top center',
                            iframe: 'https://fileon.pt'
                        },
                        {
                            image: '/assets/portfolio/viriatus-brunch-logo.png',
                            link: '#',
                            title: 'Viriatus Brunch',
                            description: 'Branding'
                        },
                        {
                            image: '/assets/portfolio/viriatus-brunch-website.png',
                            link: '#',
                            title: 'Viriatus Brunch',
                            description: 'Website',
                            position: 'top center',
                            iframe: 'https://viriatusbrunch.pt'
                        },
                        {
                            image: '/assets/portfolio/loja-dos-pets-website.png',
                            link: '#',
                            title: 'Loja dos Pets',
                            description: 'Website',
                            position: 'top center'
                        },
                        {
                            image: '/assets/portfolio/polly-photo-website.png',
                            link: '#',
                            title: 'Polly',
                            description: 'Website',
                            iframe: 'https://polly.photo/pt',
                            position: 'top center'
                        },
                        {
                            image: '/assets/portfolio/polly.photo-logo.png',
                            link: '#',
                            title: 'Polly',
                            description: 'Branding',
                            fit: 'contain'
                        },
                        {
                            image: '/assets/portfolio/orion-aviation-website.png',
                            link: '#',
                            title: 'Orion Aviation',
                            description: 'Website',
                            position: 'top center',
                            iframe: 'https://orionaviation.eu'
                        }
                    ]} scale={1} />
                </section>

                {/* Methodology Section */}
                <section className="methodology-section">
                    <div className="container">
                        <div className="methodology-header">
                            <h2 className="section-title-large">Metodologia Própria</h2>
                            <p className="section-subtitle">Somos criativos mas não improvisamos</p>
                        </div>
                        <div className="methodology-grid">
                            <div className="methodology-item">
                                <span className="step-number">01</span>
                                <h3>Diagnóstico Estratégico</h3>
                            </div>
                            <div className="methodology-item">
                                <span className="step-number">02</span>
                                <h3>Definição de Objetivos e KPIs</h3>
                            </div>
                            <div className="methodology-item">
                                <span className="step-number">03</span>
                                <h3>Execução Focada em Conversão</h3>
                            </div>
                            <div className="methodology-item">
                                <span className="step-number">04</span>
                                <h3>Otimização Contínua</h3>
                            </div>
                            <div className="methodology-item">
                                <span className="step-number">05</span>
                                <h3>Reporting<br />Estratégico</h3>
                            </div>
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
        </>
    );
};

export default Portfolio;
