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
            <section className="edu-hero reveal">
                <div className="container edu-hero-container">
                    <h1 className="edu-title">Conhecimento<br />é <span className="highlight-word">Lucro.</span></h1>
                    <p className="edu-intro">"Não é sobre teoria. É sobre equipar a sua força de trabalho com as ferramentas
                        digitais que o mercado exige hoje."</p>
                    <div className="cert-badge">
                        <img src="/servicos/formacao/e-nimble-training-certification-star.png" alt="Certificação DGERT e-nimble" className="edu-cert-img" />
                        <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>DGERT<br />CERTIFIED</span>
                    </div>
                </div>
            </section>

            {/* CURRICULUM */}
            <section className="container curriculum-section">
                <aside className="sticky-col reveal fade-in">
                    <h2 className="edu-section-title">O Programa</h2>
                    <p className="edu-section-subtitle">A nossa abordagem é focada na prática. Formação orientada aos desafios reais da sua empresa.</p>

                    <div className="course-meta">
                        <div className="meta-item">
                            <h4>Duração</h4>
                            <p>40 Horas</p>
                        </div>
                        <div className="meta-item">
                            <h4>Formato</h4>
                            <p>Presencial / Híbrido</p>
                        </div>
                        <div className="meta-item">
                            <h4>Certificado</h4>
                            <p>DGERT</p>
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
                        }}>Consultar Oferta Formativa</Link>
                </aside>

                <div className="module-list">
                    <details className="module-item reveal delay-1" open onClick={handleDetailsClick}>
                        <summary>
                            <div className="module-head">
                                <span className="module-num">01</span>
                                <span className="module-title">Marketing Digital Estratégico</span>
                            </div>
                            <span className="arrow-icon">+</span>
                        </summary>
                        <div className="module-content">
                            <p>Aprenda a definir objetivos, posicionamento, público-alvo e um plano de marketing capaz de gerar resultados consistentes.</p>
                            <div className="module-tags">
                                <span className="tag">Estratégia</span>
                                <span className="tag">Posicionamento</span>
                            </div>
                        </div>
                    </details>

                    <details className="module-item reveal delay-2" onClick={handleDetailsClick}>
                        <summary>
                            <div className="module-head">
                                <span className="module-num">02</span>
                                <span className="module-title">Redes Sociais</span>
                            </div>
                            <span className="arrow-icon">+</span>
                        </summary>
                        <div className="module-content">
                            <p>Desenvolva uma estratégia de conteúdos para Instagram, Facebook e LinkedIn, criando uma presença consistente que gera alcance, interação e autoridade.</p>
                            <div className="module-tags">
                                <span className="tag">Conteúdo</span>
                                <span className="tag">Gestão de Comunidade</span>
                            </div>
                        </div>
                    </details>

                    <details className="module-item reveal delay-3" onClick={handleDetailsClick}>
                        <summary>
                            <div className="module-head">
                                <span className="module-num">03</span>
                                <span className="module-title">Publicidade Digital</span>
                            </div>
                            <span className="arrow-icon">+</span>
                        </summary>
                        <div className="module-content">
                            <p>Domine Meta Ads e Google Ads para criar campanhas orientadas para leads, vendas e retorno sobre o investimento.</p>
                            <div className="module-tags">
                                <span className="tag">Meta Ads</span>
                                <span className="tag">Google Ads</span>
                                <span className="tag">Otimização de Campanhas</span>
                            </div>
                        </div>
                    </details>

                    <details className="module-item reveal delay-4" onClick={handleDetailsClick}>
                        <summary>
                            <div className="module-head">
                                <span className="module-num">04</span>
                                <span className="module-title">Inteligência Artificial para Marketing</span>
                            </div>
                            <span className="arrow-icon">+</span>
                        </summary>
                        <div className="module-content">
                            <p>Descubra como utilizar ferramentas de IA para acelerar a criação de conteúdo, automatizar tarefas e aumentar a produtividade da equipa.</p>
                            <div className="module-tags">
                                <span className="tag">Automação</span>
                                <span className="tag">Produtividade</span>
                            </div>
                        </div>
                    </details>
                </div>
            </section>

            {/* ===== WHY INVEST IN TRAINING ===== */}
            <section className="edu-value-section">
                <div className="container">
                    <div className="edu-value-content reveal">
                        <div className="edu-value-text">
                            <span className="edu-chip">Vantagens & Incentivos</span>
                            <h2>Porquê escolher a nossa <span className="gradient-word">formação?</span></h2>
                            <p className="edu-value-lead">
                                Formação gratuita e certificada para a sua empresa. Programas práticos e certificados, com possibilidade de financiamento até 100%, através de entidades formadoras parceiras.
                            </p>

                            <div className="edu-features">
                                <div className="edu-feature-item">
                                    <div className="edu-feature-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 10 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Entidades certificadas DGERT & SIGO</strong>
                                        <p>Emissão de certificados oficiais com validade nacional</p>
                                    </div>
                                </div>

                                <div className="edu-feature-item">
                                    <div className="edu-feature-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="1" x2="12" y2="23" />
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Financiamento a 100%</strong>
                                        <p>Apoiamos a candidatura aos incentivos disponíveis.</p>
                                    </div>
                                </div>

                                <div className="edu-feature-item">
                                    <div className="edu-feature-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Programas à Medida do Negócio</strong>
                                        <p>Conteúdos adaptados aos objetivos e desafios da sua empresa.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="edu-value-visual">
                            <img src="/servicos/formacao/team-new.png" alt="Equipa e-nimble em formação prática corporativa" className="edu-value-team-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FINANCIAMENTO SECTION ===== */}
            <section className="edu-funding-section">
                <div className="container">
                    <div className="edu-funding-header reveal">
                        <span className="edu-chip">Financiamento & Apoios</span>
                        <h2>Como funciona o <span className="gradient-word">Financiamento?</span></h2>
                        <p className="edu-funding-lead">
                            Tratamos de todo o processo de enquadramento e candidatura para que a sua empresa beneficie dos apoios à formação com cobertura até 100%.
                        </p>
                    </div>

                    {/* Highlights Cards */}
                    <div className="edu-funding-highlights reveal delay-1">
                        <div className="edu-fh-card">
                            <div className="edu-fh-icon">
                                <img src="/servicos/formacao/fundo-compensacao-trabalho-financiamento-formacao.png" alt="Fundo de Compensação do Trabalho Financiamento Formação e-nimble" className="edu-funding-icon-img" />
                            </div>
                            <div>
                                <h4>Fundo de Compensação</h4>
                                <p>Mobilização de fundos de compensação do trabalho acumulados.</p>
                            </div>
                        </div>

                        <div className="edu-fh-card highlight-card">
                            <div className="edu-fh-icon">
                                <img src="/servicos/formacao/cheque-formacao-apoio-financeiro.png" alt="Cheque-Formação Apoio Financeiro e-nimble" className="edu-funding-icon-img" />
                            </div>
                            <div>
                                <h4>Cheque-Formação</h4>
                                <p>Acesso a apoios financeiros diretos atribuídos para a qualificação dos trabalhadores.</p>
                            </div>
                        </div>

                        <div className="edu-fh-card">
                            <div className="edu-fh-icon">
                                <img src="/servicos/formacao/financiamento-formacao-100-percento.png" alt="Financiamento de Formação até 100 por cento e-nimble" className="edu-funding-icon-img" />
                            </div>
                            <div>
                                <h4>Até 100% Financiado</h4>
                                <p>Tratamos da candidatura para maximizar o financiamento disponível.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step Visual Flow: Empresa -> Candidatura -> Formação -> Certificado */}
                    <div className="edu-funding-flow reveal delay-2">
                        <div className="edu-flow-title">
                            <h3>Como funciona a <span className="gradient-word">Formação?</span></h3>
                        </div>

                        <div className="edu-flow-steps">
                            <div className="edu-flow-step">
                                <div className="edu-step-number">01</div>
                                <div className="edu-step-icon">
                                    <img src="/servicos/formacao/diagnostico-necessidades-formacao.png" alt="Diagnóstico de Necessidades de Formação e-nimble" className="edu-flow-step-img" />
                                </div>
                                <div className="edu-step-content">
                                    <h4>Diagnóstico</h4>
                                    <p>Identificamos e definimos os objetivos da formação</p>
                                </div>
                            </div>

                            <div className="edu-flow-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>

                            <div className="edu-flow-step">
                                <div className="edu-step-number">02</div>
                                <div className="edu-step-icon">
                                    <img src="/servicos/formacao/planeamento-plano-formacao-empresa.png" alt="Planeamento e Plano de Formação para Empresas e-nimble" className="edu-flow-step-img" />
                                </div>
                                <div className="edu-step-content">
                                    <h4>Planeamento</h4>
                                    <p>Desenhamos um plano à realidade da sua empresa</p>
                                </div>
                            </div>

                            <div className="edu-flow-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>

                            <div className="edu-flow-step">
                                <div className="edu-step-number">03</div>
                                <div className="edu-step-icon">
                                    <img src="/servicos/formacao/formacao-pratica-presencial-hibrida.png" alt="Formação Prática Presencial ou Híbrida e-nimble" className="edu-flow-step-img" />
                                </div>
                                <div className="edu-step-content">
                                    <h4>Formação</h4>
                                    <p>Formação prática, presencial ou híbrida</p>
                                </div>
                            </div>

                            <div className="edu-flow-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>

                            <div className="edu-flow-step highlight-step">
                                <div className="edu-step-number">04</div>
                                <div className="edu-step-icon">
                                    <img src="/servicos/formacao/certificacao-dgert-formacao-sigo.png" alt="Certificação oficial DGERT e Registo na plataforma SIGO e-nimble" className="edu-flow-step-img" />
                                </div>
                                <div className="edu-step-content">
                                    <h4>Certificação</h4>
                                    <p>Emissão oficial DGERT & Registo na plataforma SIGO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CLOSING CTA ===== */}
            <section className="edu-closing-section">
                <div className="container quote-box reveal">
                    <p className="big-quote">"O único ativo que não desvaloriza na sua empresa é a competência das suas pessoas."</p>
                    <Link href="/contactos" className="enroll-btn">Agendar Diagnóstico</Link>
                    <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>Tratamos do processo de candidatura aos apoios disponíveis.</p>
                </div>
            </section>
        </main>
    );
};

export default Formacao;
