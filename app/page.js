'use client';

import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import ContactSection from '@/components/sections/ContactSection';
import './Home.css';
import './Contactos.css';

const HomePage = () => {
    useScrollReveal();

    return (
        <main>
            <section id="hero" className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 className="fade-in">Procura soluções de Marketing?</h1>
                        <p className="fade-in delay-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                            nec ullamcorper mattis, pulvinar dapibus leo.</p>
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
                    <div className="services-grid">
                        <div className="service-item card-website">
                            <div className="card-icon">
                                <lottie-player src="https://lottie.host/5c9a5518-11dc-4622-8612-5ae8907ec686/8eLHOX5NVK.json"
                                    background="transparent" speed="1" style={{ width: '80px', height: '80px' }} loop autoPlay></lottie-player>
                            </div>
                            <h3>Website Design</h3>
                            <p className="card-desc">Transforme visitantes em clientes com um site rápido, moderno e otimizado.</p>
                            <Link href="/website-design" className="card-link">Atrair Mais Clientes <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-social">
                            <div className="card-icon">
                                <lottie-player src="https://lottie.host/4886a942-45cf-4b3f-96d7-d66bf818bfc4/pw0h3HS12Z.json"
                                    background="transparent" speed="1" style={{ width: '80px', height: '80px' }} loop autoPlay></lottie-player>
                            </div>
                            <h3>Redes Sociais</h3>
                            <p className="card-desc">Construa uma comunidade leal e aumente o alcance da sua marca.</p>
                            <Link href="/redes-sociais" className="card-link">Ganhar Visibilidade <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-email">
                            <div className="card-icon">
                                <lottie-player src="https://lottie.host/bc961cf8-ebe1-4f7c-8b67-cd20927832e7/AFWRhMAMNS.json"
                                    background="transparent" speed="1" style={{ width: '80px', height: '80px' }} loop autoPlay></lottie-player>
                            </div>
                            <h3>Lojas E-commerce</h3>
                            <p className="card-desc">Venda 24/7 com uma loja online automatizada e segura.</p>
                            <Link href="/ecommerce" className="card-link">Expandir o Mercado <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-ads">
                            <div className="card-icon">
                                <lottie-player src="https://lottie.host/f0cc2f57-20d5-4009-96d0-f64fc3bf86a1/hrOaqeeD1o.json"
                                    background="transparent" speed="1" style={{ width: '80px', height: '80px' }} loop autoPlay></lottie-player>
                            </div>
                            <h3>Anúncios Pagos</h3>
                            <p className="card-desc">Alcance o público certo no momento certo com campanhas de alto retorno.</p>
                            <Link href="/ads" className="card-link">Acelerar Vendas <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-training">
                            <div className="card-icon">
                                <lottie-player src="https://lottie.host/5c9a5518-11dc-4622-8612-5ae8907ec686/8eLHOX5NVK.json"
                                    background="transparent" speed="1" style={{ width: '80px', height: '80px' }} loop autoPlay></lottie-player>
                            </div>
                            <h3>Formação Empresarial</h3>
                            <p className="card-desc">Capacite a sua equipa com workshops e treinos práticos.</p>
                            <Link href="/formacao" className="card-link">Elevar Performance <span className="arrow">→</span></Link>
                        </div>
                        <div className="service-item card-branding">
                            <div className="card-icon">
                                <lottie-player src="https://lottie.host/4886a942-45cf-4b3f-96d7-d66bf818bfc4/pw0h3HS12Z.json"
                                    background="transparent" speed="1" style={{ width: '80px', height: '80px' }} loop autoPlay></lottie-player>
                            </div>
                            <h3>Branding & Brindes</h3>
                            <p className="card-desc">Crie uma marca inesquecível com logótipos e identidade visual.</p>
                            <Link href="/branding" className="card-link">Dominar o Mercado <span className="arrow">→</span></Link>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="service-card reveal">
                        <div className="service-content">
                            <h4>Formação Certificada</h4>
                            <h2>Sabia que também oferecemos formações às empresas?</h2>
                            <p>Temos parceiros certificados como entidades formadoras prontos para fornecer a melhor formação à sua
                                empresa SEM CUSTOS ADICIONAIS.</p>
                            <a href="#" className="btn btn-primary small">Oferta Formativa</a>
                        </div>
                        <div className="service-image">
                            <img src="/assets/team-new.png" alt="Formação Team" />
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

                    <div className="pp-grid">
                        <div className="pp-card pp-card-large reveal delay-1">
                            <div className="pp-thumb" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                <div className="pp-overlay">
                                    <span className="pp-cat">Website Design</span>
                                    <h3>Projeto Alpha</h3>
                                </div>
                            </div>
                        </div>
                        <div className="pp-card reveal delay-2">
                            <div className="pp-thumb" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                                <div className="pp-overlay">
                                    <span className="pp-cat">Branding</span>
                                    <h3>Projeto Beta</h3>
                                </div>
                            </div>
                        </div>
                        <div className="pp-card reveal delay-3">
                            <div className="pp-thumb" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                                <div className="pp-overlay">
                                    <span className="pp-cat">E-Commerce</span>
                                    <h3>Projeto Gamma</h3>
                                </div>
                            </div>
                        </div>
                        <div className="pp-card pp-card-large reveal delay-4">
                            <div className="pp-thumb" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                                <div className="pp-overlay">
                                    <span className="pp-cat">Redes Sociais</span>
                                    <h3>Projeto Delta</h3>
                                </div>
                            </div>
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
                            Ver Portfolio Completo <span className="arrow">→</span>
                        </Link>
                        <Link href="/contactos" className="btn btn-primary pp-btn-contact">
                            Iniciar Conversa <span className="arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="ideas-wrapper">
                <div className="container">
                    <div className="service-card reveal reverse">
                        <div className="service-content">
                            <h4>VALORIZAMOS AS SUAS IDEIAS</h4>
                            <h2>Tem algo mais específico em mente?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                                mattis,
                                pulvinar dapibus leo.</p>
                            <a href="#contactos" className="btn btn-primary small">Entre em contacto</a>
                        </div>
                        <div className="service-image">
                            <img src="/assets/support.png" alt="Support Idea" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="processo" className="process">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">O nosso método</h2>
                        <h3 className="section-subtitle">O processo que lhe dá mais resultados</h3>
                        <p className="fade-in delay-1" style={{ maxWidth: '600px', margin: '0 auto' }}>Combinamos estratégia, criatividade e dados para entregar soluções que funcionam.</p>
                    </div>

                    <div className="process-grid">
                        <div className="process-card reveal">
                            <img src="/assets/process-problem.png" alt="Identify Problem" className="process-icon-img" />
                            <h3>Identificamos o Problema</h3>
                            <p>Identificamos barreiras ao crescimento do seu negócio.</p>
                        </div>
                        <div className="process-card reveal delay-1">
                            <img src="/assets/process-solution.png" alt="Create Solution" className="process-icon-img" />
                            <h3>Criamos a Solução</h3>
                            <p>Estratégia à medida para atingir os seus objetivos.</p>
                        </div>
                        <div className="process-card reveal delay-2">
                            <img src="/assets/process-results.png" alt="Results" className="process-icon-img" />
                            <h3>Medimos Resultados</h3>
                            <p>Monitorizamos métricas para garantir o retorno.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="growth-partners-section">
                <div className="container">
                    <div className="process-footer reveal mt-5">
                        <div className="row footer-split">
                            <div className="col-text">
                                <h2 className="section-title-large">Mais do que uma agência,<br />o seu parceiro de crescimento</h2>
                                <p>Não somos apenas prestadores de serviços. Somos o elo de ligação entre o seu negócio e o sucesso, oferecendo um ecossistema completo de soluções digitais e uma rede de networking exclusiva.</p>
                                <ul className="check-list">
                                    <li>Acesso a uma rede exclusiva de parceiros e negócios.</li>
                                    <li>Soluções 360º: do Design ao Marketing e Formação.</li>
                                    <li>Uma ponte estratégica entre empreendedores e oportunidades.</li>
                                </ul>
                                <a href="#contactos" className="btn btn-primary small">Quero fazer parte</a>
                            </div>
                            <div className="col-image footer-mascot">
                                <img src="/assets/process-mascot.png" alt="Assistant" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
};

export default HomePage;
