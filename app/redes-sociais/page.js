'use client';

import React from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import CircularGallery from '@/components/ui/CircularGallery';
import './RedesSociais.css';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = React.useState(0);
    const countRef = React.useRef(null);

    React.useEffect(() => {
        let startTime = null;
        let animationFrame = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animationFrame = requestAnimationFrame(animate);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (countRef.current) observer.observe(countRef.current);
        
        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            observer.disconnect();
        };
    }, [end, duration]);

    return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};


const RedesSociais = () => {
    useScrollReveal();

    return (
        <main>
            {/* Hero Section */}
            <section className="social-hero">
                <div className="container hero-split">
                    <div className="hero-text-social reveal">
                        <div className="live-badge">🔴 LIVE NOW</div>
                        <h1 className="social-title">A sua marca num <span className="text-gradient-social">Nível Viral.</span>
                        </h1>
                        <p className="social-subtitle">Transforme seguidores em fãs e likes em vendas. Gerimos as suas redes
                            com estratégia, criatividade e dados.</p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#contactos" className="btn-social">Começar Agora</a>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '-10px' }}>
                                <div
                                    style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ddd', border: '2px solid #0f0f0f', marginRight: '-10px' }}>
                                </div>
                                <div
                                    style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#aaa', border: '2px solid #0f0f0f', marginRight: '-10px' }}>
                                </div>
                                <div
                                    style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#888', border: '2px solid #0f0f0f' }}>
                                </div>
                                <span style={{ marginLeft: '15px', fontWeight: 600, fontSize: '0.9rem' }}>+200
                                    Parceiros</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual-social reveal delay-1">
                        <div className="phone-frame">
                            <div className="phone-notch"></div>
                            <div className="phone-screen">
                                <div className="feed-item">
                                    <div className="feed-header">
                                        <div className="feed-avatar"></div>
                                        <div className="feed-name"></div>
                                    </div>
                                    <div className="feed-img">
                                        <div className="reaction-hearts">
                                            <span>❤️</span>
                                            <span>🔥</span>
                                            <span>😍</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="feed-item" style={{ opacity: 0.5 }}>
                                    <div className="feed-header">
                                        <div className="feed-avatar" style={{ background: 'blue' }}></div>
                                        <div className="feed-name"></div>
                                    </div>
                                    <div className="feed-img" style={{ background: '#333', height: '100px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <div className="marquee-wrapper">
                <div className="marquee-content">
                    <span>INSTAGRAM • STRATEGY • TIKTOK • GROWTH • FACEBOOK • COMMUNITY • LINKEDIN • CONTENT • </span>
                    <span>INSTAGRAM • STRATEGY • TIKTOK • GROWTH • FACEBOOK • COMMUNITY • LINKEDIN • CONTENT • </span>
                </div>
            </div>

            {/* Bento Grid — "O que incluímos" */}
            <section className="social-services-section">
                <div className="container">
                    <div className="text-center mb-5 reveal">
                        <h2 className="rs-section-title">O que <span className="gradient-word">incluímos</span>?</h2>
                        <p className="rs-section-subtitle">Tudo o que precisa para dominar o digital.</p>
                    </div>

                    <div className="bento-grid">
                        <div className="bento-card large reveal delay-1">
                            <div className="bento-icon">
                                <img src="/servicos/redes-sociais/e-nimble-social-content-creation.png" alt="Criação de Conteúdo Social - e-nimble" className="rs-icon-img" />
                            </div>
                            <div>
                                <h3>Criação de Conteúdo</h3>
                                <p>Design gráfico, edição de vídeo (Reels/TikToks) e fotografia. Criamos visuais que
                                    param o scroll e captam a atenção nos primeiros 3 segundos.</p>
                                <div className="bento-cta">Ver Portfolio <span className="arrow">→</span></div>
                            </div>
                        </div>

                        <div className="bento-card reveal delay-2">
                            <div className="bento-icon">
                                <img src="/servicos/redes-sociais/e-nimble-social-strategy-planning.png" alt="Planeamento Estratégico Social - e-nimble" className="rs-icon-img" />
                            </div>
                            <div>
                                <h3>Planeamento</h3>
                                <p>Calendários editoriais estratégicos para garantir consistência.</p>
                                <div className="bento-cta">Definir Estratégia <span className="arrow">→</span></div>
                            </div>
                        </div>

                        <div className="bento-card accent-bg reveal delay-3">
                            <div className="bento-icon">
                                <img src="/servicos/redes-sociais/e-nimble-paid-social-traffic.png" alt="Gestão de Tráfego Pago Social - e-nimble" className="rs-icon-img" />
                            </div>
                            <div>
                                <h3>Gestão de Tráfego</h3>
                                <p>Alcance milhares de novos clientes com ROI máximo.</p>
                                <div className="bento-cta">Maximizar Vendas <span className="arrow">→</span></div>
                            </div>
                        </div>

                        <div className="bento-card large reveal delay-4">
                            <div className="bento-icon">
                                <img src="/servicos/redes-sociais/e-nimble-social-community-management.png" alt="Gestão de Comunidade Social - e-nimble" className="rs-icon-img" />
                            </div>
                            <div>
                                <h3>Community Manager</h3>
                                <p>Não deixamos ninguém sem resposta. Interagimos com seguidores, respondemos a DMs e
                                    gerimos crises de reputação em tempo real.</p>
                                <div className="bento-cta">Gerir Comunidade <span className="arrow">→</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== O PODER DE APARECER ===== */}
            <section className="rs-appear-section">
                <div className="container">
                    <h2 className="rs-appear-title reveal">
                        O Poder de <span className="gradient-word">Aparecer</span>
                    </h2>
                    
                    <div className="rs-appear-grid">
                        <div className="rs-phones-visual reveal">
                            {/* Instagram Phone */}
                            <div className="phone-mockup instagram floating">
                                <div className="phone-header">
                                    <div className="insta-logo">Instagram</div>
                                </div>
                                <div className="phone-content">
                                    <div className="insta-stories">
                                        <div className="story-ring active"></div>
                                        <div className="story-ring"></div>
                                        <div className="story-ring"></div>
                                        <div className="story-ring"></div>
                                    </div>
                                    <div className="insta-profile">
                                        <div className="insta-avatar"></div>
                                        <div className="insta-stats">
                                            <div className="stat">
                                                <strong><Counter end={12400} /></strong>
                                                <span>Seguidores</span>
                                            </div>
                                            <button className="insta-follow-btn">Seguir</button>
                                        </div>
                                    </div>
                                    <div className="insta-feed-mock"></div>
                                    <div className="insta-actions">
                                        <div className="action-left">
                                            <span>❤️</span>
                                            <span>💬</span>
                                            <span>↗️</span>
                                        </div>
                                        <div className="action-right">
                                            <span>🔖</span>
                                        </div>
                                    </div>
                                    <div className="insta-likes">
                                        Curtido por <strong>user_viral</strong> e <strong>outras <Counter end={1240} /> pessoas</strong>
                                    </div>
                                    <div className="insta-caption">
                                        <strong>e-nimble</strong> Transformando a sua presença digital...
                                    </div>
                                </div>
                            </div>

                            {/* TikTok Phone */}
                            <div className="phone-mockup tiktok floating-alt">
                                <div className="tiktok-overlay">
                                    <div className="tiktok-stats">
                                        <div className="t-stat">
                                            <span className="t-icon">▶</span>
                                            <strong><Counter end={450000} suffix="+" /></strong>
                                        </div>
                                    </div>
                                    <div className="tiktok-actions">
                                        <div className="t-action">❤️ 12k</div>
                                        <div className="t-action">💬 432</div>
                                        <div className="t-action">↗️ 1.2k</div>
                                    </div>
                                </div>
                                <div className="tiktok-video-bg"></div>
                            </div>
                        </div>

                        <div className="rs-appear-text reveal">
                            <div className="advantage-item">
                                <div className="adv-num">01</div>
                                <div className="adv-content">
                                    <h3>Autoridade Instantânea</h3>
                                    <p>Quem não é visto, não é lembrado. Uma presença forte gera confiança imediata no mercado.</p>
                                </div>
                            </div>
                            <div className="advantage-item">
                                <div className="adv-num">02</div>
                                <div className="adv-content">
                                    <h3>Máquina de Vendas</h3>
                                    <p>Transformamos a atenção em faturação com funis de conteúdo desenhados para converter.</p>
                                </div>
                            </div>
                            <div className="advantage-item">
                                <div className="adv-num">03</div>
                                <div className="adv-content">
                                    <h3>Comunidade Ativa</h3>
                                    <p>Não apenas seguidores, mas fãs da sua marca que compram, repetem e recomendam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== REVENUE DRIVERS (4 Pillars) ===== */}
            <section className="rs-drivers-section">
                <div className="container">
                    <div className="rs-drivers-header reveal">
                        <span className="rs-tag">Revenue Drivers</span>
                        <h2>4 Motores de <span className="gradient-word">Crescimento</span></h2>
                    </div>

                    <div className="rs-drivers-grid">
                        <div className="rs-driver-card reveal delay-1">
                            <div className="rs-driver-num">01</div>
                            <div className="rs-driver-emoji">
                                <img src="/servicos/redes-sociais/marketing-agency-social-captivation.png" alt="Market Captivation Social - e-nimble" className="rs-icon-img" />
                            </div>
                            <h3>Market Captivation</h3>
                            <span className="rs-driver-label">Orgânico</span>
                            <ul>
                                <li>Seguidores passivos → Advogados ativos</li>
                                <li>Tráfego previsível sem pagar ads</li>
                                <li>Brand voice que escala confiança</li>
                            </ul>
                        </div>

                        <div className="rs-driver-card reveal delay-2">
                            <div className="rs-driver-num">02</div>
                            <div className="rs-driver-emoji">
                                <img src="/servicos/redes-sociais/marketing-agency-social-scaling.png" alt="High-Velocity Social Scaling - e-nimble" className="rs-icon-img" />
                            </div>
                            <h3>High-Velocity Scaling</h3>
                            <span className="rs-driver-label">Paid Ads</span>
                            <ul>
                                <li>Campanhas ROAS-first agressivas</li>
                                <li>Superar concorrentes em spend e resultado</li>
                                <li>Funis otimizados para conversão imediata</li>
                            </ul>
                        </div>

                        <div className="rs-driver-card reveal delay-3">
                            <div className="rs-driver-num">03</div>
                            <div className="rs-driver-emoji">
                                <img src="/servicos/redes-sociais/marketing-agency-social-conversion.png" alt="Conversion-First Social Content - e-nimble" className="rs-icon-img" />
                            </div>
                            <h3>Conversion-First Content</h3>
                            <span className="rs-driver-label">Criativo</span>
                            <ul>
                                <li>Visuais que quebram padrões de scroll</li>
                                <li>Cada asset engenhado para ação</li>
                                <li>Hook → Desejo → Conversão</li>
                            </ul>
                        </div>

                        <div className="rs-driver-card reveal delay-4">
                            <div className="rs-driver-num">04</div>
                            <div className="rs-driver-emoji">
                                <img src="/servicos/redes-sociais/marketing-agency-social-intelligence.png" alt="Competitive Social Intelligence - e-nimble" className="rs-icon-img" />
                            </div>
                            <h3>Competitive Intelligence</h3>
                            <span className="rs-driver-label">Data</span>
                            <ul>
                                <li>Roubar market share com dados</li>
                                <li>Identificar pockets de lucro inexplorados</li>
                                <li>Benchmarks que geram vantagem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PROOF OF TRANSFORMATION ===== */}
            <section className="rs-proof-section">
                <div className="container">
                    <div className="rs-proof-header reveal">
                        <span className="rs-tag">Proof of Transformation</span>
                        <h2>Não Mostramos Bonito. Mostramos <span className="gradient-word">Resultados.</span></h2>
                    </div>

                    <div style={{ height: '600px', position: 'relative' }} className="reveal delay-1">
                        <CircularGallery 
                            bend={3} 
                            textColor="#ffffff" 
                            borderRadius={0.05} 
                            scrollEase={0.02}
                            scrollSpeed={2}
                        />
                    </div>
                </div>
            </section>

            {/* ===== THE CERTAINTY PATH ===== */}
            <section className="rs-path-section">
                <div className="container">
                    <div className="rs-path-header reveal">
                        <span className="rs-tag">The Certainty Path</span>
                        <h2>4 Passos. <span className="gradient-word">Zero Incerteza.</span></h2>
                    </div>

                    <div className="rs-path-track">
                        <div className="rs-path-line"></div>
                        <div className="rs-path-step reveal delay-1">
                            <div className="rs-path-dot"><span>01</span></div>
                            <h4>Audit & Extraction</h4>
                            <p>Encontrar o ouro escondido.</p>
                        </div>
                        <div className="rs-path-step reveal delay-2">
                            <div className="rs-path-dot"><span>02</span></div>
                            <h4>Strategy Injection</h4>
                            <p>O plano para vencer.</p>
                        </div>
                        <div className="rs-path-step reveal delay-3">
                            <div className="rs-path-dot"><span>03</span></div>
                            <h4>Aggressive Execution</h4>
                            <p>Ir para o terreno.</p>
                        </div>
                        <div className="rs-path-step reveal delay-4">
                            <div className="rs-path-dot"><span>04</span></div>
                            <h4>Scale & Dominate</h4>
                            <p>Multiplicar o que funciona.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* ===== FINAL CTA ===== */}
            <section className="rs-final-cta">
                <div className="container reveal">
                    <h2>Pronto para <span className="gradient-word">dominar?</span></h2>
                    <Link href="/contactos" className="btn-social" style={{ fontSize: '1.2rem', padding: '1.5rem 4rem' }}>Agendar
                        Reunião</Link>
                </div>
            </section>
        </main>
    );
};

export default RedesSociais;
