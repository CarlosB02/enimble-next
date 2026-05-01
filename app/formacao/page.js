'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Formacao.css';

const Formacao = () => {
    useScrollReveal();

    useEffect(() => {
        document.body.classList.add('edu-body');
        return () => document.body.classList.remove('edu-body');
    }, []);

    const handleDetailsClick = (e) => {
        const targetDetail = e.currentTarget;
        const details = document.querySelectorAll("details");
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    };

    return (
        <main>
            {/* HERO */}
            <section className="container edu-hero reveal">
                <span className="hero-label">Corporate Academy</span>
                <h1 className="edu-title">Knowledge<br />is Profit.</h1>
                <p className="edu-intro">"Não é sobre teoria. É sobre equipar a sua força de trabalho com as ferramentas
                    digitais que o mercado exige hoje."</p>
                <div className="cert-badge">
                    <img src="/servicos/formacao/e-nimble-training-certification-star.png" alt="Certificação DGERT e-nimble" className="edu-cert-img" />
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>DGERT<br />CERTIFIED</span>
                </div>
            </section>

            {/* CURRICULUM */}
            <section className="container curriculum-section">
                <aside className="sticky-col reveal fade-in">
                    <h2 className="edu-section-title">O Programa</h2>
                    <p className="edu-section-subtitle">A nossa abordagem é 80% prática. As suas equipas trazem os
                        problemas reais da empresa, e saem com soluções implementadas.</p>

                    <div className="course-meta">
                        <div className="meta-item">
                            <h4>Duração</h4>
                            <p>8 - 40 Horas</p>
                        </div>
                        <div className="meta-item">
                            <h4>Formato</h4>
                            <p>Presencial / Híbrido</p>
                        </div>
                        <div className="meta-item">
                            <h4>Nível</h4>
                            <p>Iniciante ao Pro</p>
                        </div>
                        <div className="meta-item">
                            <h4>Certificado</h4>
                            <p>Sim (SIGO)</p>
                        </div>
                    </div>

                    <Link href="/contactos" className="btn-primary"
                        style={{
                            background: 'transparent',
                            color: 'black',
                            border: '2px solid black',
                            marginTop: '2rem',
                            padding: '1rem 2rem',
                            display: 'inline-block',
                            borderRadius: 0
                        }}>Download Brochura PDF</Link>
                </aside>

                <div className="module-list">
                    <details className="module-item reveal delay-1" open onClick={handleDetailsClick}>
                        <summary>
                            <div className="module-head">
                                <span className="module-num">01</span>
                                <span className="module-title">Social Intelligence</span>
                            </div>
                            <span className="arrow-icon">+</span>
                        </summary>
                        <div className="module-content">
                            <p>Como transformar colaboradores em embaixadores da marca. Gestão de Linkedin pessoal e
                                corporativo, criação de conteúdo B2B e gestão de crises online.</p>
                            <div className="module-tags">
                                <span className="tag">Linkedin</span>
                                <span className="tag">Personal Branding</span>
                            </div>
                        </div>
                    </details>

                    <details className="module-item reveal delay-2" onClick={handleDetailsClick}>
                        <summary>
                            <div className="module-head">
                                <span className="module-num">02</span>
                                <span className="module-title">Ads & Performance</span>
                            </div>
                            <span className="arrow-icon">+</span>
                        </summary>
                        <div className="module-content">
                            <p>Workshop intensivo de Meta Ads Manager e Google Ads. Estratégia de funil, otimização de
                                budget e leitura de relatórios de dados.</p>
                            <div className="module-tags">
                                <span className="tag">ROI</span>
                                <span className="tag">Analytics</span>
                            </div>
                        </div>
                    </details>

                    <details className="module-item reveal delay-3" onClick={handleDetailsClick}>
                        <summary>
                            <div className="module-head">
                                <span className="module-num">03</span>
                                <span className="module-title">E-commerce Mastery</span>
                            </div>
                            <span className="arrow-icon">+</span>
                        </summary>
                        <div className="module-content">
                            <p>Logística digital, automação de emails, recuperação de carrinho e gestão de clientes
                                (CRM). Essencial para equipas de vendas online.</p>
                            <div className="module-tags">
                                <span className="tag">Shopify</span>
                                <span className="tag">Automations</span>
                            </div>
                        </div>
                    </details>

                    <details className="module-item reveal delay-4" onClick={handleDetailsClick}>
                        <summary>
                            <div className="module-head">
                                <span className="module-num">04</span>
                                <span className="module-title">AI for Business</span>
                            </div>
                            <span className="arrow-icon">+</span>
                        </summary>
                        <div className="module-content">
                            <p>Como usar ferramentas como ChatGPT, Midjourney e automações para aumentar a produtividade
                                da equipa em 10x.</p>
                            <div className="module-tags">
                                <span className="tag">Prompt Engineering</span>
                                <span className="tag">Produtividade</span>
                            </div>
                        </div>
                    </details>
                </div>
            </section>

            {/* ===== STRATEGIC VALUE OF TRAINING ===== */}
            <section className="edu-value-section">
                <div className="container">
                    <div className="edu-value-content reveal">
                        <div className="edu-value-text">
                            <span className="edu-chip">Valor Estratégico</span>
                            <h2>Investir em pessoas é investir<br /><span className="gradient-word">no crescimento da empresa.</span></h2>
                            <p>Equipas com competências atualizadas tomam melhores decisões, executam mais rápido e geram mais valor.</p>
                        </div>
                        <div className="edu-value-visual">
                                <div className="edu-growth-visual">
                                    <div className="edu-gv-item reveal delay-1">
                                        <div className="edu-gv-icon">
                                            <img src="/servicos/formacao/e-nimble-training-growth-step-1.png" alt="Fase 1 Crescimento Formação - e-nimble" className="edu-growth-img" />
                                        </div>
                                        <div className="edu-gv-line"></div>
                                    </div>
                                    <div className="edu-gv-item reveal delay-2">
                                        <div className="edu-gv-icon">
                                            <img src="/servicos/formacao/e-nimble-training-growth-step-2.png" alt="Fase 2 Crescimento Formação - e-nimble" className="edu-growth-img" />
                                        </div>
                                        <div className="edu-gv-line"></div>
                                    </div>
                                    <div className="edu-gv-item reveal delay-3">
                                        <div className="edu-gv-icon">
                                            <img src="/servicos/formacao/e-nimble-training-growth-step-3.png" alt="Fase 3 Crescimento Formação - e-nimble" className="edu-growth-img" />
                                        </div>
                                        <div className="edu-gv-line"></div>
                                    </div>
                                    <div className="edu-gv-item edu-gv-final reveal delay-4">
                                        <div className="edu-gv-icon">
                                            <img src="/servicos/formacao/e-nimble-training-growth-final.png" alt="Sucesso Final Formação - e-nimble" className="edu-growth-img" />
                                        </div>
                                    </div>
                                </div>
                            <div className="edu-gv-labels">
                                <span>Aprender</span>
                                <span>Praticar</span>
                                <span>Aplicar</span>
                                <span>Dominar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TEAM IMPACT & TRANSFORMATION ===== */}
            <section className="edu-impact-section">
                <div className="container">
                    <div className="edu-impact-header reveal">
                        <span className="edu-chip">Impacto nas Equipas</span>
                        <h2>Transformação Que Se Sente no <span className="gradient-word">Dia-a-Dia</span></h2>
                    </div>

                    <div className="edu-impact-grid">
                        <div className="edu-impact-card reveal delay-1">
                            <div className="edu-ic-bar">
                                <div className="edu-ic-fill" style={{ '--icf': '90%' }}></div>
                            </div>
                            <h3>Capacidades Técnicas</h3>
                            <p>Equipas que dominam as ferramentas certas executam com mais velocidade e menos erros.</p>
                            <div className="edu-ic-stat">
                                <strong>+90%</strong>
                                <span>confiança operacional</span>
                            </div>
                        </div>

                        <div className="edu-impact-card reveal delay-2">
                            <div className="edu-ic-bar">
                                <div className="edu-ic-fill" style={{ '--icf': '78%' }}></div>
                            </div>
                            <h3>Pensamento Estratégico</h3>
                            <p>Colaboradores que entendem o "porquê" tomam decisões mais alinhadas com os objetivos.</p>
                            <div className="edu-ic-stat">
                                <strong>+78%</strong>
                                <span>decisões autónomas</span>
                            </div>
                        </div>

                        <div className="edu-impact-card reveal delay-3">
                            <div className="edu-ic-bar">
                                <div className="edu-ic-fill" style={{ '--icf': '85%' }}></div>
                            </div>
                            <h3>Ferramentas Digitais</h3>
                            <p>Fluência em plataformas, dashboards e processos que antes dependiam de terceiros.</p>
                            <div className="edu-ic-stat">
                                <strong>10x</strong>
                                <span>mais produtividade</span>
                            </div>
                        </div>

                        <div className="edu-impact-card reveal delay-4">
                            <div className="edu-ic-bar">
                                <div className="edu-ic-fill" style={{ '--icf': '95%' }}></div>
                            </div>
                            <h3>Confiança e Autonomia</h3>
                            <p>Menos dependência externa. Mais capacidade de execução interna com qualidade.</p>
                            <div className="edu-ic-stat">
                                <strong>-40%</strong>
                                <span>outsourcing necessário</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CREDIBILITY & PROFESSIONALISM ===== */}
            <section className="edu-cred-section">
                <div className="container">
                    <div className="edu-cred-header reveal">
                        <span className="edu-chip">Formação Certificada</span>
                        <h2>Estrutura Profissional. Resultados Reais.</h2>
                    </div>

                    <div className="edu-cred-grid">
                        <div className="edu-cred-block reveal delay-1">
                            <div className="edu-cb-icon">
                                <img src="/servicos/formacao/e-nimble-training-structured-program.png" alt="Programa Estruturado Formação - e-nimble" className="edu-cred-img" />
                            </div>
                            <h4>Programa Estruturado</h4>
                            <p>Conteúdos desenhados por profissionais com experiência real de mercado. Nada de teoria genérica.</p>
                        </div>
                        <div className="edu-cred-block reveal delay-2">
                            <div className="edu-cb-icon">
                                <img src="/servicos/formacao/e-nimble-training-practical-application.png" alt="Aplicação Prática Formação - e-nimble" className="edu-cred-img" />
                            </div>
                            <h4>Aplicação Prática</h4>
                            <p>80% dos exercícios usam os próprios projetos e desafios do formando. Resultados imediatos.</p>
                        </div>
                        <div className="edu-cred-block reveal delay-3">
                            <div className="edu-cb-icon">
                                <img src="/servicos/formacao/e-nimble-training-progress-metrics.png" alt="Métricas de Progresso Formação - e-nimble" className="edu-cred-img" />
                            </div>
                            <h4>Métricas de Progresso</h4>
                            <p>Avaliação contínua com relatório final de competências adquiridas e recomendações.</p>
                        </div>
                    </div>

                    <div className="edu-cred-trust reveal">
                        <div className="edu-ct-item">
                            <div className="edu-ct-num">DGERT</div>
                            <span>Entidade Certificada</span>
                        </div>
                        <div className="edu-ct-item">
                            <div className="edu-ct-num">SIGO</div>
                            <span>Certificados Emitidos</span>
                        </div>
                        <div className="edu-ct-item">
                            <div className="edu-ct-num">100%</div>
                            <span>Dedutível em IRC</span>
                        </div>
                        <div className="edu-ct-item">
                            <div className="edu-ct-num">500+</div>
                            <span>Formandos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CLOSING CTA ===== */}
            <section className="edu-closing-section">
                <div className="marquee-edu">LEARN • GROW • LEAD • LEARN • GROW • LEAD</div>
                <div className="container quote-box reveal">
                    <p className="big-quote">"O único ativo que não desvaloriza na sua empresa é a competência das suas pessoas."</p>
                    <Link href="/contactos" className="enroll-btn">Agendar Formação</Link>
                    <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>Formação 100% dedutível em sede de IRC.</p>
                </div>
            </section>
        </main>
    );
};

export default Formacao;
