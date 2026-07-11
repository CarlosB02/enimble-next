'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import ContactSection from '@/components/sections/ContactSection';
import LottieIcon from '@/components/ui/LottieScript';
import './Home.css';
import './Contactos.css';

const HomePage = () => {
    useScrollReveal();
    const [activeIndex, setActiveIndex] = useState(0);
    const [processActiveIndex, setProcessActiveIndex] = useState(0);
    const [portfolioActiveIndex, setPortfolioActiveIndex] = useState(0);
    
    const gridRef = useRef(null);
    const processGridRef = useRef(null);
    const portfolioGridRef = useRef(null);

    // Calculate active dot based on scroll position relative to item width and gap
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

    const handleScroll = (e) => {
        setActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.service-item'));
    };

    const scrollToCard = (index) => {
        const container = gridRef.current;
        if (!container) return;
        const items = container.querySelectorAll('.service-item');
        if (items[index]) {
            items[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            setActiveIndex(index);
        }
    };

    const handleProcessScroll = (e) => {
        setProcessActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.process-flow-card'));
    };

    const scrollToProcessCard = (index) => {
        const container = processGridRef.current;
        if (!container) return;
        const items = container.querySelectorAll('.process-flow-card');
        if (items[index]) {
            items[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            setProcessActiveIndex(index);
        }
    };

    const handlePortfolioScroll = (e) => {
        setPortfolioActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.pp-card'));
    };

    const scrollToPortfolioCard = (index) => {
        const container = portfolioGridRef.current;
        if (!container) return;
        const items = container.querySelectorAll('.pp-card');
        if (items[index]) {
            items[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            setPortfolioActiveIndex(index);
        }
    };

    return (
        <main>
            <section id="hero" className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 className="fade-in">Transformamos estratégia em crescimento.</h1>
                        <p className="fade-in delay-1">Da estratégia à execução, desenvolvemos soluções digitais que impulsionam empresas ambiciosas.</p>
                        <div className="hero-buttons fade-in delay-2">
                            <a href="#servicos" className="btn btn-primary">O que podemos fazer por si?</a>
                            <a href="#contactos" className="btn btn-outline">Fale Connosco</a>
                        </div>
                    </div>
                    <div className="hero-image fade-in delay-2">
                        <img src="/assets/rocket-hero.png" alt="Rocket Launch" />
                    </div>
                </div>
                <div className="cloud-divider"></div>
            </section>

            <section id="servicos" className="services">
                <div className="container text-center mb-5">
                    <h2 className="section-title">Aumentar resultados</h2>
                    <h3 className="section-subtitle">Aumente a presença e os resultados da sua empresa hoje!</h3>
                </div>

                <div className="container services-grid-container mb-5">
                    <div className="services-grid" ref={gridRef} onScroll={handleScroll}>
                        <div className="service-item card-website">
                            <div className="card-icon">
                                <LottieIcon src="https://lottie.host/5c9a5518-11dc-4622-8612-5ae8907ec686/8eLHOX5NVK.json" />
                            </div>
                            <h3>Website Design</h3>
                            <p className="card-desc">Transforme visitantes em clientes com um site rápido, moderno e otimizado.</p>
                            <Link href="/website-design" className="card-link">Atrair Mais Clientes <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-social">
                            <div className="card-icon">
                                <LottieIcon src="https://lottie.host/4886a942-45cf-4b3f-96d7-d66bf818bfc4/pw0h3HS12Z.json" />
                            </div>
                            <h3>Redes Sociais</h3>
                            <p className="card-desc">Construa uma comunidade leal e aumente o alcance da sua marca.</p>
                            <Link href="/redes-sociais" className="card-link">Ganhar Visibilidade <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-email">
                            <div className="card-icon">
                                <LottieIcon src="https://lottie.host/bc961cf8-ebe1-4f7c-8b67-cd20927832e7/AFWRhMAMNS.json" />
                            </div>
                            <h3>Lojas E-commerce</h3>
                            <p className="card-desc">Venda 24/7 com uma loja online automatizada e segura.</p>
                            <Link href="/ecommerce" className="card-link">Expandir o Mercado <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-ads">
                            <div className="card-icon">
                                <LottieIcon src="https://lottie.host/f0cc2f57-20d5-4009-96d0-f64fc3bf86a1/hrOaqeeD1o.json" />
                            </div>
                            <h3>Anúncios Pagos</h3>
                            <p className="card-desc">Alcance o público certo no momento certo com campanhas de alto retorno.</p>
                            <Link href="/ads" className="card-link">Acelerar Vendas <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-automation">
                            <div className="card-icon">
                                <LottieIcon src="https://lottie.host/4ac68310-62a1-4fe3-ae59-d4e3a6ac8328/czJrojWHvi.json" />
                            </div>
                            <h3>AI e Automação</h3>
                            <p className="card-desc">Otimize processos com inteligência artificial e automação de tarefas.</p>
                            <Link href="/automacao" className="card-link">Aumentar Eficiência <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-branding">
                            <div className="card-icon">
                                <LottieIcon src="https://lottie.host/edb6c29a-de5a-48f1-9746-673e126e5cc9/VSgbbbBOSO.json" />
                            </div>
                            <h3>Branding & Brindes</h3>
                            <p className="card-desc">Crie uma marca inesquecível com logótipos e identidade visual.</p>
                            <Link href="/branding" className="card-link">Dominar o Mercado <span className="arrow">→</span></Link>
                        </div>
                    </div>
                    {/* Carousel navigation dots for mobile view */}
                    <div className="carousel-dots">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(idx)}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    scrollToCard(idx);
                                }}
                                aria-label={`Ir para o serviço ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="container">
                    <div className="service-card formacao-card reveal">
                        <div className="service-content">
                            <h2>Formação certificada para a sua empresa.
                                <span className="gradient-text"> Financiamento até 100%.</span></h2>
                            <p className="fc-lead">
                                Programas práticos e certificados, com possibilidade de financiamento até 100%, através de entidades formadoras parceiras.
                            </p>

                            <div className="fc-features">
                                <div className="fc-feature-item">
                                    <div className="fc-feature-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 10 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Entidades certificadas DGERT & SIGO</strong>
                                        <p>Emissão de certificados oficiais com validade nacional</p>
                                    </div>
                                </div>

                                <div className="fc-feature-item">
                                    <div className="fc-feature-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="1" x2="12" y2="23" />
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Financiamento a 100%</strong>
                                        <p>Apoiamos a candidatura aos incentivos disponíveis.</p>
                                    </div>
                                </div>

                                <div className="fc-feature-item">
                                    <div className="fc-feature-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Programas à Medida do Negócio</strong>
                                        <p>Conteúdos adaptados aos objetivos e desafios da sua empresa.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="fc-actions">
                                <Link href="/formacao" className="btn btn-primary">
                                    Explorar Oferta Formativa
                                </Link>
                            </div>
                        </div>

                        <div className="service-image formacao-image-wrapper">
                            <div className="formacao-image-card">
                                <img src="/assets/team-new.png" alt="Formação Empresarial e-nimble" />
                                <div className="fc-floating-badge badge-bottom">
                                    <img src="/assets/lightning.png" alt="Flash" style={{ width: '24px', height: '24px' }} className="fc-badge-icon" />
                                    <div>
                                        <strong>100% Dedutível</strong>
                                        <small>Sem Custo Empresarial</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section className="portfolio-preview-section">
                <div className="container">
                    <div className="pp-header reveal">
                        <span className="pp-chip">Trabalhos Selecionados</span>
                        <h2 className="section-title">Resultados Que Falam Por Si</h2>
                        <p className="pp-sub">Uma amostra do que construímos para os nossos clientes.</p>
                    </div>

                    <div className="pp-grid-container">
                        <div className="pp-grid" ref={portfolioGridRef} onScroll={handlePortfolioScroll}>
                            <div className="pp-card pp-card-large reveal delay-1">
                                <div className="pp-thumb" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                    <div className="pp-overlay">
                                        <span className="pp-cat">Website Design</span>
                                        <h3>Panoramas - Portal de Notícias</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="pp-card reveal delay-2">
                                <div className="pp-thumb" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                                    <div className="pp-overlay">
                                        <span className="pp-cat">Edição de Vídeo</span>
                                        <h3>Start-up World Cup</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="pp-card reveal delay-3">
                                <div className="pp-thumb" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                                    <div className="pp-overlay">
                                        <span className="pp-cat">Redes Sociais</span>
                                        <h3>Projeto Gamma</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="pp-card pp-card-large reveal delay-4">
                                <div className="pp-thumb" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                                    <div className="pp-overlay">
                                        <span className="pp-cat">Loja E-Commerce</span>
                                        <h3>Inpe - Calçado Barefoot</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Carousel navigation dots for mobile view */}
                        <div className="carousel-dots pp-carousel-dots">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-dot ${portfolioActiveIndex === idx ? 'active' : ''}`}
                                    onClick={() => scrollToPortfolioCard(idx)}
                                    onTouchEnd={(e) => {
                                        e.preventDefault();
                                        scrollToPortfolioCard(idx);
                                    }}
                                    aria-label={`Ir para o projeto ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pp-trust reveal">
                        <span className="pp-trust-label">Marcas que confiam em nós</span>
                        <div className="pp-trust-logos">
                            <img src="/assets/logos/logo-a.png" alt="Empresa A" className="trust-logo" />
                            <img src="/assets/logos/logo-b.png" alt="Empresa B" className="trust-logo" />
                            <img src="/assets/logos/logo-c.png" alt="Empresa C" className="trust-logo" />
                            <img src="/assets/logos/logo-d.png" alt="Empresa D" className="trust-logo" />
                            <img src="/assets/logos/logo-e.png" alt="Empresa E" className="trust-logo" />
                            <img src="/assets/logos/logo-f.png" alt="Empresa F" className="trust-logo" />
                        </div>
                    </div>

                    <div className="pp-cta reveal">
                        <Link href="/portfolio" className="btn btn-outline pp-btn-explore">
                            Ver Portfolio Completo
                        </Link>
                        <Link href="/contactos" className="btn btn-primary pp-btn-contact">
                            Iniciar Conversa
                        </Link>
                    </div>
                </div>
            </section>

            <section className="ideas-light-section">
                <div className="container">
                    <div className="ideas-light-card reveal">
                        <div className="ideas-light-text">
                            <h2>Tem uma ideia única? <span className="ideas-highlight">Nós ouvimos.</span></h2>
                            <p>
                                Nenhum projeto é demasiado específico. Escutamos a sua visão e desenhamos a solução perfeita para a sua empresa.
                            </p>
                            <div className="ideas-cta-wrapper">
                                <Link href="/contactos" className="btn btn-primary ideas-btn">
                                    Falar sobre a minha ideia
                                </Link>
                            </div>
                        </div>
                        <div className="ideas-light-image">
                            <img src="/assets/support.png" alt="Valorizamos as suas ideias" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="processo" className="process-flow-section">
                <div className="container">
                    <div className="text-center mb-5 reveal">
                        <span className="process-chip">O NOSSO MÉTODO</span>
                        <h2 className="section-subtitle">O processo que lhe dá <span className="process-highlight">mais resultados</span></h2>
                        <p className="process-intro">Combinamos estratégia, criatividade e dados para transformar a sua presença digital de forma previsível e consistente.</p>
                    </div>

                    <div className="process-flow-container">
                        <div className="process-flow-grid" ref={processGridRef} onScroll={handleProcessScroll}>
                            <div className="process-connector-line"></div>

                            <div className="process-flow-card reveal">
                                <div className="process-step-badge">01</div>
                                <div className="process-img-holder">
                                    <img src="/assets/process-problem.png" alt="Identificamos o Problema" className="process-icon-img" />
                                </div>
                                <h3>Identificamos o Problema</h3>
                                <p>Analisamos o seu negócio para identificar oportunidades e remover barreiras ao crescimento.</p>
                            </div>

                            <div className="process-flow-card reveal delay-1">
                                <div className="process-step-badge">02</div>
                                <div className="process-img-holder">
                                    <img src="/assets/process-solution.png" alt="Criamos a Solução" className="process-icon-img" />
                                </div>
                                <h3>Criamos a Solução</h3>
                                <p>Desenvolvemos uma estratégia personalizada, alinhada com os objetivos da sua empresa.</p>
                            </div>

                            <div className="process-flow-card reveal delay-2">
                                <div className="process-step-badge">03</div>
                                <div className="process-img-holder">
                                    <img src="/assets/process-results.png" alt="Medimos Resultados" className="process-icon-img" />
                                </div>
                                <h3>Medimos Resultados</h3>
                                <p>Acompanhamos, otimizamos e melhoramos continuamente o desempenho da estratégia.</p>
                            </div>
                        </div>
                        {/* Carousel navigation dots for mobile view */}
                        <div className="carousel-dots process-carousel-dots">
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-dot ${processActiveIndex === idx ? 'active' : ''}`}
                                    onClick={() => scrollToProcessCard(idx)}
                                    onTouchEnd={(e) => {
                                        e.preventDefault();
                                        scrollToProcessCard(idx);
                                    }}
                                    aria-label={`Ir para a etapa ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="growth-partners-section">
                <div className="container">
                    <div className="gp-simple-card reveal">
                        <div className="gp-simple-text">
                            <h2>Mais do que uma agência,<br /><span className="gp-highlight">o seu parceiro de crescimento.</span></h2>
                            <p>
                                Não nos limitamos a prestar serviços. Sempre que identificamos sinergias reais, <strong>ligamos os nossos clientes entre si</strong> para criar novas oportunidades de negócio.
                            </p>
                            <Link href="/contactos" className="btn btn-primary gp-btn-simple">
                                Conhecer o Ecossistema
                            </Link>
                        </div>
                        <div className="gp-simple-image">
                            <img src="/assets/process-mascot.png" alt="Parceiro de crescimento" />
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
};

export default HomePage;
