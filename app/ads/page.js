'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';

import './Ads.css';

const platforms = [
    { id: 'meta', name: 'Meta Ads', path: '/servicos/ads/meta.png' },
    { id: 'google', name: 'Google Ads', path: '/servicos/ads/google.png' },
    { id: 'linkedin', name: 'LinkedIn Ads', path: '/servicos/ads/linkedin.png' },
    { id: 'tiktok', name: 'TikTok Ads', path: '/servicos/ads/tiktok.png' }
];

const AdsPage = () => {
    useScrollReveal();
    useScrollReveal();

    // Mobile Carousel Active State Hooks
    const [omniActiveIndex, setOmniActiveIndex] = useState(0);
    const [creativesActiveIndex, setCreativesActiveIndex] = useState(0);
    const [resultsActiveIndex, setResultsActiveIndex] = useState(0);

    const omniGridRef = useRef(null);
    const creativesGridRef = useRef(null);
    const resultsGridRef = useRef(null);

    const getActiveIndexFromScroll = (container, selector) => {
        try {
            const items = container.querySelectorAll(selector);
            if (!items || !items.length) return 0;
            const firstItem = items[0];
            if (!firstItem) return 0;
            const itemWidth = firstItem.offsetWidth || 285;
            const gap = 20; // ~1.25rem gap
            const scrollLeft = container.scrollLeft || 0;
            const index = Math.round(scrollLeft / (itemWidth + gap));
            return Math.max(0, Math.min(index, items.length - 1));
        } catch (err) {
            return 0;
        }
    };

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

    const handleOmniScroll = (e) => setOmniActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.omni-card'));
    const handleCreativesScroll = (e) => setCreativesActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.creative-card'));
    const handleResultsScroll = (e) => setResultsActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.results-card'));

    // 1. Radar Hero States
    const [radarAlerts, setRadarAlerts] = useState([
        { id: 1, type: 'search', time: 'Agora mesmo', text: 'Lead qualificada registada' },
        { id: 2, type: 'meta', time: 'Há 1 min', text: 'Campanha otimizada automaticament' }
    ]);

    // 2. Attention Simulator States
    const [withAds, setWithAds] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [clickCount, setClickCount] = useState(12);

    // 3. Safety Scale Slider State
    const [scaleLevel, setScaleLevel] = useState(1);


    // Dynamic typing effect for Simulator search query
    useEffect(() => {
        const fullQuery = 'comprar sapatos desportivos online';
        let currentIndex = 0;
        let typingInterval;

        const startTyping = () => {
            setSearchQuery('');
            currentIndex = 0;
            clearInterval(typingInterval);

            typingInterval = setInterval(() => {
                if (currentIndex < fullQuery.length) {
                    setSearchQuery(prev => prev + fullQuery.charAt(currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    // Pause, then re-type after 6 seconds
                    setTimeout(startTyping, 6000);
                }
            }, 100);
        };

        startTyping();
        return () => clearInterval(typingInterval);
    }, []);

    // Periodic radar notifications simulation
    useEffect(() => {
        const alertTemplates = [
            { type: 'search', text: 'Nova compra registada: 142,50 €' },
            { type: 'meta', text: 'Pedido de orçamento recebido' },
            { type: 'tiktok', text: 'Lead qualificada registada: Formulário' },
            { type: 'search', text: 'Nova venda confirmada' },
            { type: 'meta', text: 'Cliente recorrente voltou a comprar' }
        ];

        const interval = setInterval(() => {
            const randomTemplate = alertTemplates[Math.floor(Math.random() * alertTemplates.length)];
            const newAlert = {
                id: Date.now(),
                type: randomTemplate.type,
                time: 'Agora',
                text: randomTemplate.text
            };

            setRadarAlerts(prev => [newAlert, prev[0], prev[1]].slice(0, 3));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Incremental clicks for the active Ads simulator
    useEffect(() => {
        if (!withAds) return;
        const interval = setInterval(() => {
            setClickCount(prev => prev + Math.floor(Math.random() * 2) + 1);
        }, 1500);
        return () => clearInterval(interval);
    }, [withAds]);

    // Safety scale details configuration
    const scaleDetails = {
        1: {
            title: 'Fase 01: Lançamento & Testes',
            desc: 'Iniciação controlada. Testamos 5-10 variações de criativos e públicos com orçamentos mínimos. Risco zero, máximo de dados recolhidos.',
            investment: 450,
            roas: '2.4x',
            status: 'Fase de Testes',
            capi: true,
            budgetCap: false,
            fatigueAlert: false,
            scaleCurve: 'M 10 150 Q 80 150 150 140 T 290 130',
            dotCoords: { cx: 290, cy: 130 }
        },
        2: {
            title: 'Fase 02: Otimização de ROAS',
            desc: 'Desligamos criativos ineficientes e direcionamos verba para os públicos com melhor custo por aquisição. Estabilização do Pixel.',
            investment: 1200,
            roas: '4.5x',
            status: 'Estável & Otimizado',
            capi: true,
            budgetCap: true,
            fatigueAlert: false,
            scaleCurve: 'M 10 150 Q 80 120 150 90 T 290 70',
            dotCoords: { cx: 290, cy: 70 }
        },
        3: {
            title: 'Fase 03: Escala Horizontal',
            desc: 'Expandimos a nossa presença gerando públicos Lookalike (Semelhantes) e testando novos canais de aquisição (Google Search + Meta Remarketing).',
            investment: 4800,
            roas: '6.2x',
            status: 'Escala Ativa',
            capi: true,
            budgetCap: true,
            fatigueAlert: true,
            scaleCurve: 'M 10 150 Q 80 90 150 60 T 290 35',
            dotCoords: { cx: 290, cy: 35 }
        },
        4: {
            title: 'Fase 04: Domínio de Mercado',
            desc: 'Escala vertical agressiva do orçamento. Monitorização contínua de saturação criativa e audiências exclusivas para manter o retorno ótimo.',
            investment: 14500,
            roas: '8.5x',
            status: 'Performance Extrema',
            capi: true,
            budgetCap: true,
            fatigueAlert: true,
            scaleCurve: 'M 10 150 Q 80 60 150 30 T 290 10',
            dotCoords: { cx: 290, cy: 10 }
        }
    };

    const activeDetails = scaleDetails[scaleLevel];

    useEffect(() => {
        document.title = 'Anúncios Pagos | E-NIMBLE';
        document.body.classList.add('ads-body');
        return () => document.body.classList.remove('ads-body');
    }, []);

    return (
        <main style={{ position: 'relative' }}>
            {/* Holographic background */}
            <div className="grid-bg-dark"></div>
            <div className="ads-bg-glow-top"></div>
            <div className="ads-bg-glow-bottom"></div>

            {/* ===== HERO: TARGET LOCKED (Centrado) ===== */}
            <section className="ads-hero">
                {/* Radar em background */}
                <div className="radar-container">
                    <div className="radar-line"></div>
                    <div className="target-dot" style={{ top: '20%', left: '30%' }}></div>
                    <div className="target-dot" style={{ top: '70%', left: '80%', animationDelay: '0.5s' }}></div>
                    <div className="target-dot" style={{ top: '40%', left: '60%', animationDelay: '1.2s' }}></div>
                    <div className="target-dot" style={{ top: '15%', left: '75%', animationDelay: '0.8s' }}></div>
                </div>

                {/* Consola Central */}
                <div className="hero-content-ads reveal">
                    <h1>CLIENTE IDENTIFICADO</h1>
                    <div className="subtitle-typewriter">Chegamos ao cliente certo, no momento certo. {">_"}</div>

                    {/* Feed de Conversões Integrado no Cartão */}
                    <div className="radar-feed-inline">
                        <span className="feed-title">Registo de Conversões Recentes</span>
                        <div className="live-events-feed">
                            {radarAlerts.map(alert => (
                                <div key={alert.id} className={`feed-event-row ${alert.type === 'meta' ? 'meta-event' : ''}`}>
                                    <div className="event-icon">
                                        {alert.type === 'meta' ? '●' : '▲'}
                                    </div>
                                    <div className="event-details">
                                        <span className="event-txt">{alert.text}</span>
                                        <span className="event-time">{alert.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ===== OMNIPRESENCE: Onde o Público Clica ===== */}
            <section className="ads-omni-section">
                <div className="container">
                    <div className="section-header-center reveal">
                        <h2>Onde os seus clientes <span className="gradient-word">decidem</span></h2>
                        <p>Cobrimos todos os pontos de contacto onde os seus clientes passam tempo diariamente.</p>
                    </div>

                    <div className="omni-grid" ref={omniGridRef} onScroll={handleOmniScroll}>

                        {/* Google Search Card */}
                        <div className="omni-card reveal">
                            <div className="omni-device-preview">
                                <div className="screen-search">
                                    <div className="search-bar-mini"></div>
                                    <div className="search-ad-mini">
                                        <div className="search-ad-mini-title"></div>
                                        <div className="search-ad-mini-desc"></div>
                                        <div className="search-ad-mini-badge"></div>
                                    </div>
                                    <div className="search-ad-mini" style={{ animationDelay: '1s' }}>
                                        <div className="search-ad-mini-title"></div>
                                        <div className="search-ad-mini-desc"></div>
                                        <div className="search-ad-mini-badge"></div>
                                    </div>
                                </div>
                            </div>
                            <h3>Pesquisa Google</h3>
                            <p>Apareça exatamente quando existe intenção de compra.</p>
                        </div>

                        {/* Social Feed Card */}
                        <div className="omni-card reveal" style={{ animationDelay: '0.1s' }}>
                            <div className="omni-device-preview">
                                <div className="screen-social">
                                    <div className="social-ad-card">
                                        <div className="social-ad-img"></div>
                                        <div className="social-ad-text"></div>
                                        <div className="social-ad-btn"></div>
                                    </div>
                                </div>
                            </div>
                            <h3>Social Feed</h3>
                            <p>Apareça no Instagram e Facebook junto do seu cliente ideal.</p>
                        </div>

                        {/* Video Reels Card */}
                        <div className="omni-card reveal" style={{ animationDelay: '0.2s' }}>
                            <div className="omni-device-preview">
                                <div className="screen-video">
                                    <div className="video-ad-bg"></div>
                                    <div className="video-play-btn">▶</div>
                                    <div className="video-progress-bar"></div>
                                    <div className="video-badge">Sponsored</div>
                                </div>
                            </div>
                            <h3>Video & Reels</h3>
                            <p>Capte atenção em segundos através de vídeos no TikTok e Instagram Reels.</p>
                        </div>

                        {/* Banner Network Card */}
                        <div className="omni-card reveal" style={{ animationDelay: '0.3s' }}>
                            <div className="omni-device-preview">
                                <div className="screen-banner">
                                    <div className="banner-grid-lines">
                                        <div className="banner-grid-line"></div>
                                        <div className="banner-grid-line" style={{ width: '80%' }}></div>
                                    </div>
                                    <div className="banner-ad-box"></div>
                                </div>
                            </div>
                            <h3>Display Banner</h3>
                            <p>Reforce a lembrança da marca com campanhas de marketing inteligentes.</p>
                        </div>

                    </div>
                    {/* Carousel navigation dots for mobile view */}
                    <div className="carousel-dots" style={{ marginTop: '2rem' }}>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${omniActiveIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(omniGridRef, '.omni-card', idx, setOmniActiveIndex)}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    scrollToCard(omniGridRef, '.omni-card', idx, setOmniActiveIndex);
                                }}
                                aria-label={`Ir para a fase ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PLATFORMS MARQUEE: Plataformas de Anúncios ===== */}
            <section className="ads-platforms-marquee">
                <div className="marquee-fade-left"></div>
                <div className="marquee-fade-right"></div>
                <div className="platforms-marquee-track">
                    {/* Render twice for infinite loop */}
                    {[...platforms, ...platforms].map((platform, idx) => (
                        <div key={`${platform.id}-${idx}`} className="platform-logo-item">
                            <div className="platform-logo-wrapper">
                                <img
                                    src={platform.path}
                                    alt={platform.name}
                                    className="platform-img"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                <span className="platform-fallback-icon">{platform.name[0]}</span>
                            </div>
                            <span className="platform-name">{platform.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== CREATIVES: Galeria de Criativos ===== */}
            <section className="ads-creatives-section">
                <div className="container">
                    <div className="section-header-center reveal">
                        <h2>Criativos de <span className="gradient-word">Alta Performance</span></h2>
                        <p>A diferença entre ser ignorado e ser clicado começa no criativo.</p>
                    </div>

                    <div className="creatives-grid reveal" ref={creativesGridRef} onScroll={handleCreativesScroll}>
                        {/* Meta Feed */}
                        <div className="creative-card">
                            <div className="creative-img-container square">
                                <img
                                    src="/servicos/ads/criativos/meta.png"
                                    alt="Meta Feed Creative"
                                    className="creative-image"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://placehold.co/600x600/3a00ff/ffffff?text=Carregar+Criativo+Feed';
                                    }}
                                />
                            </div>
                            <div className="creative-details">
                                <h3>Feed Instagram & Facebook</h3>
                                <p>Capta atenção enquanto o utilizador faz scroll.</p>
                            </div>
                        </div>

                        {/* Stories / Reels */}
                        <div className="creative-card">
                            <div className="creative-img-container portrait">
                                <img
                                    src="/servicos/ads/criativos/story.png"
                                    alt="Stories & Reels Creative"
                                    className="creative-image"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://placehold.co/1080x1920/bf0040/ffffff?text=Carregar+Criativo+Vertical';
                                    }}
                                />
                            </div>
                            <div className="creative-details">
                                <h3>Stories & Reels</h3>
                                <p>Mensagens rápidas pensadas para consumo em ecrã inteiro.</p>
                            </div>
                        </div>

                        {/* Display Banner */}
                        <div className="creative-card">
                            <div className="creative-img-container landscape">
                                <img
                                    src="/servicos/ads/criativos/display.png"
                                    alt="Google Display Creative"
                                    className="creative-image"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://placehold.co/1200x675/00c853/ffffff?text=Carregar+Criativo+Banner';
                                    }}
                                />
                            </div>
                            <div className="creative-details">
                                <h3>Google Display</h3>
                                <p>Mantém a sua marca presente ao longo da jornada de compra.</p>
                            </div>
                        </div>
                    </div>
                    {/* Carousel navigation dots for mobile view */}
                    <div className="carousel-dots" style={{ marginTop: '2rem' }}>
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${creativesActiveIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(creativesGridRef, '.creative-card', idx, setCreativesActiveIndex)}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    scrollToCard(creativesGridRef, '.creative-card', idx, setCreativesActiveIndex);
                                }}
                                aria-label={`Ir para o criativo ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== RESULTS: Nós Mostramos Resultados ===== */}
            <section className="ads-results-section">
                <div className="container">
                    <div className="section-header-center reveal">
                        <h2>Nós mostramos <span className="gradient-word">resultados</span></h2>
                        <p>Uma estratégia completa para transformar investimento em crescimento.</p>
                    </div>

                    <div className="results-grid" ref={resultsGridRef} onScroll={handleResultsScroll}>
                        {/* Segmentação Estudada */}
                        <div className="results-card reveal">
                            <div className="results-icon-wrapper">
                                <img
                                    src="/servicos/ads/segmentacao.png"
                                    alt="Segmentação estudada"
                                    className="results-icon-img"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <h3>Segmentação estudada</h3>
                            <p>Encontramos o público certo para maximizar cada euro investido.</p>
                        </div>

                        {/* Criativos fortes */}
                        <div className="results-card reveal" style={{ animationDelay: '0.1s' }}>
                            <div className="results-icon-wrapper">
                                <img
                                    src="/servicos/ads/criativos.png"
                                    alt="Criativos fortes"
                                    className="results-icon-img"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <h3>Criativos fortes</h3>
                            <p>Conteúdo pensado para captar atenção e gerar ação.</p>
                        </div>

                        {/* Landing Pages que convertem */}
                        <div className="results-card reveal" style={{ animationDelay: '0.2s' }}>
                            <div className="results-icon-wrapper">
                                <img
                                    src="/servicos/ads/landing-pages.png"
                                    alt="Landing Pages que convertem"
                                    className="results-icon-img"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <h3>Landing Pages que convertem</h3>
                            <p>Páginas rápidas, claras e focadas na conversão.</p>
                        </div>

                        {/* Otimização contínua */}
                        <div className="results-card reveal" style={{ animationDelay: '0.3s' }}>
                            <div className="results-icon-wrapper">
                                <img
                                    src="/servicos/ads/otimizacao.png"
                                    alt="Otimização contínua"
                                    className="results-icon-img"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <h3>Otimização contínua</h3>
                            <p>Analisamos, testamos e melhoramos constantemente.</p>
                        </div>
                    </div>
                    {/* Carousel navigation dots for mobile view */}
                    <div className="carousel-dots" style={{ marginTop: '2rem' }}>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${resultsActiveIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(resultsGridRef, '.results-card', idx, setResultsActiveIndex)}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    scrollToCard(resultsGridRef, '.results-card', idx, setResultsActiveIndex);
                                }}
                                aria-label={`Ir para o resultado ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SIMULATOR: A GUERRA PELA ATENÇÃO (Os concorrentes...) ===== */}
            <section className="ads-attention-section">
                <div className="container">
                    <div className="section-header-center reveal">
                        <h2>A Guerra pela <span className="gradient-word">Atenção</span></h2>
                        <p>Os anúncios pagos capturam os clientes no instante exato da decisão. Veja o que acontece com a visibilidade online da sua marca.</p>
                    </div>

                    <div className="browser-mockup reveal">
                        <div className="browser-bar">
                            <div className="browser-dots">
                                <span className="browser-dot red"></span>
                                <span className="browser-dot yellow"></span>
                                <span className="browser-dot green"></span>
                            </div>
                            <div className="browser-search-input">
                                {searchQuery}
                                <span className="search-cursor"></span>
                            </div>
                        </div>

                        <div className="browser-content">
                            {/* Particle traffic flows */}
                            <div className="particle-container">
                                {!withAds ? (
                                    <>
                                        {/* Particles flowing only to competitors */}
                                        <div className="flow-particle particle-to-competitor" style={{ animationDelay: '0s' }}></div>
                                        <div className="flow-particle particle-to-competitor" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="flow-particle particle-to-competitor" style={{ animationDelay: '1s' }}></div>
                                        <div className="flow-particle particle-to-competitor" style={{ animationDelay: '1.5s' }}></div>
                                        <div className="flow-particle particle-to-competitor" style={{ animationDelay: '2s' }}></div>
                                    </>
                                ) : (
                                    <>
                                        {/* Particles flowing directly to your business */}
                                        <div className="flow-particle particle-to-me" style={{ animationDelay: '0s' }}></div>
                                        <div className="flow-particle particle-to-me" style={{ animationDelay: '0.4s' }}></div>
                                        <div className="flow-particle particle-to-me" style={{ animationDelay: '0.8s' }}></div>
                                        <div className="flow-particle particle-to-me" style={{ animationDelay: '1.2s' }}></div>
                                        <div className="flow-particle particle-to-me" style={{ animationDelay: '1.6s' }}></div>
                                        <div className="flow-particle particle-to-me" style={{ animationDelay: '2s' }}></div>
                                    </>
                                )}
                            </div>

                            <div className="sim-grid">
                                {/* Left Side: Competitor State */}
                                <div className={`sim-side ${!withAds ? 'active-winner' : 'active-loser'}`}>
                                    <div className="sim-header">
                                        <h3>Concorrente A</h3>
                                        <span className="sim-status-pill green-pill">1º Lugar</span>
                                    </div>
                                    <div className="mock-search-results">
                                        <div className="result-block ad-block competitor">
                                            <span className="result-ad-tag">Patrocinado</span>
                                            <h4 className="result-title">Sapatos Premium Outlet - 50% Desconto</h4>
                                            <div className="result-url">https://www.concorrente-loja.pt</div>
                                            <p className="result-desc">Compre os melhores sapatos desportivos online com entregas gratuitas hoje mesmo. Stock limitado.</p>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 'auto', paddingTop: '1.5rem', fontSize: '0.8rem', opacity: 0.8 }}>
                                        {!withAds ? (
                                            <span style={{ color: 'var(--ads-alert)' }}>● A receber todo o tráfego de compradores.</span>
                                        ) : (
                                            <span>● Ultrapassado pelo seu anúncio.</span>
                                        )}
                                    </div>
                                </div>

                                {/* Right Side: Your Brand State */}
                                <div className={`sim-side ${withAds ? 'active-winner' : ''}`}>
                                    <div className="sim-header">
                                        <h3>A Sua Marca</h3>
                                        <span className={`sim-status-pill ${withAds ? 'green-pill' : 'red-pill'}`}>
                                            {withAds ? 'Anúncio Ativo' : 'Orgânico (Pág. 3)'}
                                        </span>
                                    </div>
                                    <div className="mock-search-results">
                                        {withAds ? (
                                            <div className="result-block highlight">
                                                <span className="result-ad-tag">Patrocinado</span>
                                                <h4 className="result-title">Calçado Desportivo Oficial - A Melhor Coleção</h4>
                                                <div className="result-url">https://www.asuamarca.pt</div>
                                                <p className="result-desc">Melhores modelos e ofertas exclusivas online. Compre agora a sua coleção favorita com a nossa marca.</p>
                                            </div>
                                        ) : (
                                            <div style={{ opacity: 0.25 }}>
                                                <div className="result-block">
                                                    <h4 className="result-title">Sapatos Desportivos - Coleção Completa</h4>
                                                    <div className="result-url">https://www.asuamarca.pt</div>
                                                    <p className="result-desc">Descubra calçado de desporto no nosso catálogo e-commerce...</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ marginTop: 'auto', paddingTop: '1.5rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {withAds ? (
                                            <span style={{ color: 'var(--ads-success)', fontWeight: 'bold' }}>
                                                ● {clickCount} Cliques Convertidos
                                            </span>
                                        ) : (
                                            <span style={{ color: 'var(--ads-alert)' }}>● Invisível no momento de pesquisa.</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <span className="traffic-source">Pesquisa de Utilizadores</span>
                        </div>
                    </div>

                    <div className="simulator-controls reveal">
                        <button
                            className={`sim-switch-btn ${withAds ? 'active' : ''}`}
                            onClick={() => setWithAds(!withAds)}
                        >
                            {withAds ? 'Desativar Ads (Perder Clientes)' : 'Reverter o Cenário e Dominar'}
                        </button>
                        <div style={{ marginTop: '2rem', maxWidth: '650px', margin: '2rem auto 0 auto' }}>
                            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#fff', lineHeight: '1.4' }}>
                                "Os seus concorrentes já estão a investir. E os seus clientes estão a vê-los primeiro."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA: MOMENTUM (Iniciar Campanha) ===== */}
            <section className="ads-cta-section">
                <div className="cta-glow-bg"></div>
                <div className="container reveal">
                    <div className="cta-container-glass">
                        <div className="cta-arrows-animation">
                            <span className="cta-arrow">›</span>
                            <span className="cta-arrow">›</span>
                            <span className="cta-arrow">›</span>
                        </div>
                        <h2>Pronto para <span>Escalar o Seu Negócio?</span></h2>
                        <p style={{ color: 'var(--ads-text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Desenvolvemos campanhas de tráfego construídas para gerar resultados, reduzir desperdício e maximizar o retorno do investimento.
                        </p>
                        <Link href="/contactos" className="cta-btn-premium">
                            Quero Escalar o Meu Negócio
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdsPage;
