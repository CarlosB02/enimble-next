'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Branding.css';

const Branding = () => {
    useScrollReveal();
    const [cardTheme, setCardTheme] = useState('light');
    const [titleFont, setTitleFont] = useState('sans');

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
                card: { background: '#ff0055', color: 'white', borderColor: 'white' },
                logo: { background: '#ffff00' },
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
                    <span>VISUAL</span><br />
                    <span>ALCHEMY</span>
                </h1>
                <p style={{ marginTop: '2rem', fontSize: '1.2rem', maxWidth: '500px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    Transformamos conceitos abstratos em marcas tangíveis, memoráveis e prontas para escalar.
                </p>
                <div style={{ marginTop: '3rem', border: '1px solid black', padding: '10px 20px', borderRadius: '50px', background: 'white', position: 'relative', zIndex: 2 }}>
                    SCROLL TO LAB ↓
                </div>
            </section>

            {/* Interactive DNA Section */}
            <section className="dna-section">
                <div className="dna-controls reveal">
                    <h2 className="mb-5" style={{ fontSize: '2.5rem', lineHeight: 1 }}>Defina a sua<br />Essência.</h2>
                    <div className="control-group">
                        <span className="control-label">Paleta de Cores</span>
                        <div className="swatch-row">
                            <div className={`swatch ${cardTheme === 'dark' ? 'active' : ''}`} style={{ background: 'linear-gradient(45deg, #1a1a1a, #444)' }}
                                onClick={() => handleThemeChange('dark')}></div>
                            <div className={`swatch ${cardTheme === 'vibrant' ? 'active' : ''}`} style={{ background: 'linear-gradient(45deg, #ff0055, #ff5500)' }}
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
                    <p style={{ marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>
                        *Isto é apenas o início. No nosso processo completo, exploramos +50 variações até encontrar a perfeita.
                    </p>
                </div>
                <div className="dna-preview" style={{ background: styles.previewBg }}>
                    <div id="brand-preview-card" style={styles.card}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', ...styles.logo }} id="card-logo"></div>
                        <div>
                            <h2 style={{
                                fontSize: '2.5rem', lineHeight: 1.1, marginBottom: '0.5rem',
                                fontFamily: titleFont === 'serif' ? "'Playfair Display', serif" : "'Syne', sans-serif",
                                fontStyle: titleFont === 'serif' ? "italic" : "normal"
                            }} id="card-title">Brand Name.</h2>
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
                <div className="service-row reveal">
                    <span className="service-num">01</span>
                    <span className="service-name">Logótipo & Símbolo</span>
                    <span className="service-arrow">→</span>
                </div>
                <div className="service-row reveal">
                    <span className="service-num">02</span>
                    <span className="service-name">Manual de Normas</span>
                    <span className="service-arrow">→</span>
                </div>
                <div className="service-row reveal">
                    <span className="service-num">03</span>
                    <span className="service-name">Estacionário & Merch</span>
                    <span className="service-arrow">→</span>
                </div>
                <div className="service-row reveal">
                    <span className="service-num">04</span>
                    <span className="service-name">Naming & Slogan</span>
                    <span className="service-arrow">→</span>
                </div>
            </section>

            {/* ===== BRAND IDENTITY IMPORTANCE ===== */}
            <section className="br-identity-section">
                <div className="container">
                    <div className="br-identity-content reveal">
                        <div className="br-identity-text">
                            <span className="br-chip">A Fundação</span>
                            <h2>Uma marca forte não é só visual.<br />É a <span className="br-accent">base de tudo.</span></h2>
                            <p>Reconhecimento, diferenciação, confiança — tudo começa na identidade. Uma marca bem construída é a diferença entre ser lembrado e ser ignorado.</p>
                        </div>
                        <div className="br-identity-visual">
                            <div className="br-prism">
                                <div className="br-prism-face f1"><span>Reconhecimento</span></div>
                                <div className="br-prism-face f2"><span>Diferenciação</span></div>
                                <div className="br-prism-face f3"><span>Confiança</span></div>
                                <div className="br-prism-center">Brand</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== COMPETITIVE DIFFERENTIATION ===== */}
            <section className="br-differ-section">
                <div className="container">
                    <div className="br-differ-header reveal">
                        <span className="br-chip">Vantagem Competitiva</span>
                        <h2>Destaque Que Se <span className="gradient-word">Sente</span></h2>
                    </div>

                    <div className="br-differ-grid">
                        <div className="br-differ-card reveal delay-1">
                            <div className="br-dc-icon">
                                <img src="/servicos/branding/e-nimble-branding-memorability.png" alt="Memorabilidade de Marca - e-nimble" className="br-icon-img" />
                            </div>
                            <h3>Memorabilidade</h3>
                            <p>Uma identidade coerente fica gravada na mente do público. Reconhecimento instantâneo.</p>
                        </div>
                        <div className="br-differ-card reveal delay-2">
                            <div className="br-dc-icon">
                                <img src="/servicos/branding/e-nimble-branding-connection.png" alt="Conexão com o Cliente Branding - e-nimble" className="br-icon-img" />
                            </div>
                            <h3>Conexão com o Cliente</h3>
                            <p>Marcas com personalidade criam relações, não apenas transações.</p>
                        </div>
                        <div className="br-differ-card reveal delay-3">
                            <div className="br-dc-icon">
                                <img src="/servicos/branding/e-nimble-branding-consistency.png" alt="Consistência de Marca Branding - e-nimble" className="br-icon-img" />
                            </div>
                            <h3>Consistência Total</h3>
                            <p>Do digital ao físico, cada touchpoint comunica a mesma mensagem.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BRAND ENVIRONMENTS ===== */}
            <section className="br-enviro-section">
                <div className="container">
                    <div className="br-enviro-header reveal">
                        <span className="br-chip">Brand Touchpoints</span>
                        <h2>Uma Marca. Todos os <span className="gradient-word">Ambientes.</span></h2>
                    </div>

                    <div className="br-enviro-grid">
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
                </div>
            </section>

            {/* ===== EMOTIONAL BRANDING ===== */}
            <section className="br-emotion-section">
                <div className="container">
                    <div className="br-emotion-content reveal">
                        <div className="br-emotion-visual">
                            <div className="br-story-ring">
                                <div className="br-sr-segment s1"><span>Story</span></div>
                                <div className="br-sr-segment s2"><span>Personalidade</span></div>
                                <div className="br-sr-segment s3"><span>Valores</span></div>
                                <div className="br-sr-segment s4"><span>Tom de Voz</span></div>
                                <div className="br-sr-core">
                                    <img src="/servicos/branding/e-nimble-branding-emotional-core.png" alt="Coração Emocional Branding - e-nimble" className="br-core-img" />
                                </div>
                            </div>
                        </div>
                        <div className="br-emotion-text">
                            <span className="br-chip">Branding Emocional</span>
                            <h2>Marcas fortes criam <span className="gradient-word">significado.</span></h2>
                            <p>Além do logótipo, existe uma história, uma personalidade e um sistema de valores que constrói relações duradouras com o público. É isto que transforma clientes em embaixadores.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PROFESSIONAL STRATEGY ===== */}
            <section className="br-strategy-section">
                <div className="container">
                    <div className="br-strategy-header reveal">
                        <span className="br-chip">Método Estratégico</span>
                        <h2>Arquitetura de <span className="gradient-word">Marca</span></h2>
                    </div>

                    <div className="br-strategy-grid">
                        <div className="br-strat-card reveal delay-1">
                            <div className="br-sc-num">01</div>
                            <h4>Discovery</h4>
                            <p>Entender o negócio, o mercado e os objetivos antes de desenhar um único pixel.</p>
                        </div>
                        <div className="br-strat-card reveal delay-2">
                            <div className="br-sc-num">02</div>
                            <h4>Conceptualização</h4>
                            <p>Explorar +50 direções visuais até encontrar a que comunica a essência certa.</p>
                        </div>
                        <div className="br-strat-card reveal delay-3">
                            <div className="br-sc-num">03</div>
                            <h4>Refinamento</h4>
                            <p>Iterar, polir e testar cada elemento até à perfeição absoluta.</p>
                        </div>
                        <div className="br-strat-card reveal delay-4">
                            <div className="br-sc-num">04</div>
                            <h4>Entrega</h4>
                            <p>Manual completo, ficheiros fonte e guidelines para aplicação consistente.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="brand-cta">
                <div className="container">
                    <h2 className="cta-big">Não seja apenas <span className="gradient-word">mais um.</span></h2>
                    <Link href="/contactos" className="btn-brand"><span className="btn-brand-text">Iniciar Projeto</span></Link>
                </div>
            </section>
        </main>
    );
};

export default Branding;
