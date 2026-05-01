'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Ads.css';

const Ads = () => {
    useScrollReveal();

    useEffect(() => {
        document.body.classList.add('ads-body');
        return () => document.body.classList.remove('ads-body');
    }, []);

    return (
        <main>
            {/* Grid BG */}
            <div className="grid-bg"></div>

            {/* Radar Hero */}
            <section className="ads-hero">
                <div className="radar-container">
                    <div className="radar-line"></div>
                    <div className="target-dot" style={{ top: '20%', left: '30%' }}></div>
                    <div className="target-dot" style={{ top: '70%', left: '80%', animationDelay: '0.5s' }}></div>
                    <div className="target-dot" style={{ top: '40%', left: '60%', animationDelay: '1.2s' }}></div>
                </div>
                <div className="hero-content-ads reveal">
                    <h1>Target Locked.</h1>
                    <div className="subtitle-typewriter">Atingimos o seu cliente ideal. {">_"}</div>
                </div>
            </section>

            {/* Data Cards */}
            <section className="data-section">
                <div className="container">
                    <div className="mb-5">
                        <h2 style={{ fontFamily: 'Syne', fontSize: '2.5rem' }}> Protocolos de Growth</h2>
                        <p style={{ opacity: 0.7 }}>Análise de métricas em tempo real.</p>
                    </div>
                    <div className="data-grid">
                        <div className="data-card reveal delay-1">
                            <div className="data-head">
                                <span className="data-label">CTR Médio</span>
                                <span style={{ color: 'var(--ads-primary)' }}>▲ +2.4%</span>
                            </div>
                            <div className="data-val">4.8%</div>
                            <div className="bar-chart" style={{ marginTop: '20px' }}>
                                <div className="bar" style={{ height: '30%' }}></div>
                                <div className="bar" style={{ height: '50%' }}></div>
                                <div className="bar" style={{ height: '40%' }}></div>
                                <div className="bar" style={{ height: '80%' }}></div>
                                <div className="bar" style={{ height: '60%' }}></div>
                                <div className="bar" style={{ height: '100%' }}></div>
                            </div>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--ads-text-muted)' }}>Otimização criativa para maximizar cliques qualificados.</p>
                        </div>
                        <div className="data-card reveal delay-2">
                            <div className="data-head">
                                <span className="data-label">ROAS Target</span>
                                <span style={{ color: 'var(--ads-primary)' }}>System Optimal</span>
                            </div>
                            <div className="data-val">8.5x</div>
                            <p style={{ fontSize: '4rem', textAlign: 'right', opacity: 0.05, position: 'absolute', bottom: '-20px', right: 0 }}>$</p>
                            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--ads-text-muted)' }}>Por cada 1€ investido, garantimos o retorno máximo possível.</p>
                        </div>
                        <div className="data-card reveal delay-3">
                            <div className="data-head">
                                <span className="data-label">Status</span>
                                <span style={{ color: 'var(--ads-alert)' }}>● Tracking</span>
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>Pixel Perfect</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--ads-text-muted)' }}>Instalação avançada de Conversões API (CAPI) para Facebook e Google Ads.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SPEED & IMPACT ===== */}
            <section className="ads-speed-section">
                <div className="container">
                    <div className="ads-speed-content reveal">
                        <div className="ads-speed-text">
                            <span className="ads-chip">Velocidade & Impacto</span>
                            <h2>Enquanto o orgânico cresce,<br /><span className="ads-gradient-text">os ads já estão a vender.</span></h2>
                            <p>Coloque a sua marca frente ao público certo em minutos — não meses. Paid Ads é o acelerador que transforma budget em clientes reais, com precisão cirúrgica e resultados imediatos.</p>
                        </div>
                        <div className="ads-speed-visual">
                            <div className="ads-radar-mini">
                                <div className="ads-rm-ring r1"></div>
                                <div className="ads-rm-ring r2"></div>
                                <div className="ads-rm-ring r3"></div>
                                <div className="ads-rm-center">
                                    <span>LIVE</span>
                                </div>
                                <div className="ads-rm-dot d1"></div>
                                <div className="ads-rm-dot d2"></div>
                                <div className="ads-rm-dot d3"></div>
                                <div className="ads-rm-dot d4"></div>
                                <div className="ads-rm-dot d5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== STRATEGIC TARGETING ===== */}
            <section className="ads-target-section">
                <div className="container">
                    <div className="ads-target-header reveal">
                        <span className="ads-chip">Vantagem Estratégica</span>
                        <h2>Precisão Que o Orgânico <span className="gradient-word">Não Tem</span></h2>
                    </div>

                    <div className="ads-target-grid">
                        <div className="ads-target-card reveal delay-1">
                            <div className="ads-tc-icon">
                                <div className="ads-crosshair">
                                    <span></span><span></span><span></span><span></span>
                                    <div className="ads-ch-dot"></div>
                                </div>
                            </div>
                            <h3>Micro-Segmentação</h3>
                            <p>Idade, interesses, comportamento de compra, localização — encontramos o seu comprador ideal num universo de milhões.</p>
                        </div>

                        <div className="ads-target-card reveal delay-2">
                            <div className="ads-tc-icon">
                                <div className="ads-intent-pulse">
                                    <div className="ads-ip-wave w1"></div>
                                    <div className="ads-ip-wave w2"></div>
                                    <div className="ads-ip-core">
                                        <img src="/servicos/ads/e-nimble-ads-intent-search.png" alt="Momento de Intenção de Compra - e-nimble" className="ads-icon-img" />
                                    </div>
                                </div>
                            </div>
                            <h3>Momento de Intenção</h3>
                            <p>Apareça exatamente quando alguém pesquisa pelo que vende. No segundo exato em que estão prontos para comprar.</p>
                        </div>

                        <div className="ads-target-card reveal delay-3">
                            <div className="ads-tc-icon">
                                <div className="ads-control-grid">
                                    <div className="ads-cg active"></div>
                                    <div className="ads-cg active"></div>
                                    <div className="ads-cg"></div>
                                    <div className="ads-cg active"></div>
                                    <div className="ads-cg"></div>
                                    <div className="ads-cg active"></div>
                                    <div className="ads-cg"></div>
                                    <div className="ads-cg active"></div>
                                    <div className="ads-cg active"></div>
                                </div>
                            </div>
                            <h3>Controlo Total</h3>
                            <p>Decida onde, quando e como a sua marca aparece. Sem algoritmos aleatórios — só intenção estratégica.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DIGITAL LANDSCAPE / PRESENCE ===== */}
            <section className="ads-landscape-section">
                <div className="container">
                    <div className="ads-landscape-header reveal">
                        <span className="ads-chip">Digital Landscape</span>
                        <h2>Omnipresença nos Espaços que Importam</h2>
                    </div>

                    <div className="ads-landscape-grid">
                        <div className="ads-land-item reveal delay-1">
                            <div className="ads-land-screen">
                                <div className="ads-land-bar"><span></span><span></span><span></span></div>
                                <div className="ads-land-content">
                                    <div className="ads-land-ad">AD</div>
                                </div>
                            </div>
                            <span>Google Search</span>
                        </div>
                        <div className="ads-land-item reveal delay-2">
                            <div className="ads-land-screen social">
                                <div className="ads-land-post"></div>
                                <div className="ads-land-post ads-land-sponsored">
                                    <span>Sponsored</span>
                                </div>
                                <div className="ads-land-post"></div>
                            </div>
                            <span>Social Feed</span>
                        </div>
                        <div className="ads-land-item reveal delay-3">
                            <div className="ads-land-screen video">
                                <div className="ads-land-play">▶</div>
                                <div className="ads-land-overlay">Ad · 0:15</div>
                            </div>
                            <span>Video & Reels</span>
                        </div>
                        <div className="ads-land-item reveal delay-4">
                            <div className="ads-land-screen display">
                                <div className="ads-land-banner"></div>
                                <div className="ads-land-text-lines">
                                    <div></div><div></div><div></div>
                                </div>
                            </div>
                            <span>Display Network</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PERFORMANCE & OPTIMIZATION ===== */}
            <section className="ads-perf-section">
                <div className="container">
                    <div className="ads-perf-header reveal">
                        <span className="ads-chip">Fluxo de Performance</span>
                        <h2>Escalar Com <span className="gradient-word">Segurança</span></h2>
                    </div>

                    <div className="ads-perf-flow">
                        <div className="ads-perf-step reveal delay-1">
                            <div className="ads-ps-num">01</div>
                            <div className="ads-ps-bar">
                                <div className="ads-ps-fill" style={{ '--pf': '30%' }}></div>
                            </div>
                            <h4>Lançar</h4>
                            <p>Testes iniciais com múltiplos criativos e audiências.</p>
                        </div>
                        <div className="ads-perf-step reveal delay-2">
                            <div className="ads-ps-num">02</div>
                            <div className="ads-ps-bar">
                                <div className="ads-ps-fill" style={{ '--pf': '55%' }}></div>
                            </div>
                            <h4>Medir</h4>
                            <p>Tracking profundo de cada interação e conversão.</p>
                        </div>
                        <div className="ads-perf-step reveal delay-3">
                            <div className="ads-ps-num">03</div>
                            <div className="ads-ps-bar">
                                <div className="ads-ps-fill" style={{ '--pf': '75%' }}></div>
                            </div>
                            <h4>Otimizar</h4>
                            <p>Matar o que não funciona, escalar o que converte.</p>
                        </div>
                        <div className="ads-perf-step reveal delay-4">
                            <div className="ads-ps-num">04</div>
                            <div className="ads-ps-bar">
                                <div className="ads-ps-fill accent" style={{ '--pf': '95%' }}></div>
                            </div>
                            <h4>Dominar</h4>
                            <p>Escala agressiva com ROAS comprovado.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== EXPERTISE / STRATEGIC MANAGEMENT ===== */}
            <section className="ads-expertise-section">
                <div className="container">
                    <div className="ads-expertise-content reveal">
                        <div className="ads-expertise-text">
                            <span className="ads-chip">Gestão Estratégica</span>
                            <h2>Decisões Baseadas em <span className="gradient-word">Dados.</span><br />Nunca em Suposições.</h2>
                            <p>A nossa equipa analisa, ajusta e otimiza campanhas diariamente.<br />Cada decisão é informada por dados reais — não intuição.</p>
                        </div>
                        <div className="ads-expertise-visual">
                            <div className="ads-dash-mock">
                                <div className="ads-dm-topbar">
                                    <span className="ads-dm-dot r"></span>
                                    <span className="ads-dm-dot y"></span>
                                    <span className="ads-dm-dot g"></span>
                                </div>
                                <div className="ads-dm-body">
                                    <div className="ads-dm-row">
                                        <span className="ads-dm-label">Campaign Alpha</span>
                                        <div className="ads-dm-bar"><div style={{ width: '88%' }}></div></div>
                                        <span className="ads-dm-val">8.2x</span>
                                    </div>
                                    <div className="ads-dm-row">
                                        <span className="ads-dm-label">Campaign Beta</span>
                                        <div className="ads-dm-bar"><div style={{ width: '65%' }}></div></div>
                                        <span className="ads-dm-val">5.4x</span>
                                    </div>
                                    <div className="ads-dm-row">
                                        <span className="ads-dm-label">Campaign Gamma</span>
                                        <div className="ads-dm-bar"><div style={{ width: '92%' }}></div></div>
                                        <span className="ads-dm-val">9.1x</span>
                                    </div>
                                    <div className="ads-dm-row paused">
                                        <span className="ads-dm-label">Campaign Delta</span>
                                        <div className="ads-dm-bar"><div style={{ width: '15%' }}></div></div>
                                        <span className="ads-dm-val off">Paused</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MOMENTUM CTA ===== */}
            <section className="ads-momentum-cta">
                <div className="container reveal">
                    <div className="ads-momentum-content">
                        <div className="ads-momentum-arrows">
                            <span className="ads-ma">›</span>
                            <span className="ads-ma">›</span>
                            <span className="ads-ma">›</span>
                        </div>
                        <h2>Os seus concorrentes já estão a <span className="gradient-word">investir.</span><br /><span className="ads-gradient-text">E os seus clientes estão a vê-los primeiro.</span></h2>
                        <Link href="/contactos" className="cy-btn">Iniciar Campanha</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Ads;
