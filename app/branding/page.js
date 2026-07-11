'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Branding.css';

const Branding = () => {
    useScrollReveal();
    const [cardTheme, setCardTheme] = useState('vibrant');
    const [titleFont, setTitleFont] = useState('sans');
    const [activeService, setActiveService] = useState(null);

    // Mobile Carousel Active State Hooks
    const [enviroActiveIndex, setEnviroActiveIndex] = useState(0);
    const [emotionActiveIndex, setEmotionActiveIndex] = useState(0);
    const [strategyActiveIndex, setStrategyActiveIndex] = useState(0);

    const enviroRef = useRef(null);
    const emotionRef = useRef(null);
    const strategyRef = useRef(null);

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

    const handleEnviroScroll = (e) => setEnviroActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.br-enviro-item'));
    const handleEmotionScroll = (e) => setEmotionActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.br-pillar-card'));
    const handleStrategyScroll = (e) => setStrategyActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.br-strat-card'));

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const servicesData = [
        {
            id: 'logo',
            num: '01',
            name: 'Logótipo & Símbolo',
            description: 'Construção da identidade principal, marcas vetoriais, símbolos responsivos e vetorização.',
            items: [
                { title: 'Logótipo Principal', tag: 'Vetor / Primary', img: null },
                { title: 'Símbolo & Ícone', tag: 'Favicon / Badge', img: null },
                { title: 'Variações de Cor', tag: 'RGB & CMYK', img: null },
                { title: 'Grid de Construção', tag: 'Proporções', img: null }
            ]
        },
        {
            id: 'manual',
            num: '02',
            name: 'Manual de Normas',
            description: 'Guia completo de aplicação visual com regras de utilização, margens de segurança e proibições.',
            items: [
                { title: 'Guia de Cores', tag: 'HEX / Pantone', img: null },
                { title: 'Hierarquia Tipográfica', tag: 'Fonts & System', img: null },
                { title: 'Margens de Segurança', tag: 'Clearspace', img: null },
                { title: 'Exemplos de Aplicação', tag: 'Do\'s & Don\'ts', img: null }
            ]
        },
        {
            id: 'merch',
            num: '03',
            name: 'Estacionário & Merch',
            description: 'Aplicações físicas premium da sua marca para impressionar clientes e equipa no mundo real.',
            items: [
                { title: 'T-Shirt & Vestuário', tag: 'Merch', img: null },
                { title: 'Caneta & Bloco', tag: 'Papelaria', img: null },
                { title: 'Cartões de Visita', tag: 'Estacionário', img: null },
                { title: 'Packaging & Sacos', tag: 'Embalagem', img: null }
            ]
        },
        {
            id: 'naming',
            num: '04',
            name: 'Naming & Slogan',
            description: 'Identidade verbal, criação de nome único e memorável, manifesto e tom de voz estratégico.',
            items: [
                { title: 'Naming Concept', tag: 'Identidade Verbal', img: null },
                { title: 'Tagline & Slogan', tag: 'Posicionamento', img: null },
                { title: 'Tom de Voz', tag: 'Comunicação', img: null },
                { title: 'Manifesto de Marca', tag: 'Storytelling', img: null }
            ]
        }
    ];

    useEffect(() => {
        document.body.classList.add('brand-body');
        return () => document.body.classList.remove('brand-body');
    }, []);

    const handleThemeChange = (theme) => setCardTheme(theme);
    const handleFontChange = (font) => setTitleFont(font);

    const getCardStyle = () => {
        if (cardTheme === 'dark') {
            return {
                card: { background: '#1a1a1a', color: 'white', borderColor: '#444' },
                logo: { background: 'white' },
                previewBg: '#f0f0f0'
            };
        } else if (cardTheme === 'vibrant') {
            return {
                card: { background: 'linear-gradient(254deg, #3A00FF 0%, #BF0040 100%)', color: 'white', borderColor: 'white' },
                logo: { background: 'white' },
                previewBg: '#222'
            };
        } else {
            return {
                card: { background: 'white', color: 'black', borderColor: 'black' },
                logo: { background: 'black' },
                previewBg: '#eee'
            };
        }
    };

    const styles = getCardStyle();

    return (
        <main>
            {/* Hero */}
            <section className="brand-hero">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
                <h1 className="big-brand-text reveal">
                    <span>ALQUIMIA</span><br />
                    <span>VISUAL</span>
                </h1>
                <p style={{ marginTop: '2rem', fontSize: '1.2rem', maxWidth: '500px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    Transformamos a sua visão em marcas tangíveis, memoráveis e prontas para o mercado.
                </p>
                <div style={{ marginTop: '3rem', border: '1px solid black', padding: '10px 20px', borderRadius: '50px', background: 'white', position: 'relative', zIndex: 2 }}>
                    SCROLL TO LAB ↓
                </div>
            </section>

            {/* ===== BRAND ENVIRONMENTS ===== */}
            <section className="br-enviro-section">
                <div className="container">
                    <div className="br-enviro-header reveal">
                        <h2>Uma <span className="gradient-word">Marca.</span> Todos os <span className="gradient-word">Ambientes.</span></h2>
                    </div>

                    <div className="br-enviro-grid" ref={enviroRef} onScroll={handleEnviroScroll}>
                        <div className="br-enviro-item reveal delay-1">
                            <div className="br-env-mockup digital">
                                <div className="br-env-bar"><span></span><span></span><span></span></div>
                                <div className="br-env-body">
                                    <div className="br-env-logo"></div>
                                    <div className="br-env-lines"><div></div><div></div></div>
                                </div>
                            </div>
                            <span>Website</span>
                        </div>
                        <div className="br-enviro-item reveal delay-2">
                            <div className="br-env-mockup card-mock">
                                <div className="br-env-card-inner">
                                    <div className="br-env-logo"></div>
                                    <div className="br-env-card-text">
                                        <div></div><div></div>
                                    </div>
                                </div>
                            </div>
                            <span>Cartões</span>
                        </div>
                        <div className="br-enviro-item reveal delay-3">
                            <div className="br-env-mockup social-mock">
                                <div className="br-env-avatar"></div>
                                <div className="br-env-post-block">
                                    <div></div><div></div><div></div>
                                </div>
                            </div>
                            <span>Redes Sociais</span>
                        </div>
                        <div className="br-enviro-item reveal delay-4">
                            <div className="br-env-mockup pack-mock">
                                <div className="br-env-pack">
                                    <div className="br-env-logo sm"></div>
                                </div>
                            </div>
                            <span>Packaging</span>
                        </div>
                        <div className="br-enviro-item reveal delay-4">
                            <div className="br-env-mockup doc-mock">
                                <div className="br-env-doc-header"></div>
                                <div className="br-env-lines"><div></div><div></div><div></div></div>
                            </div>
                            <span>Documentos</span>
                        </div>
                    </div>
                    {/* Carousel navigation dots for mobile view */}
                    <div className="carousel-dots" style={{ marginTop: '2rem' }}>
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${enviroActiveIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(enviroRef, '.br-enviro-item', idx, setEnviroActiveIndex)}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    scrollToCard(enviroRef, '.br-enviro-item', idx, setEnviroActiveIndex);
                                }}
                                aria-label={`Ir para o ambiente ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive DNA Section */}
            <section className="dna-section">
                <div className="dna-controls reveal">
                    <h2 className="mb-5" style={{ fontSize: '2.5rem', lineHeight: 1 }}>Defina a sua<br /><span className="gradient-word">Essência.</span></h2>
                    <div className="control-group">
                        <span className="control-label">Paleta de Cores</span>
                        <div className="swatch-row">
                            <div className={`swatch ${cardTheme === 'dark' ? 'active' : ''}`} style={{ background: 'linear-gradient(45deg, #1a1a1a, #444)' }}
                                onClick={() => handleThemeChange('dark')}></div>
                            <div className={`swatch ${cardTheme === 'vibrant' ? 'active' : ''}`} style={{ background: 'linear-gradient(254deg, #3A00FF 0%, #BF0040 100%)' }}
                                onClick={() => handleThemeChange('vibrant')}></div>
                            <div className={`swatch ${cardTheme === 'light' ? 'active' : ''}`} style={{ background: 'linear-gradient(45deg, #e6e6fa, #fff0f5)' }}
                                onClick={() => handleThemeChange('light')}></div>
                        </div>
                    </div>
                    <div className="control-group">
                        <span className="control-label">Tipografia</span>
                        <div className="swatch-row">
                            <button className="btn btn-outline"
                                style={{ borderColor: 'black', color: 'black', marginRight: '10px' }}
                                onClick={() => handleFontChange('serif')}>Serif</button>
                            <button className="btn btn-outline" style={{ borderColor: 'black', color: 'black' }}
                                onClick={() => handleFontChange('sans')}>Sans</button>
                        </div>
                    </div>
                </div>
                <div className="dna-preview" style={{ background: styles.previewBg }}>
                    <div id="brand-preview-card" style={styles.card}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', ...styles.logo }} id="card-logo"></div>
                        <div>
                            <h2 style={{
                                fontSize: '2.5rem', lineHeight: 1.1, marginBottom: '0.5rem',
                                fontFamily: titleFont === 'serif' ? "'Playfair Display', serif" : "'Syne', sans-serif",
                                fontStyle: titleFont === 'serif' ? "italic" : "normal"
                            }} id="card-title">A Sua Marca.</h2>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Est. 2024</p>
                        </div>
                        <div style={{ fontSize: '0.8rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
                            Estratégia Visual // Identidade
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography Marquee */}
            <section className="type-section">
                <div className="type-scroll-container">
                    <span className="type-item font-serif">Elegant</span>
                    <span className="type-item font-sans">BOLD</span>
                    <span className="type-item font-mono">technical.</span>
                    <span className="type-item font-serif">Timeless</span>
                    <span className="type-item font-sans">LOUD</span>
                    <span className="type-item font-mono">future_ready</span>
                </div>
            </section>

            {/* Services List */}
            <section className="brand-services container">
                {servicesData.map((service, index) => {
                    const isOpen = activeService === index;
                    return (
                        <div key={service.id} className={`service-item-wrapper ${isOpen ? 'active' : ''}`}>
                            <div
                                className="service-row reveal"
                                onClick={() => toggleService(index)}
                            >
                                <span className="service-num">{service.num}</span>
                                <span className="service-name">{service.name}</span>
                                <span className="service-arrow">{isOpen ? '↓' : '→'}</span>
                            </div>

                            {isOpen && (
                                <div className="service-drawer">
                                    <p className="service-drawer-desc">{service.description}</p>
                                    <div className="service-items-grid">
                                        {service.items.map((item, idx) => (
                                            <div key={idx} className="service-item-card">
                                                <div className="service-item-img-container">
                                                    {item.img ? (
                                                        <img src={item.img} alt={item.title} className="service-item-img" />
                                                    ) : (
                                                        <div className="service-item-placeholder">
                                                            <div className="placeholder-crosshairs">+</div>
                                                            <span className="placeholder-text">{item.title}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="service-item-info">
                                                    <span className="service-item-title">{item.title}</span>
                                                    <span className="service-item-tag">{item.tag}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </section>

            {/* ===== EMOTIONAL BRANDING ===== */}
            <section className="br-emotion-section">
                <div className="container">
                    <div className="br-emotion-content reveal">
                        <div className="br-emotion-text">
                            <span className="br-chip">Branding Emocional</span>
                            <h2>Marcas fortes criam <span className="gradient-word">significado.</span></h2>
                            <p>Muito mais do que um logótipo. Criamos marcas com personalidade, consistência e propósito para gerar confiança e serem lembradas.</p>
                            <div className="br-emotion-cta">
                                <Link href="/contactos" className="btn-brand">
                                    <span className="btn-brand-text">Construir a Minha Marca</span>
                                </Link>
                            </div>
                        </div>

                        <div className="br-emotion-pillars" ref={emotionRef} onScroll={handleEmotionScroll}>
                            <div className="br-pillar-card">
                                <span className="br-pillar-num">01</span>
                                <h4>Confiança</h4>
                                <p>Uma identidade que transmite profissionalismo.</p>
                            </div>
                            <div className="br-pillar-card">
                                <span className="br-pillar-num">02</span>
                                <h4>Diferenciação</h4>
                                <p>Deixe de competir apenas pelo preço.</p>
                            </div>
                            <div className="br-pillar-card">
                                <span className="br-pillar-num">03</span>
                                <h4>Conectar</h4>
                                <p>As pessoas usam marcas com que se identificam.</p>
                            </div>
                            <div className="br-pillar-card">
                                <span className="br-pillar-num">04</span>
                                <h4>Memorabilidade</h4>
                                <p>Identidade marcante que sobressai no ecossistema.</p>
                            </div>
                        </div>
                        {/* Carousel navigation dots for mobile view */}
                        <div className="carousel-dots" style={{ marginTop: '2rem' }}>
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-dot ${emotionActiveIndex === idx ? 'active' : ''}`}
                                    onClick={() => scrollToCard(emotionRef, '.br-pillar-card', idx, setEmotionActiveIndex)}
                                    onTouchEnd={(e) => {
                                        e.preventDefault();
                                        scrollToCard(emotionRef, '.br-pillar-card', idx, setEmotionActiveIndex);
                                    }}
                                    aria-label={`Ir para o pilar ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PROFESSIONAL STRATEGY ===== */}
            <section className="br-strategy-section">
                <div className="container">
                    <div className="br-strategy-header reveal">
                        <h2>Arquitetura de <span className="gradient-word">Marca</span></h2>
                    </div>

                    <div className="br-strategy-grid" ref={strategyRef} onScroll={handleStrategyScroll}>
                        <div className="br-strat-card reveal delay-1">
                            <div className="br-sc-num">01</div>
                            <h4>Descoberta</h4>
                            <p>Compreendemos o negócio, o mercado e os objetivos.</p>
                        </div>
                        <div className="br-strat-card reveal delay-2">
                            <div className="br-sc-num">02</div>
                            <h4>Conceito</h4>
                            <p>Exploramos diferentes direções até encontrar a identidade certa.</p>
                        </div>
                        <div className="br-strat-card reveal delay-3">
                            <div className="br-sc-num">03</div>
                            <h4>Refinamento</h4>
                            <p>Ajustamos cada detalhe para garantir consistência e impacto.</p>
                        </div>
                        <div className="br-strat-card reveal delay-4">
                            <div className="br-sc-num">04</div>
                            <h4>Entrega</h4>
                            <p>Recebe todos os ficheiros e um guia para aplicar a marca.</p>
                        </div>
                    </div>
                    {/* Carousel navigation dots for mobile view */}
                    <div className="carousel-dots" style={{ marginTop: '2rem' }}>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${strategyActiveIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(strategyRef, '.br-strat-card', idx, setStrategyActiveIndex)}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    scrollToCard(strategyRef, '.br-strat-card', idx, setStrategyActiveIndex);
                                }}
                                aria-label={`Ir para o passo ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="brand-cta">
                <div className="container">
                    <h2 className="cta-big">Não seja apenas mais um.</h2>
                    <Link href="/contactos" className="btn-brand"><span className="btn-brand-text">Iniciar Projeto</span></Link>
                </div>
            </section>
        </main>
    );
};

export default Branding;
