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
                            <span className="ec-label">Impacto no Negócio</span>
                            <h2>A sua loja física tem horário.<br /><span className="ec-highlight">A sua loja online não.</span></h2>
                            <p>Transforme o seu negócio num canal de vendas escalável que opera 24/7, alcança clientes em qualquer lugar e gera receita sem as limitações de um espaço físico.</p>
                        </div>
                        <div className="ec-impact-visual" style={{ padding: 0, background: 'transparent', border: 'none', boxShadow: 'none' }}>
                            <AnimatedDashboard />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== KEY ADVANTAGES OF SELLING ONLINE ===== */}
            <section className="ec-advantages-section">
                <div className="container">
                    <div className="ec-adv-header reveal">
                        <span className="ec-label">Porquê Vender Online</span>
                        <h2>Vantagens Que <span className="gradient-word">Mudam o Jogo</span></h2>
                    </div>

                    <div className="ec-adv-grid">
                        <div className="ec-adv-card reveal delay-1">
                            <div className="ec-adv-icon">
                                <img src="/servicos/ecommerce/e-nimble-service-global-reach.png" alt="Alcance global para e-commerce - e-nimble" />
                            </div>
                            <h3>Alcance Global</h3>
                            <p>Venda para todo o país — ou o mundo inteiro — sem abrir mais lojas.</p>
                            <div className="ec-adv-stat">
                                <strong>+300%</strong>
                                <span>alcance vs. loja física</span>
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
                                <span>das compras fora do horário</span>
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
                                <span>confiança com loja própria</span>
                            </div>
                        </div>

                        <div className="ec-adv-card reveal delay-4">
                            <div className="ec-adv-icon">
                                <img src="/servicos/ecommerce/e-nimble-service-data-driven-results.png" alt="Dados e insights de e-commerce - e-nimble" />
                            </div>
                            <h3>Dados e Insights</h3>
                            <p>Saiba exatamente o que os seus clientes querem, compram e abandonam.</p>
                            <div className="ec-adv-stat">
                                <strong>Real-time</strong>
                                <span>analytics integrados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRY SHOWCASE ===== */}
            <section className="ec-showcase-section">
                <div className="container">
                    <div className="ec-showcase-header reveal">
                        <span className="ec-label">Sectores</span>
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
                            <span>Alimentar & Gourmet</span>
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
                    </div>
                </div>
            </section>

            {/* ===== SHOPPING JOURNEY ===== */}
            <section className="ec-journey-section">
                <div className="container">
                    <div className="ec-journey-header reveal">
                        <span className="ec-label">Experiência do Cliente</span>
                        <h2>Da Descoberta ao Checkout em 3 Cliques</h2>
                    </div>

                    <div className="ec-journey-flow">
                        <div className="ec-journey-step reveal delay-1">
                            <div className="ec-js-icon">
                                <img src="/servicos/ecommerce/customer-journey-discovery-optimization.png" alt="Fase de descoberta e pesquisa - e-nimble" />
                            </div>
                            <div className="ec-js-content">
                                <h4>Descoberta</h4>
                                <p>Catálogo com filtros inteligentes, pesquisa rápida e recomendações.</p>
                            </div>
                        </div>

                        <div className="ec-journey-connector"><span>→</span></div>

                        <div className="ec-journey-step reveal delay-2">
                            <div className="ec-js-icon">
                                <img src="/servicos/ecommerce/customer-journey-cart-conversion.png" alt="Fase de carrinho e conversão - e-nimble" />
                            </div>
                            <div className="ec-js-content">
                                <h4>Carrinho</h4>
                                <p>One-click add, preview instantâneo e cálculo automático de envio.</p>
                            </div>
                        </div>

                        <div className="ec-journey-connector"><span>→</span></div>

                        <div className="ec-journey-step reveal delay-3">
                            <div className="ec-js-icon">
                                <img src="/servicos/ecommerce/customer-journey-secure-payment-gateway.png" alt="Fase de checkout e pagamentos seguros - e-nimble" />
                            </div>
                            <div className="ec-js-content">
                                <h4>Checkout</h4>
                                <p>MBWay, Apple Pay, cartão. Sem fricção, sem páginas extra, sem desistências.</p>
                            </div>
                        </div>

                        <div className="ec-journey-connector"><span>→</span></div>

                        <div className="ec-journey-step reveal delay-4">
                            <div className="ec-js-icon">
                                <img src="/servicos/ecommerce/customer-journey-logistics-integration.png" alt="Fase de entrega e logística - e-nimble" />
                            </div>
                            <div className="ec-js-content">
                                <h4>Entrega</h4>
                                <p>Tracking automático, emails de status e experiência pós-compra premium.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CREDIBILITY & EXPERTISE ===== */}
            <section className="ec-trust-section">
                <div className="container">
                    <div className="ec-trust-header reveal">
                        <span className="ec-label">Construído para Durar</span>
                        <h2>Infraestrutura de Nível <span className="gradient-word">Enterprise</span></h2>
                    </div>

                    <div className="ec-trust-grid">
                        <div className="ec-trust-item reveal delay-1">
                            <div className="ec-trust-num">99.9%</div>
                            <span>Uptime garantido</span>
                        </div>
                        <div className="ec-trust-item reveal delay-2">
                            <div className="ec-trust-num">&lt;1s</div>
                            <span>Tempo de carregamento</span>
                        </div>
                        <div className="ec-trust-item reveal delay-3">
                            <div className="ec-trust-num">SSL</div>
                            <span>Segurança certificada</span>
                        </div>
                        <div className="ec-trust-item reveal delay-4">
                            <div className="ec-trust-num">RGPD</div>
                            <span>Conformidade legal</span>
                        </div>
                    </div>

                    <div className="ec-trust-features reveal">
                        <div className="ec-tf-col">
                            <h4>Performance</h4>
                            <ul>
                                <li>CDN global para velocidade máxima</li>
                                <li>Imagens otimizadas automaticamente</li>
                                <li>Cache inteligente para picos de tráfego</li>
                            </ul>
                        </div>
                        <div className="ec-tf-col">
                            <h4>Integrações</h4>
                            <ul>
                                <li>Pagamentos: Stripe, MBWay, PayPal</li>
                                <li>Envios: CTT, DPD, UPS</li>
                                <li>Marketing: Pixel, CAPI, Analytics</li>
                            </ul>
                        </div>
                        <div className="ec-tf-col">
                            <h4>Suporte</h4>
                            <ul>
                                <li>Formação completa da plataforma</li>
                                <li>Suporte técnico dedicado</li>
                                <li>Atualizações e manutenção incluídas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="ec-cta-section reveal">
                <div className="container">
                    <div className="ec-cta-content">
                        <h2>A sua loja está <span className="gradient-word">pronta.</span><br /><span className="ec-highlight">E os seus clientes estão à espera.</span></h2>
                        <p>Setup completo em menos de 15 dias.</p>
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
