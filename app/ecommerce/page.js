'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Ecommerce.css';
import AnimatedDashboard from '@/components/ui/AnimatedDashboard';

const Ecommerce = () => {
    useScrollReveal();

    useEffect(() => {
        document.body.classList.add('shop-body');
        return () => document.body.classList.remove('shop-body');
    }, []);

    return (
        <main>
            {/* 3D Hero */}
            <section className="shop-hero">
                <div className="carousel-3d">
                    <div className="float-item">
                        <img src="/servicos/ecommerce/e-nimble-ecommerce-product-shoe.png" alt="Produto Calçado E-commerce - e-nimble" />
                        <div className="float-price">120€</div>
                    </div>
                    <div className="float-item">
                        <img src="/servicos/ecommerce/e-nimble-ecommerce-tech-item.png" alt="Produto Auriculares E-commerce - e-nimble" />
                        <div className="float-price">299€</div>
                    </div>
                    <div className="float-item">
                        <img src="/servicos/ecommerce/e-nimble-ecommerce-luxury-watch.png" alt="Produto Relógio E-commerce - e-nimble" />
                        <div className="float-price">450€</div>
                    </div>
                    <div className="float-item">
                        <img src="/servicos/ecommerce/e-nimble-ecommerce-product-bag.png" alt="Produto Mala E-commerce - e-nimble" />
                        <div className="float-price">850€</div>
                    </div>
                    <div className="float-item">
                        <img src="/servicos/ecommerce/e-nimble-ecommerce-accessories-glasses.png" alt="Produto Óculos E-commerce - e-nimble" />
                        <div className="float-price">180€</div>
                    </div>
                    <div className="float-item">
                        <img src="/servicos/ecommerce/e-nimble-ecommerce-beauty-cosmetic.png" alt="Produto Cosmética E-commerce - e-nimble" />
                        <div className="float-price">45€</div>
                    </div>
                </div>

                <div className="hero-overlay-center">
                    <h1 className="hero-title-shop">Tenha a sua montra <span className="ec-highlight">online</span></h1>
                    <p className="hero-subtitle-shop">Lojas online que vendem enquanto dorme. Rápidas, seguras e impossíveis de ignorar.</p>
                </div>
            </section>

            {/* Platforms Trust - Infinite Slider */}
            <div className="platforms-slider-container reveal">
                <div className="platforms-track">
                    {/* First set of logos */}
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-shopify.png" alt="Shopify - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-woocommerce.png" alt="WooCommerce - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-stripe.png" alt="Stripe - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-klarna.png" alt="Klarna - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-mbway.png" alt="MBWay - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-revolut.png" alt="Revolut - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-paypal.png" alt="PayPal - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-applepay.png" alt="Apple Pay - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-googlepay.png" alt="Google Pay - e-nimble expert" /></div>

                    {/* Second set (duplicated for infinite loop) */}
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-shopify.png" alt="Shopify - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-woocommerce.png" alt="WooCommerce - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-stripe.png" alt="Stripe - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-klarna.png" alt="Klarna - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-mbway.png" alt="MBWay - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-revolut.png" alt="Revolut - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-paypal.png" alt="PayPal - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-applepay.png" alt="Apple Pay - e-nimble expert" /></div>
                    <div className="platform-slide"><img src="/servicos/ecommerce/platforms-googlepay.png" alt="Google Pay - e-nimble expert" /></div>
                </div>
            </div>

            {/* ===== BUSINESS IMPACT / SCALABLE CHANNEL ===== */}
            <section className="ec-impact-section">
                <div className="container">
                    <div className="ec-impact-content reveal">
                        <div className="ec-impact-text">
                            <h2>Enquanto dorme,<br /><span className="ec-highlight">a sua loja vende.</span></h2>
                            <p>Transforme o seu negócio num canal de vendas que funciona 24/7, chega a mais clientes e cresce sem limitações.</p>
                            <div style={{ marginTop: '2rem' }}>
                                <Link href="/contactos" className="smart-btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                    <span>Criar a Minha Loja</span>
                                </Link>
                            </div>
                        </div>
                        <div className="ec-impact-visual" style={{ padding: 0, background: 'transparent', border: 'none', boxShadow: 'none' }}>
                            <AnimatedDashboard />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PORTFOLIO / CASE STUDY ===== */}
            <section className="ec-portfolio-section" id="ec-portfolio">
                <div className="container">
                    <div className="ec-portfolio-header reveal">
                        <h2>Exemplo de uma <span className="gradient-word">Loja Online de Sucesso</span></h2>
                    </div>

                    <div className="ec-portfolio-card reveal">
                        <div className="ec-portfolio-visual">
                            <div className="ec-mockup-browser">
                                <div className="ec-mockup-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                    <span className="ec-mockup-url">inpe.pt</span>
                                </div>
                                <div className="ec-mockup-body">
                                    <iframe
                                        src="https://inpe.pt"
                                        title="Portfólio Loja Online"
                                        style={{ width: '100%', height: '400px', border: 'none', borderRadius: '12px' }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="ec-portfolio-info">
                            <h3 className="ec-portfolio-title">Esqueça os Templates</h3>
                            <p className="ec-portfolio-desc">
                                Seguimos o branding da marca e criamos algo único. Rápidas, intuitivas e preparadas para vender.
                            </p>

                            <div className="ec-portfolio-metrics">
                                <div className="ec-metric">
                                    <span className="ec-metric-num">100%</span>
                                    <span className="ec-metric-label">Customizado</span>
                                </div>
                                <div className="ec-metric">
                                    <span className="ec-metric-num">24/7</span>
                                    <span className="ec-metric-label">Sempre a vender</span>
                                </div>
                            </div>

                            <ul className="ec-portfolio-features">
                                <li>
                                    <span className="ec-feat-icon">✓</span>
                                    <span>Experiência mobile em primeiro lugar</span>
                                </li>
                                <li>
                                    <span className="ec-feat-icon">✓</span>
                                    <span>Integração de pagamentos simplificada</span>
                                </li>
                                <li>
                                    <span className="ec-feat-icon">✓</span>
                                    <span>Maior visibilidade nas pesquisas do Google</span>
                                </li>
                            </ul>

                            <div style={{ marginTop: '2.2rem' }}>
                                <Link href="/contactos" className="smart-btn" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
                                    <span style={{ color: '#ffffff' }}>Criar Loja Personalizada</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== KEY ADVANTAGES OF SELLING ONLINE ===== */}
            <section className="ec-advantages-section">
                <div className="container">
                    <div className="ec-adv-header reveal">
                        <h2>Porque Vale a Pena <span className="gradient-word">Vender Online</span></h2>
                    </div>

                    <div className="ec-adv-grid">
                        <div className="ec-adv-card reveal delay-1">
                            <div className="ec-adv-icon">
                                <img src="/servicos/ecommerce/e-nimble-service-global-reach.png" alt="Alcance global para e-commerce - e-nimble" />
                            </div>
                            <h3>Alcance Global</h3>
                            <p>Venda para todo o país ou o mundo inteiro, sem custos adicionais.</p>
                            <div className="ec-adv-stat">
                                <strong>+300%</strong>
                                <span>Alcance potencial</span>
                            </div>
                        </div>

                        <div className="ec-adv-card reveal delay-2">
                            <div className="ec-adv-icon">
                                <img src="/servicos/ecommerce/e-nimble-service-24-7-automation.png" alt="Vendas 24/7 e automação - e-nimble" />
                            </div>
                            <h3>Vendas 24/7</h3>
                            <p>A sua loja nunca fecha. Gere vendas à noite, fins de semana e feriados.</p>
                            <div className="ec-adv-stat">
                                <strong>40%</strong>
                                <span>Compras fora de horas</span>
                            </div>
                        </div>

                        <div className="ec-adv-card reveal delay-3">
                            <div className="ec-adv-icon">
                                <img src="/servicos/ecommerce/e-nimble-service-premium-branding.png" alt="Branding premium para e-commerce - e-nimble" />
                            </div>
                            <h3>Marca Premium</h3>
                            <p>Uma loja bem construída posiciona a sua marca como líder no mercado.</p>
                            <div className="ec-adv-stat">
                                <strong>+85%</strong>
                                <span>Mais Credibilidade</span>
                            </div>
                        </div>

                        <div className="ec-adv-card reveal delay-4">
                            <div className="ec-adv-icon">
                                <img src="/servicos/ecommerce/e-nimble-service-data-driven-results.png" alt="Dados e insights de e-commerce - e-nimble" />
                            </div>
                            <h3>Dados e Insights</h3>
                            <p>Saiba exatamente o que os seus clientes querem e compram.</p>
                            <div className="ec-adv-stat">
                                <strong>Tempo-Real</strong>
                                <span>Decisões com dados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRY SHOWCASE ===== */}
            <section className="ec-showcase-section">
                <div className="container">
                    <div className="ec-showcase-header reveal">
                        <span className="ec-label">SOLUÇÕES PARA TODOS OS SETORES</span>
                        <h2>Lojas Que <span className="gradient-word">Vendem</span></h2>
                    </div>

                    <div className="ec-showcase-grid">
                        <div className="ec-showcase-item reveal delay-1">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/agency-expertise-fashion-ecommerce.png" alt="E-commerce de moda e vestuário - e-nimble" />
                            </div>
                            <span>Moda & Vestuário</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-1">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/agency-expertise-food-gourmet.png" alt="E-commerce alimentar e gourmet - e-nimble" />
                            </div>
                            <span>Alimentar & Bebidas</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-2">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/agency-expertise-health-wellness.png" alt="E-commerce de saúde e cosmética - e-nimble" />
                            </div>
                            <span>Saúde & Cosmética</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-2">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/agency-expertise-home-decor.png" alt="E-commerce de casa e decoração - e-nimble" />
                            </div>
                            <span>Casa & Decoração</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-3">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/agency-expertise-tech-gaming.png" alt="E-commerce de tecnologia e gaming - e-nimble" />
                            </div>
                            <span>Tecnologia & Gaming</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-3">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/agency-expertise-jewelry-luxury.png" alt="E-commerce de joalharia e luxo - e-nimble" />
                            </div>
                            <span>Joalharia & Acessórios</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-4">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/agency-expertise-digital-education.png" alt="E-commerce de educação e cursos - e-nimble" />
                            </div>
                            <span>Educação & Cursos</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-4">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/agency-expertise-personal-care.png" alt="E-commerce de cuidado pessoal - e-nimble" />
                            </div>
                            <span>Cuidado Pessoal</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-1">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/loja-online-pet-shop.png" alt="E-commerce de loja de animais - e-nimble" />
                            </div>
                            <span>Loja de Animais</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-2">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/loja-online-desporto-fitness.png" alt="E-commerce de desporto e fitness - e-nimble" />
                            </div>
                            <span>Desporto & Fitness</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-3">
                            <div className="ec-showcase-icon">
                                <img src="/servicos/ecommerce/loja-online-automovel.png" alt="E-commerce automóvel - e-nimble" />
                            </div>
                            <span>Automóvel</span>
                        </div>
                        <div className="ec-showcase-item reveal delay-4" style={{ background: 'var(--shop-warm)', border: '2px dashed rgba(58, 0, 255, 0.2)', justifyContent: 'center', padding: '1.5rem 1rem' }}>
                            <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--shop-text)', marginBottom: '0.4rem' }}>E muito mais...</span>
                            <p style={{ fontSize: '0.8rem', color: 'var(--shop-text-muted)', marginBottom: '1.2rem', lineHeight: '1.3' }}>Soluções à sua medida.</p>
                            <Link href="/contactos" className="smart-btn" style={{ padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}>
                                <span style={{ color: '#ffffff' }}>Pedir Proposta</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SHOPPING JOURNEY ===== */}
            <section className="ec-journey-section">
                <div className="container">
                    <div className="ec-journey-header reveal">
                        <h2>Da Descoberta à Entrega em 4 Cliques</h2>
                    </div>

                    <div className="ec-journey-flow">
                        <div className="ec-journey-step reveal delay-1">
                            <div className="ec-js-icon">
                                <img src="/servicos/ecommerce/customer-journey-discovery-optimization.png" alt="Fase de descoberta e pesquisa - e-nimble" />
                            </div>
                            <div className="ec-js-content">
                                <h4>Descoberta</h4>
                                <p>Encontre rapidamente o produto certo.</p>
                            </div>
                        </div>

                        <div className="ec-journey-connector"><span>→</span></div>

                        <div className="ec-journey-step reveal delay-2">
                            <div className="ec-js-icon">
                                <img src="/servicos/ecommerce/customer-journey-cart-conversion.png" alt="Fase de carrinho e conversão - e-nimble" />
                            </div>
                            <div className="ec-js-content">
                                <h4>Carrinho</h4>
                                <p>Adicionar ao carrinho deve ser simples e imediato.</p>
                            </div>
                        </div>

                        <div className="ec-journey-connector"><span>→</span></div>

                        <div className="ec-journey-step reveal delay-3">
                            <div className="ec-js-icon">
                                <img src="/servicos/ecommerce/customer-journey-secure-payment-gateway.png" alt="Fase de checkout e pagamentos seguros - e-nimble" />
                            </div>
                            <div className="ec-js-content">
                                <h4>Checkout</h4>
                                <p>Pagamento rápido, seguro e sem distrações.</p>
                            </div>
                        </div>

                        <div className="ec-journey-connector"><span>→</span></div>

                        <div className="ec-journey-step reveal delay-4">
                            <div className="ec-js-icon">
                                <img src="/servicos/ecommerce/customer-journey-logistics-integration.png" alt="Fase de entrega e logística - e-nimble" />
                            </div>
                            <div className="ec-js-content">
                                <h4>Entrega</h4>
                                <p>Acompanhe cada encomenda até à entrega com tracking automático.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }} className="reveal">
                        <Link href="/contactos" className="smart-btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            <span style={{ color: '#ffffff' }}>Quero uma Loja Assim</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="ec-cta-section reveal">
                <div className="container">
                    <div className="ec-cta-content">
                        <h2>A sua loja está <span className="gradient-word">pronta.</span><br /><span className="ec-highlight">E os seus clientes estão à espera.</span></h2>
                        <Link href="/contactos" className="smart-btn">
                            <span>Começar a Vender</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Ecommerce;
