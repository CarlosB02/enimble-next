'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from '@/components/forms/ContactForm';
import './WebsiteDesign.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const WebsiteDesign = () => {
    const canvasRef = useRef(null);
    const heroRef = useRef(null);
    const transRef = useRef(null);
    const [transStep, setTransStep] = useState(0);

    // Transformation Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (!transRef.current) return;
            const rect = transRef.current.getBoundingClientRect();
            const { top, height } = rect;
            const windowHeight = window.innerHeight;

            const scrollDistance = -top;
            const totalScrollable = height - windowHeight;

            if (scrollDistance < 0) {
                setTransStep(0);
            } else if (scrollDistance > totalScrollable) {
                setTransStep(3);
            } else {
                let progress = scrollDistance / totalScrollable;
                progress = Math.max(0, Math.min(1, progress));
                const step = Math.min(3, Math.floor(progress * 4));
                setTransStep(step);
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
        const btn = document.querySelector('.magnetic-btn');
        if (!btn) return;

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

        return () => {
            btn.removeEventListener('mousemove', handleMouseMove);
            btn.removeEventListener('mouseleave', handleMouseLeave);
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

                    <div className="wd-services-grid">
                        {[
                            {
                                title: "Sites Institucionais",
                                desc: "Estabeleça autoridade absoluta no seu setor. Uma sede digital que impõe respeito e constrói confiança imediata com os seus clientes.",
                                tag: "Autoridade de Marca",
                                preview: "https://panoramas.pt",
                                icon: "/servicos/website-design/e-nimble-corporate-website-authority.png"
                            },
                            {
                                title: "E-Commerce",
                                desc: "Lojas digitais de alta performance projetadas para a conversão. Removemos a fricção do processo de compra para fidelizar visitantes.",
                                tag: "Máquinas de Vendas",
                                preview: "https://viriatusbrunch.pt",
                                icon: "/servicos/website-design/e-nimble-ecommerce-conversion-store.png"
                            },
                            {
                                title: "Landing Pages",
                                desc: "Experiências de página única hiperfocadas e desenhadas com um objetivo: captar leads e impulsionar a ação. Perfeitas para campanhas.",
                                tag: "Geração de Leads",
                                preview: "https://polly.photo",
                                icon: "/servicos/website-design/e-nimble-lead-generation-landing-page.png"
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

                                    <div className="wd-service-link">
                                        VER CASOS DE ESTUDO
                                        <span className="arrow">↗</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SECTION 2: PAIN vs. SOLUTION ===== */}
            <section className="wd-pain-section">
                <div className="container">
                    <div className="wd-pain-header">
                        <h2>O Seu Website está a<span className="gradient-word"> perder clientes se...</span></h2>
                    </div>

                    <div className="wd-checklist-grid">
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

                    {/* Stats */}
                    <div className="wd-stat-bar">
                        <div className="wd-stat-item">
                            <div className="wd-stat-number">73%</div>
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
                        <span className="section-label">A Nossa Metodologia</span>
                        <h2>Design Orientado ao <span className="gradient-word">Crescimento</span></h2>
                        <p>Cada projeto é guiado por estratégia e validado por dados reais.</p>
                    </div>

                    <div className="wd-process-grid">
                        <div className="wd-process-card">
                            <h3>01. Discovery</h3>
                            <p>Mergulhamos no seu negócio e clientes.</p>
                        </div>

                        <div className="wd-process-card">
                            <h3>02. Wireframing</h3>
                            <p>Desenhamos a arquitetura de conversão.</p>
                        </div>

                        <div className="wd-process-card">
                            <h3>03. Engenharia</h3>
                            <p>Construímos com tecnologia de ponta.</p>
                        </div>

                        <div className="wd-process-card">
                            <h3>04. Otimização</h3>
                            <p>Medimos e iteramos com base em dados.</p>
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

                    <div className="wd-cases-grid">
                        {[
                            { name: "Atlas Beverages", type: "E-Commerce", industry: "F&B", url: "https://viriatusbrunch.pt" },
                            { name: "Forma Studio", type: "Institucional", industry: "Architecture", url: "https://panoramas.pt" },
                            { name: "Viriatus Brunch", type: "E-Commerce", industry: "Restaurante", url: "https://viriatusbrunch.pt" },
                            { name: "Panoramas", type: "Institucional", industry: "Imobiliário", url: "https://panoramas.pt" },
                            { name: "Eco Green", type: "Landing Page", industry: "Sustainability", url: "https://panoramas.pt" },
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
                                                className="iframe-preview"
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
                </div>
            </section>


            {/* ===== SECTION 5.5: TRANSFORMATION STORYTELLING ===== */}
            <section className="wd-transformation-section" ref={transRef}>
                <div className="wd-trans-sticky">
                    <div className="container wd-trans-container">

                        {/* Narrative Overlay */}
                        <div className="wd-trans-narrative">
                            <div className="section-label">A Transformação Num Piscar de Olhos</div>

                            <div className="wd-trans-texts">
                                <div className={`trans-text-step ${transStep === 0 ? 'active' : ''}`}>
                                    <h2>Isto é o aspeto de um website focado no <span className="gradient-word">criador</span>, não no utilizador.</h2>
                                    <p>Texto denso, ausência de pontos focais claros, um botão escondido. O utilizador fica confuso e abandona a página instantes depois.</p>
                                </div>

                                <div className={`trans-text-step ${transStep === 1 ? 'active' : ''}`}>
                                    <h2>1. Tornamos a Ação Óbvia</h2>
                                    <p>Primeiro passo: contraste e clareza. Destacamos o que importa (o seu Call-to-Action) para captar a atenção no momento exato de decisão.</p>
                                </div>

                                <div className={`trans-text-step ${transStep === 2 ? 'active' : ''}`}>
                                    <h2>2. Organizamos a Mensagem</h2>
                                    <p>Removemos o ruído. Implementamos tipografia legível, espaços em branco respiráveis e alinhamento intencional. A leitura torna-se fluida.</p>
                                </div>

                                <div className={`trans-text-step ${transStep === 3 ? 'active' : ''}`}>
                                    <h2>3. Resultado: Mais Conversões</h2>
                                    <p>Rematamos com prova social (estrelas, marcas confiáveis) para construir confiança absoluta. O Caos virou uma máquina de vendas premium.</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Mockup */}
                        <div className="wd-trans-visual">
                            <div className={`wd-mockup-window step-${transStep}`}>
                                <div className="mockup-browser-bar">
                                    <div className="dots"><span></span><span></span><span></span></div>
                                    <div className="url-bar">www.oseunegocio.com</div>
                                </div>

                                <div className="mockup-body">
                                    <header className="mockup-header">
                                        <div className="mockup-logo">LOGOTIPO</div>
                                        <nav className="mockup-nav">
                                            <span>Serviços</span>
                                            <span>Sobre</span>
                                            <div className="mockup-cta">Comprar</div>
                                        </nav>
                                    </header>

                                    <div className="mockup-hero">
                                        <div className="mockup-hero-content">
                                            <div className="mockup-trust hidden-element trust-badges">
                                                <span>⭐⭐⭐⭐⭐ Excelentes Avaliações</span>
                                            </div>
                                            <div className="mockup-title">
                                                <div className="line l-1"></div>
                                                <div className="line l-2"></div>
                                                <div className="line l-3 short"></div>
                                            </div>
                                            <div className="mockup-desc">
                                                <div className="desc-line"></div>
                                                <div className="desc-line"></div>
                                            </div>
                                            <div className="mockup-main-cta">FALE CONNOSCO</div>
                                        </div>
                                    </div>

                                    <div className="mockup-features">
                                        <div className="feat-box"></div>
                                        <div className="feat-box"></div>
                                        <div className="feat-box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ===== FINAL CTA ===== */}
            <section className="wd-final-cta">
                <div className="container">
                    <h2>Pronto para transformar o seu website em <span className="gradient-word">rendimento?</span></h2>
                    <p>Vamos conversar sobre como engenhamos experiências digitais que convertem visitantes em clientes.</p>
                    <Link href="/contactos" className="magnetic-btn">
                        <span className="btn-text">Começar Projeto</span>
                        <div className="btn-fill"></div>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default WebsiteDesign;
