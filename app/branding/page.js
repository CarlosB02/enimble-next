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
                { id: 'logo_principal', title: 'Logótipo Principal', tag: 'Vetor / Primary', img: null },
                { id: 'simbolo_icone', title: 'Símbolo & Ícone', tag: 'Favicon / Badge', img: null },
                { id: 'variacoes_cor', title: 'Variações de Cor', tag: 'RGB & CMYK', img: null },
                { id: 'grid_construcao', title: 'Grid de Construção', tag: 'Proporções', img: null }
            ]
        },
        {
            id: 'manual',
            num: '02',
            name: 'Manual de Normas',
            description: 'Guia completo de aplicação visual com regras de utilização, margens de segurança e proibições.',
            items: [
                { id: 'guia_cores', title: 'Guia de Cores', tag: 'HEX / Pantone', img: null },
                { id: 'hierarquia_tipografica', title: 'Hierarquia Tipográfica', tag: 'Fonts & System', img: null },
                { id: 'margens_seguranca', title: 'Margens de Segurança', tag: 'Clearspace', img: null },
                { id: 'exemplos_aplicacao', title: 'Exemplos de Aplicação', tag: 'Do\'s & Don\'ts', img: null }
            ]
        },
        {
            id: 'merch',
            num: '03',
            name: 'Estacionário & Merch',
            description: 'Aplicações físicas premium da sua marca para impressionar clientes e equipa no mundo real.',
            items: [
                { id: 'tshirt_vestuario', title: 'T-Shirt & Vestuário', tag: 'Merch', img: null },
                { id: 'caneta_bloco', title: 'Caneta & Bloco', tag: 'Papelaria', img: null },
                { id: 'cartoes_visita', title: 'Cartões de Visita', tag: 'Estacionário', img: null },
                { id: 'packaging_sacos', title: 'Packaging & Sacos', tag: 'Embalagem', img: null }
            ]
        },
        {
            id: 'naming',
            num: '04',
            name: 'Naming & Slogan',
            description: 'Identidade verbal, criação de nome único e memorável, manifesto e tom de voz estratégico.',
            items: [
                { id: 'naming_concept', title: 'Naming Concept', tag: 'Identidade Verbal', img: null },
                { id: 'tagline_slogan', title: 'Tagline & Slogan', tag: 'Posicionamento', img: null },
                { id: 'tom_voz', title: 'Tom de Voz', tag: 'Comunicação', img: null },
                { id: 'manifesto_marca', title: 'Manifesto de Marca', tag: 'Storytelling', img: null }
            ]
        }
    ];

    const renderItemVisual = (item) => {
        if (item.img) {
            return <img src={item.img} alt={item.title} className="service-item-img" />;
        }

        switch (item.id) {
            case 'logo_principal':
                return (
                    <div className="custom-visual logo-principal-visual">
                        <svg viewBox="0 0 100 100" className="visual-svg">
                            <defs>
                                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3A00FF" />
                                    <stop offset="100%" stopColor="#BF0040" />
                                </linearGradient>
                            </defs>
                            <path d="M25 20h25a20 20 0 0 1 0 40H25V20z" fill="url(#logoGrad)" />
                            <path d="M25 60h45v15H25V60z" fill="url(#logoGrad)" opacity="0.9" />
                            <circle cx="50" cy="40" r="10" fill="#ffffff" />
                        </svg>
                        <div className="visual-glow"></div>
                    </div>
                );
            case 'simbolo_icone':
                return (
                    <div className="custom-visual simbolo-icone-visual">
                        <div className="app-icon-container">
                            <div className="app-icon-inner">
                                <svg viewBox="0 0 100 100" className="icon-svg">
                                    <defs>
                                        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3A00FF" />
                                            <stop offset="100%" stopColor="#BF0040" />
                                        </linearGradient>
                                    </defs>
                                    <polygon points="50,15 85,75 15,75" fill="url(#iconGrad)" />
                                    <polygon points="50,35 73,75 27,75" fill="#111115" />
                                    <polygon points="50,45 62,70 38,70" fill="url(#iconGrad)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                );
            case 'variacoes_cor':
                return (
                    <div className="custom-visual color-variations-visual">
                        <div className="color-swatches">
                            <div className="swatch-item">
                                <div className="swatch-color blue-swatch"></div>
                                <span className="swatch-hex">#3A00FF</span>
                                <span className="swatch-cmyk">C100 M84</span>
                            </div>
                            <div className="swatch-item">
                                <div className="swatch-color red-swatch"></div>
                                <span className="swatch-hex">#BF0040</span>
                                <span className="swatch-cmyk">C0 M100</span>
                            </div>
                            <div className="swatch-item">
                                <div className="swatch-color violet-swatch"></div>
                                <span className="swatch-hex">#7A00B5</span>
                                <span className="swatch-cmyk">C60 M100</span>
                            </div>
                        </div>
                    </div>
                );
            case 'grid_construcao':
                return (
                    <div className="custom-visual grid-construction-visual">
                        <div className="grid-overlay"></div>
                        <svg viewBox="0 0 100 100" className="blueprint-svg">
                            <circle cx="50" cy="50" r="35" stroke="rgba(58, 0, 255, 0.3)" strokeWidth="0.5" fill="none" strokeDasharray="2,2" />
                            <circle cx="50" cy="50" r="20" stroke="rgba(191, 0, 64, 0.3)" strokeWidth="0.5" fill="none" />
                            <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="0.5" />
                            <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="0.5" />
                            <line x1="20" y1="20" x2="80" y2="80" stroke="rgba(0, 0, 0, 0.1)" strokeWidth="0.5" strokeDasharray="1,1" />
                            <line x1="80" y1="20" x2="20" y2="80" stroke="rgba(0, 0, 0, 0.1)" strokeWidth="0.5" strokeDasharray="1,1" />
                            <rect x="30" y="30" width="40" height="40" stroke="rgba(58, 0, 255, 0.25)" strokeWidth="0.5" fill="none" />
                            <path d="M30 50 L50 30 L70 50 L50 70 Z" stroke="#BF0040" strokeWidth="0.8" fill="none" />
                        </svg>
                        <span className="blueprint-tag">x = 1.618</span>
                    </div>
                );
            case 'guia_cores':
                return (
                    <div className="custom-visual color-guide-visual">
                        <div className="pantone-card blue-pantone">
                            <div className="pantone-color-block"></div>
                            <div className="pantone-meta">
                                <span className="pantone-title">PANTONE</span>
                                <span className="pantone-code">293 C</span>
                            </div>
                        </div>
                        <div className="pantone-card red-pantone">
                            <div className="pantone-color-block"></div>
                            <div className="pantone-meta">
                                <span className="pantone-title">PANTONE</span>
                                <span className="pantone-code">199 C</span>
                            </div>
                        </div>
                    </div>
                );
            case 'hierarquia_tipografica':
                return (
                    <div className="custom-visual typography-hierarchy-visual">
                        <div className="typo-specimen">
                            <div className="typo-row h1-spec">
                                <span className="typo-label">H1</span>
                                <span className="typo-preview heading-font">Aa</span>
                            </div>
                            <div className="typo-row h2-spec">
                                <span className="typo-label">H2</span>
                                <span className="typo-preview heading-font">Bold</span>
                            </div>
                            <div className="typo-row body-spec">
                                <span className="typo-label">Body</span>
                                <span className="typo-preview main-font">Sora text</span>
                            </div>
                        </div>
                    </div>
                );
            case 'margens_seguranca':
                return (
                    <div className="custom-visual safety-margins-visual">
                        <div className="clearspace-box">
                            <div className="clearspace-dashed"></div>
                            <div className="clearspace-logo">
                                <svg viewBox="0 0 100 100" className="clearspace-svg">
                                    <path d="M35 30 L65 30 L65 45 L45 45 L45 55 L65 55 L65 70 L35 70 Z" fill="#3A00FF" />
                                </svg>
                            </div>
                            <span className="margin-guide margin-top">x</span>
                            <span className="margin-guide margin-bottom">x</span>
                            <span className="margin-guide margin-left">x</span>
                            <span className="margin-guide margin-right">x</span>
                        </div>
                    </div>
                );
            case 'exemplos_aplicacao':
                return (
                    <div className="custom-visual application-examples-visual">
                        <div className="example-panel correct-panel">
                            <div className="example-logo-wrapper">
                                <div className="mini-logo"></div>
                            </div>
                            <span className="example-badge ok-badge">✓ DO</span>
                        </div>
                        <div className="example-panel incorrect-panel">
                            <div className="example-logo-wrapper distorted">
                                <div className="mini-logo"></div>
                            </div>
                            <span className="example-badge dont-badge">✗ DONT</span>
                        </div>
                    </div>
                );
            case 'tshirt_vestuario':
                return (
                    <div className="custom-visual tshirt-vestuario-visual">
                        <div className="tshirt-mockup">
                            <svg viewBox="0 0 100 100" className="tshirt-svg">
                                <path d="M30 20 L40 10 L50 15 L60 10 L70 20 L75 35 L65 37 L65 85 L35 85 L35 37 L25 35 Z" fill="#151515" stroke="#000" strokeWidth="1.5" />
                                <circle cx="50" cy="35" r="4" fill="url(#logoGrad)" />
                                <rect x="48" y="42" width="4" height="15" fill="url(#logoGrad)" />
                            </svg>
                        </div>
                    </div>
                );
            case 'caneta_bloco':
                return (
                    <div className="custom-visual notebook-pen-visual">
                        <div className="stationery-container">
                            <div className="notebook-mock">
                                <div className="notebook-bookmark"></div>
                                <svg viewBox="0 0 50 70" className="notebook-logo-svg">
                                    <polygon points="10,20 40,35 10,50" fill="url(#notebookGrad)" />
                                </svg>
                            </div>
                            <div className="pen-mock"></div>
                        </div>
                        <svg className="hidden-defs">
                            <defs>
                                <linearGradient id="notebookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3A00FF" />
                                    <stop offset="100%" stopColor="#BF0040" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                );
            case 'cartoes_visita':
                return (
                    <div className="custom-visual business-cards-visual">
                        <div className="card-mock-wrapper">
                            <div className="business-card back-card">
                                <div className="card-logo-symbol"></div>
                            </div>
                            <div className="business-card front-card">
                                <div className="card-mini-symbol"></div>
                                <div className="card-text-lines">
                                    <div className="card-line-bold"></div>
                                    <div className="card-line-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'packaging_sacos':
                return (
                    <div className="custom-visual packaging-box-visual">
                        <div className="packaging-container">
                            <div className="bag-mock">
                                <div className="bag-handle"></div>
                                <div className="bag-logo"></div>
                            </div>
                            <div className="box-mock">
                                <div className="box-tape"></div>
                                <div className="box-logo"></div>
                            </div>
                        </div>
                    </div>
                );
            case 'naming_concept':
                return (
                    <div className="custom-visual naming-concept-visual">
                        <div className="semantic-nodes">
                            <div className="node center-node">✦</div>
                            <div className="node-line line-1"></div>
                            <div className="node-line line-2"></div>
                            <div className="node-line line-3"></div>
                            <div className="node sub-node node-a">Idea</div>
                            <div className="node sub-node node-b">Nimble</div>
                            <div className="node sub-node node-c">Brand</div>
                        </div>
                    </div>
                );
            case 'tagline_slogan':
                return (
                    <div className="custom-visual tagline-slogan-visual">
                        <div className="slogan-banner">
                            <div className="slogan-stripe blue-stripe">E-NIMBLE</div>
                            <div className="slogan-stripe red-stripe">GO DIGITAL</div>
                        </div>
                    </div>
                );
            case 'tom_voz':
                return (
                    <div className="custom-visual tone-of-voice-visual">
                        <div className="soundwaves-container">
                            <div className="wave-bar bar-1"></div>
                            <div className="wave-bar bar-2"></div>
                            <div className="wave-bar bar-3"></div>
                            <div className="wave-bar bar-4"></div>
                            <div className="wave-bar bar-5"></div>
                            <div className="wave-bar bar-6"></div>
                            <div className="wave-bar bar-7"></div>
                        </div>
                    </div>
                );
            case 'manifesto_marca':
                return (
                    <div className="custom-visual brand-manifesto-visual">
                        <div className="manifesto-page">
                            <div className="manifesto-quote-mark">“</div>
                            <div className="manifesto-lines">
                                <div className="manifesto-line m-line-1"></div>
                                <div className="manifesto-line m-line-2"></div>
                                <div className="manifesto-line m-line-3"></div>
                                <div className="manifesto-line m-line-4"></div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="service-item-placeholder">
                        <div className="placeholder-crosshairs">+</div>
                        <span className="placeholder-text">{item.title}</span>
                    </div>
                );
        }
    };

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
                        <div className={`br-enviro-item reveal delay-1 ${enviroActiveIndex === 0 ? 'active' : ''}`}>
                            <div className="br-env-mockup digital">
                                <div className="br-env-bar"><span></span><span></span><span></span></div>
                                <div className="br-env-body">
                                    <div className="br-env-logo"></div>
                                    <div className="br-env-lines"><div></div><div></div></div>
                                </div>
                            </div>
                            <span>Website</span>
                        </div>
                        <div className={`br-enviro-item reveal delay-2 ${enviroActiveIndex === 1 ? 'active' : ''}`}>
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
                        <div className={`br-enviro-item reveal delay-3 ${enviroActiveIndex === 2 ? 'active' : ''}`}>
                            <div className="br-env-mockup social-mock">
                                <div className="br-env-avatar"></div>
                                <div className="br-env-post-block">
                                    <div></div><div></div><div></div>
                                </div>
                            </div>
                            <span>Redes Sociais</span>
                        </div>
                        <div className={`br-enviro-item reveal delay-4 ${enviroActiveIndex === 3 ? 'active' : ''}`}>
                            <div className="br-env-mockup pack-mock">
                                <div className="br-env-pack">
                                    <div className="br-env-logo sm"></div>
                                </div>
                            </div>
                            <span>Packaging</span>
                        </div>
                        <div className={`br-enviro-item reveal delay-4 ${enviroActiveIndex === 4 ? 'active' : ''}`}>
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
                                                    {renderItemVisual(item)}
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
                            <div className={`br-pillar-card ${emotionActiveIndex === 0 ? 'active' : ''}`}>
                                <span className="br-pillar-num">01</span>
                                <h4>Confiança</h4>
                                <p>Uma identidade que transmite profissionalismo.</p>
                            </div>
                            <div className={`br-pillar-card ${emotionActiveIndex === 1 ? 'active' : ''}`}>
                                <span className="br-pillar-num">02</span>
                                <h4>Diferenciação</h4>
                                <p>Deixe de competir apenas pelo preço.</p>
                            </div>
                            <div className={`br-pillar-card ${emotionActiveIndex === 2 ? 'active' : ''}`}>
                                <span className="br-pillar-num">03</span>
                                <h4>Conectar</h4>
                                <p>As pessoas usam marcas com que se identificam.</p>
                            </div>
                            <div className={`br-pillar-card ${emotionActiveIndex === 3 ? 'active' : ''}`}>
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
                        <div className={`br-strat-card reveal delay-1 ${strategyActiveIndex === 0 ? 'active' : ''}`}>
                            <div className="br-sc-num">01</div>
                            <h4>Descoberta</h4>
                            <p>Compreendemos o negócio, o mercado e os objetivos.</p>
                        </div>
                        <div className={`br-strat-card reveal delay-2 ${strategyActiveIndex === 1 ? 'active' : ''}`}>
                            <div className="br-sc-num">02</div>
                            <h4>Conceito</h4>
                            <p>Exploramos diferentes direções até encontrar a identidade certa.</p>
                        </div>
                        <div className={`br-strat-card reveal delay-3 ${strategyActiveIndex === 2 ? 'active' : ''}`}>
                            <div className="br-sc-num">03</div>
                            <h4>Refinamento</h4>
                            <p>Ajustamos cada detalhe para garantir consistência e impacto.</p>
                        </div>
                        <div className={`br-strat-card reveal delay-4 ${strategyActiveIndex === 3 ? 'active' : ''}`}>
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
