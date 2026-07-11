'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactModal from '@/components/forms/ContactModal';
import './WebsiteDesign.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const WebsiteDesign = () => {
    const canvasRef = useRef(null);
    const heroRef = useRef(null);
    const zoomRef = useRef(null);
    const [zoomProgress, setZoomProgress] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalSubject, setModalSubject] = useState("");

    // Mobile Carousel Active State Hooks
    const [servicesActiveIndex, setServicesActiveIndex] = useState(0);
    const [painActiveIndex, setPainActiveIndex] = useState(0);
    const [processActiveIndex, setProcessActiveIndex] = useState(0);
    const [casesActiveIndex, setCasesActiveIndex] = useState(0);

    // Refs for mobile scrollable grid elements
    const servicesGridRef = useRef(null);
    const painGridRef = useRef(null);
    const processGridRef = useRef(null);
    const casesGridRef = useRef(null);

    // Generic helper to track mobile scroll active index
    const getActiveIndexFromScroll = (container, selector) => {
        try {
            const items = container.querySelectorAll(selector);
            if (!items || !items.length) return 0;
            
            const firstItem = items[0];
            if (!firstItem) return 0;
            
            const itemWidth = firstItem.offsetWidth || 285;
            const gap = 20; // 1.25rem gap
            
            const scrollLeft = container.scrollLeft || 0;
            const index = Math.round(scrollLeft / (itemWidth + gap));
            
            return Math.max(0, Math.min(index, items.length - 1));
        } catch (err) {
            console.error('Error in getActiveIndexFromScroll:', err);
            return 0;
        }
    };

    // Generic helper to scroll to a specific card index
    const scrollToCard = (ref, selector, index, setIndex) => {
        const container = ref.current;
        if (!container) return;
        const items = container.querySelectorAll(selector);
        if (items[index]) {
            items[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            setIndex(index);
        }
    };

    const handleServicesScroll = (e) => {
        setServicesActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.wd-service-card'));
    };

    const handlePainScroll = (e) => {
        setPainActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.wd-checklist-item'));
    };

    const handleProcessScroll = (e) => {
        setProcessActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.wd-process-card'));
    };

    const handleCasesScroll = (e) => {
        setCasesActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.wd-case-card'));
    };

    // Lock scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    // 3D Computer Zoom Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (!zoomRef.current) return;
            const rect = zoomRef.current.getBoundingClientRect();
            const { top, height } = rect;
            const windowHeight = window.innerHeight;

            const scrollDistance = -top;
            const totalScrollable = height - windowHeight;

            if (scrollDistance <= 0) {
                setZoomProgress(0);
            } else if (scrollDistance >= totalScrollable) {
                setZoomProgress(1);
            } else {
                let progress = scrollDistance / totalScrollable;
                setZoomProgress(Math.max(0, Math.min(1, progress)));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hero Canvas Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationFrameId;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            createParticles();
        };

        const createParticles = () => {
            particles = [];
            const count = Math.floor(width * height / 15000);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Magnetic Button Effect
    useEffect(() => {
        const btns = document.querySelectorAll('.magnetic-btn');
        if (!btns.length) return;

        const cleanups = [];

        btns.forEach((btn) => {
            const handleMouseMove = (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            };

            const handleMouseLeave = () => {
                btn.style.transform = 'translate(0, 0)';
            };

            btn.addEventListener('mousemove', handleMouseMove);
            btn.addEventListener('mouseleave', handleMouseLeave);

            cleanups.push(() => {
                btn.removeEventListener('mousemove', handleMouseMove);
                btn.removeEventListener('mouseleave', handleMouseLeave);
            });
        });

        return () => {
            cleanups.forEach((cleanup) => cleanup());
        };
    }, []);

    // GSAP Hero Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance Animations
            const tl = gsap.timeline();

            tl.fromTo('.glitch-text',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
            )
                .fromTo('.subtitle-reveal',
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                    '-=0.5'
                )
                .fromTo('.scroll-indicator',
                    { opacity: 0 },
                    { opacity: 0.7, duration: 1 },
                    '-=0.3'
                );

            // Scroll Parallax/Fade
            gsap.to('.hero-overlay', {
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                y: 100,
                opacity: 0,
                ease: 'none'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);


    return (
        <main className="website-design-page">
            <div className="bg-glow-blue"></div>
            <div className="bg-glow-red"></div>
            {/* Interactive Hero Section — UNCHANGED */}
            <section className="creative-hero" ref={heroRef}>
                <canvas id="hero-canvas" ref={canvasRef}></canvas>
                <div className="hero-overlay">
                    <h1 className="glitch-text" data-text="Não criamos sites.">Não criamos sites.</h1>
                    <h2 className="subtitle-reveal">Criamos <span className="highlight-creative">Experiências Digitais.</span>
                    </h2>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll</span>
                    <div className="mouse-icon">
                        <div className="wheel"></div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 3: SERVICE CATALOG (BROWSER STYLE) ===== */}
            <section className="wd-services-section">
                <div className="container">
                    <div className="wd-services-header">
                        <h2>Criamos websites com um único objetivo: <span className="gradient-word">Resultados</span></h2>
                        <p>Cada projeto é guiado por estratégia e validado por dados reais.</p>
                    </div>

                    <div className="wd-services-grid-container">
                        <div className="wd-services-grid" ref={servicesGridRef} onScroll={handleServicesScroll}>
                            {[
                                {
                                    title: "Sites Institucionais",
                                    desc: "Construa autoridade, inspire confiança e destaque-se no seu setor.",
                                    tag: "Autoridade de Marca",
                                    preview: "https://panoramas.pt",
                                    icon: "/servicos/website-design/e-nimble-corporate-website-authority.png",
                                    linkText: "Quero Autoridade Online"
                                },
                                {
                                    title: "E-Commerce",
                                    desc: "Lojas online concebidas para vender mais, com uma experiência de compra sem fricção.",
                                    tag: "Máquinas de Vendas",
                                    preview: "https://inpe.pt",
                                    icon: "/servicos/website-design/e-nimble-ecommerce-conversion-store.png",
                                    linkText: "Quero Vender Online"
                                },
                                {
                                    title: "Landing Pages",
                                    desc: "Páginas focadas num único objetivo: transformar visitantes em clientes.",
                                    tag: "Geração de Leads",
                                    preview: "https://polly.photo",
                                    icon: "/servicos/website-design/e-nimble-lead-generation-landing-page.png",
                                    linkText: "Quero Gerar Leads"
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="wd-service-card">
                                    {/* Browser Mockup Window with Iframe */}
                                    <div className="wd-browser-mockup">
                                        <div className="mockup-header">
                                            <div className="header-dot"></div>
                                            <div className="header-dot"></div>
                                            <div className="header-dot"></div>
                                            <div className="mockup-url">
                                                {service.preview.replace('https://', '')}
                                            </div>
                                        </div>
                                        <div className="iframe-wrapper">
                                            <iframe
                                                src={service.preview}
                                                className="iframe-preview"
                                                title={service.title}
                                                loading="lazy"
                                            />
                                            <div className="iframe-overlay"></div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="wd-service-content">
                                        <span className="wd-service-tag">{service.tag}</span>
                                        <div className="wd-service-card-header">
                                            <div className="wd-service-icon">
                                                <img src={service.icon} alt={service.title} />
                                            </div>
                                            <h3>{service.title}</h3>
                                        </div>
                                        <p>{service.desc}</p>

                                        <div
                                            className="wd-service-link"
                                            onClick={() => {
                                                setModalSubject("website");
                                                setIsModalOpen(true);
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {service.linkText || "VER CASOS DE ESTUDO"}
                                            <span className="arrow">↗</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Carousel navigation dots for mobile view */}
                        <div className="carousel-dots">
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-dot ${servicesActiveIndex === idx ? 'active' : ''}`}
                                    onClick={() => scrollToCard(servicesGridRef, '.wd-service-card', idx, setServicesActiveIndex)}
                                    onTouchEnd={(e) => {
                                        e.preventDefault();
                                        scrollToCard(servicesGridRef, '.wd-service-card', idx, setServicesActiveIndex);
                                    }}
                                    aria-label={`Ir para o serviço ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 2: PAIN vs. SOLUTION ===== */}
            <section className="wd-pain-section">
                <div className="container">
                    <div className="wd-pain-header">
                        <h2>O Seu Website está a<span className="gradient-word"> perder clientes se...</span></h2>
                    </div>

                    <div className="wd-checklist-container">
                        <div className="wd-checklist-grid" ref={painGridRef} onScroll={handlePainScroll}>
                            <div className="wd-checklist-item">
                                <div className="wd-checklist-icon">
                                    <img src="/servicos/website-design/slow-website-loading-impact.png" alt="Slow website loading impact - e-nimble" className="wd-checklist-img" />
                                </div>
                                <div className="wd-checklist-text">
                                    <h3>Carrega lentamente</h3>
                                    <p>O tempo é o seu ativo mais escasso.</p>
                                </div>
                            </div>

                            <div className="wd-checklist-item">
                                <div className="wd-checklist-icon">
                                    <img src="/servicos/website-design/website-clarity-strategy.png" alt="Website clarity and strategy - e-nimble" className="wd-checklist-img" />
                                </div>
                                <div className="wd-checklist-text">
                                    <h3>Não é claro o que fazer</h3>
                                    <p>Se não é óbvio, não funciona.</p>
                                </div>
                            </div>

                            <div className="wd-checklist-item">
                                <div className="wd-checklist-icon">
                                    <img src="/servicos/website-design/e-nimble-premium-design-trust.png" alt="Design premium e profissional - e-nimble" className="wd-checklist-img" />
                                </div>
                                <div className="wd-checklist-text">
                                    <h3>Parece pouco profissional</h3>
                                    <p>As primeiras impressões vendem.</p>
                                </div>
                            </div>

                            <div className="wd-checklist-item">
                                <div className="wd-checklist-icon">
                                    <img src="/servicos/website-design/website-lead-conversion-results.png" alt="Website lead conversion and results - e-nimble" className="wd-checklist-img" />
                                </div>
                                <div className="wd-checklist-text">
                                    <h3>Não gera contactos</h3>
                                    <p>Visitas sem ação não pagam contas.</p>
                                </div>
                            </div>
                        </div>
                        {/* Carousel navigation dots for mobile view */}
                        <div className="carousel-dots">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-dot ${painActiveIndex === idx ? 'active' : ''}`}
                                    onClick={() => scrollToCard(painGridRef, '.wd-checklist-item', idx, setPainActiveIndex)}
                                    onTouchEnd={(e) => {
                                        e.preventDefault();
                                        scrollToCard(painGridRef, '.wd-checklist-item', idx, setPainActiveIndex);
                                    }}
                                    aria-label={`Ir para o ponto ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="wd-stat-bar">
                        <div className="wd-stat-item">
                            <div className="wd-stat-number">75%</div>
                            <div className="wd-stat-label">dos utilizadores julgam a credibilidade pelo design</div>
                        </div>
                        <div className="wd-stat-item">
                            <div className="wd-stat-number">94%</div>
                            <div className="wd-stat-label">das primeiras impressões estão relacionadas com o visual</div>
                        </div>
                        <div className="wd-stat-item">
                            <div className="wd-stat-number">38%</div>
                            <div className="wd-stat-label">abandonam se o layout não é atrativo</div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ===== SECTION 4: GROWTH-DRIVEN PROCESS ===== */}
            <section className="wd-process-section">
                <div className="container">
                    <div className="wd-process-header">
                        <h2>Estratégia Orientada ao <span className="gradient-word">Crescimento</span></h2>
                        <p>Os bons resultados são consequência de uma estratégia bem definida.</p>
                    </div>

                    <div className="wd-process-container">
                        <div className="wd-process-grid" ref={processGridRef} onScroll={handleProcessScroll}>
                            <div className="wd-process-card">
                                <h3>01. Compreender</h3>
                                <p>Analisamos o seu negócio e objetivos.</p>
                            </div>

                            <div className="wd-process-card">
                                <h3>02. Design</h3>
                                <p>Alinhamos experiência e estética.</p>
                            </div>

                            <div className="wd-process-card">
                                <h3>03. Performance</h3>
                                <p>Velocidade, SEO e experiência.</p>
                            </div>

                            <div className="wd-process-card">
                                <h3>04. Otimização</h3>
                                <p>Medimos e otimizamos com base em dados.</p>
                            </div>
                        </div>
                        {/* Carousel navigation dots for mobile view */}
                        <div className="carousel-dots">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-dot ${processActiveIndex === idx ? 'active' : ''}`}
                                    onClick={() => scrollToCard(processGridRef, '.wd-process-card', idx, setProcessActiveIndex)}
                                    onTouchEnd={(e) => {
                                        e.preventDefault();
                                        scrollToCard(processGridRef, '.wd-process-card', idx, setProcessActiveIndex);
                                    }}
                                    aria-label={`Ir para a etapa ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION 5: CASE STUDIES ===== */}
            <section className="wd-cases-section">
                <div className="container">
                    <div className="wd-cases-header">
                        <span className="section-label">Casos de Sucesso</span>
                        <h2>Projetos que Elevam o <span className="gradient-word">Padrão Digital</span></h2>
                        <p>Uma seleção de websites que combinam estética impecável com engenharia de conversão.</p>
                    </div>

                    <div className="wd-cases-container">
                        <div className="wd-cases-grid" ref={casesGridRef} onScroll={handleCasesScroll}>
                            {[
                                { name: "Inpe", type: "E-Commerce", industry: "Calçado", url: "https://inpe.pt" },
                                { name: "Panoramas", type: "Institucional", industry: "Informação e Comunicação", url: "https://panoramas.pt", zoomed: true },
                                { name: "Orion Technik", type: "Institucional", industry: "Aviação & Defesa", url: "https://orionaviation.eu" },
                                { name: "Viriatus Brunch", type: "Institucional", industry: "Restauração", url: "https://viriatusbrunch.pt" },
                                { name: "Polly", type: "Landing Page", industry: "Tecnologia", url: "https://polly.photo" },
                                { isCTA: true },
                            ].map((item, idx) => (
                                item.isCTA ? (
                                    <div key={idx} className="wd-case-card wd-case-cta">
                                        <div className="wd-case-cta-inner">
                                            <div className="cta-content">
                                                <div className="cta-icon">＋</div>
                                                <h3>Ver Todos</h3>
                                                <p>Explore o nosso portfólio completo de soluções digitais.</p>
                                                <a href="/portfolio" className="wd-cta-link">
                                                    Ir para o Portfólio <span className="arrow">→</span>
                                                </a>
                                            </div>
                                        </div>
                                        {/* Spacer to match height of info section in other cards */}
                                        <div className="wd-case-info-spacer"></div>
                                    </div>
                                ) : (
                                    <div key={idx} className="wd-case-card">
                                        {/* Browser Mockup Window with Iframe */}
                                        <div className="wd-browser-mockup">
                                            <div className="mockup-header">
                                                <div className="header-dot"></div>
                                                <div className="header-dot"></div>
                                                <div className="header-dot"></div>
                                                <div className="mockup-url">
                                                    {item.url.replace('https://', '')}
                                                </div>
                                            </div>
                                            <div className="iframe-wrapper">
                                                <iframe
                                                    src={item.url}
                                                    className={`iframe-preview ${item.zoomed ? 'iframe-zoomed' : ''}`}
                                                    title={item.name}
                                                    loading="lazy"
                                                />
                                                <div className="iframe-overlay"></div>
                                            </div>
                                        </div>

                                        {/* Case Info Below Card */}
                                        <div className="wd-case-info">
                                            <div className="info-left">
                                                <h3>{item.name}</h3>
                                                <p>{item.type}</p>
                                            </div>
                                            <div className="info-right">
                                                <span className="industry-tag">{item.industry}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                        {/* Carousel navigation dots for mobile view */}
                        <div className="carousel-dots">
                            {Array.from({ length: 6 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-dot ${casesActiveIndex === idx ? 'active' : ''}`}
                                    onClick={() => scrollToCard(casesGridRef, '.wd-case-card', idx, setCasesActiveIndex)}
                                    onTouchEnd={(e) => {
                                        e.preventDefault();
                                        scrollToCard(casesGridRef, '.wd-case-card', idx, setCasesActiveIndex);
                                    }}
                                    aria-label={`Ir para o caso ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ===== SECTION 5.5: 3D COMPUTER ZOOM CTA ===== */}
            <section className="wd-zoom-section" ref={zoomRef}>
                <div className="wd-zoom-sticky">
                    {(() => {
                        // Reaches 100% zoom focus at 70% of the section scroll
                        const focusProgress = Math.min(1, zoomProgress / 0.7);
                        const scaleVal = 1 + Math.pow(focusProgress, 1.4) * 1.2;
                        const counterScaleVal = 1 - focusProgress * 0.2;

                        return (
                            <>
                                {/* Ambient Radial Lighting Glow */}
                                <div
                                    className="wd-zoom-bg-glow"
                                    style={{ opacity: Math.min(1, 0.2 + focusProgress * 0.8) }}
                                ></div>

                                {/* 3D Computer Workstation Rig */}
                                <div
                                    className="wd-computer-rig"
                                    style={{
                                        transform: `scale(${scaleVal})`,
                                    }}
                                >
                                    {/* Monitor Chassis (Dead Centered Vertically) */}
                                    <div className="wd-monitor-chassis">
                                        {/* Bezel */}
                                        <div
                                            className="wd-monitor-bezel"
                                            style={{
                                                opacity: Math.max(0, 1 - (focusProgress - 0.25) * 2.8),
                                            }}
                                        >
                                            <div className="wd-camera-dot"></div>
                                        </div>

                                        {/* Monitor Screen Area */}
                                        <div className="wd-monitor-screen">
                                            <div className="wd-screen-grid-bg"></div>

                                            {/* CTA Content inside the Monitor Screen */}
                                            <div
                                                className="wd-screen-cta-container"
                                                style={{
                                                    transform: `scale(${counterScaleVal})`,
                                                    opacity: Math.min(1, 0.9 + focusProgress * 0.1)
                                                }}
                                            >
                                                <h2 className="wd-zoom-title">
                                                    Pronto para o seu website <br />
                                                    <span className="gradient-word">gerar resultados?</span>
                                                </h2>
                                                <p className="wd-zoom-subtitle">
                                                    Vamos construir um website preparado para crescer com o seu negócio.
                                                </p>
                                                <div className="wd-zoom-action">
                                                    <button
                                                        className="magnetic-btn wd-zoom-btn"
                                                        onClick={() => {
                                                            setModalSubject("website");
                                                            setIsModalOpen(true);
                                                        }}
                                                    >
                                                        <span className="btn-text">Começar Projeto</span>
                                                        <div className="btn-fill"></div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stand & Base (Positioned relative to chassis) */}
                                        <div
                                            className="wd-monitor-stand"
                                            style={{
                                                opacity: Math.max(0, 1 - focusProgress * 2.2),
                                                transform: `translateX(-50%) translateY(${focusProgress * 30}px)`
                                            }}
                                        ></div>
                                        <div
                                            className="wd-monitor-base"
                                            style={{
                                                opacity: Math.max(0, 1 - focusProgress * 2.2),
                                                transform: `translateX(-50%) translateY(${focusProgress * 50}px)`
                                            }}
                                        ></div>
                                    </div>

                                    {/* Keyboard on Desk */}
                                    <div
                                        className="wd-desk-keyboard"
                                        style={{
                                            opacity: Math.max(0, 1 - focusProgress * 2.4),
                                            transform: `translateX(-50%) translateY(${focusProgress * 70}px) rotateX(55deg)`
                                        }}
                                    >
                                        <div className="keyboard-keys"></div>
                                    </div>
                                </div>

                                {/* Scroll Hint overlay when zoom is low */}
                                <div
                                    className="wd-zoom-hint"
                                    style={{ opacity: Math.max(0, 1 - focusProgress * 4) }}
                                >
                                    <span>Scroll para aproximar</span>
                                    <div className="scroll-arrow">↓</div>
                                </div>
                            </>
                        );
                    })()}
                </div>
            </section>
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultSubject={modalSubject}
            />
        </main>
    );
};

export default WebsiteDesign;
