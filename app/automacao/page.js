'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useScrollReveal from '@/hooks/useScrollReveal';
import dynamic from 'next/dynamic';
import './Automacao.css';

const Hyperspeed = dynamic(() => import('@/components/ui/Hyperspeed'), { ssr: false });

// Componente isolado para cada item do FAQ, com medição real de altura
const FaqItem = ({ question, answer, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentRef = useRef(null);
    const [height, setHeight] = useState(defaultOpen ? undefined : 0);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else if (!isOpen) {
            setHeight(0);
        }
    }, [isOpen]);

    useEffect(() => {
        const updateHeight = () => {
            if (isOpen && contentRef.current) {
                setHeight(contentRef.current.scrollHeight);
            }
        };
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [isOpen]);

    return (
        <div className={`auto-faq-item ${isOpen ? 'is-open' : ''}`}>
            <div className="auto-faq-summary" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className="auto-faq-icon">{isOpen ? '−' : '+'}</span>
            </div>
            <div
                className="auto-faq-content-wrapper"
                style={{
                    height: height !== undefined ? `${height}px` : (isOpen ? 'auto' : '0px'),
                    overflow: 'hidden',
                    transition: 'height 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                <div ref={contentRef} className="auto-faq-content">
                    {answer}
                </div>
            </div>
        </div>
    );
};

// Componente accordion para o workflow simulator em mobile
const WorkflowAccordionItem = ({ scenarioKey, scenario, isOpen, onToggle }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(isOpen ? undefined : 0);
    const nodesRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && nodesRef.current) {
            nodesRef.current.scrollTo({ left: 0 });
        }
    }, [isOpen]);

    const labels = {
        vendas: 'Vendas & CRM',
        marketing: 'Conteúdo & Marketing',
        operacoes: 'Processos Internos',
        experiencia: 'Suporte ao Cliente'
    };

    return (
        <div className={`auto-workflow-accordion-item ${isOpen ? 'is-open' : ''}`}>
            <div className="auto-workflow-accordion-header" onClick={onToggle}>
                <div className="auto-workflow-accordion-header-left">
                    <span className="auto-workflow-accordion-pulse-dot"></span>
                    <span>{labels[scenarioKey]}</span>
                </div>
                <span className="auto-workflow-accordion-icon">{isOpen ? '−' : '+'}</span>
            </div>
            <div
                className="auto-workflow-accordion-body"
                style={{ height: height !== undefined ? `${height}px` : 'auto', overflow: 'hidden', transition: 'height 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
                <div ref={contentRef} className="auto-workflow-accordion-content">
                    <div className="auto-nodes-flow auto-nodes-flow-accordion" ref={nodesRef}>
                        {scenario.nodes.map((node, index) => (
                            <React.Fragment key={index}>
                                <div className="auto-node-card active-step">
                                    <span className="auto-node-step">Passo {node.step}</span>
                                    <div className="auto-node-icon">
                                        {node.icon.startsWith('/') ? (
                                            <img src={node.icon} alt={node.title} style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                        ) : (
                                            node.icon
                                        )}
                                    </div>
                                    <div className="auto-node-title">{node.title}</div>
                                    <div className="auto-node-detail">{node.detail}</div>
                                </div>
                                {index < scenario.nodes.length - 1 && (
                                    <div className="auto-connector-line">
                                        <div className="auto-connector-pulse"></div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="auto-workflow-accordion-footer">
                        <span>⚡ <strong>Processos executados automaticamente, 24/7</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AutomacaoPage = () => {
    useScrollReveal();

    // 1. Live Workflow Simulator State & Data
    const [activeScenario, setActiveScenario] = useState('vendas');

    const scenarios = {
        vendas: {
            title: 'Captura & Conversão de Leads',
            nodes: [
                { step: '01', icon: '/servicos/automacao/lead.webp', title: 'Lead Nova', detail: 'Formulário ou Anúncio' },
                { step: '02', icon: '/servicos/automacao/qualificaçao.webp', title: 'Qualificação IA', detail: 'Perfil analisado em segundos' },
                { step: '03', icon: '/servicos/automacao/crm.webp', title: 'CRM & Follow-up', detail: 'Emails, WhatsApp e CRM' },
                { step: '04', icon: '/servicos/automacao/agendamento.webp', title: 'Agendamento', detail: 'Reunião no Calendário' }
            ],
            metric: 'Tempo médio de resposta: 1.2 segundos (vs 4 horas manuais)'
        },
        marketing: {
            title: 'Publicação & Email Marketing',
            nodes: [
                { step: '01', icon: '/servicos/automacao/novo%20artigo.webp', title: 'Novo Artigo / Ideia', detail: 'Briefing ou tema' },
                { step: '02', icon: '/servicos/automacao/ia%20seo.webp', title: 'IA & SEO', detail: 'Conteúdo otimizado' },
                { step: '03', icon: '/servicos/automacao/publicaçao.webp', title: 'Publicação', detail: 'Blog e Redes Sociais' },
                { step: '04', icon: '/servicos/automacao/email.webp', title: 'Email Marketing', detail: 'Envio automático' }
            ],
            metric: 'Publicação multicanal 100% autónoma sem intervenção diária'
        },
        operacoes: {
            title: 'Processos Internos & ERP',
            nodes: [
                { step: '01', icon: '/servicos/automacao/entrada%20de%20dados.webp', title: 'Entrada de Dados', detail: 'Faturas, PDFs ou Forms' },
                { step: '02', icon: '/servicos/automacao/extraçao.webp', title: 'Extração Inteligente', detail: 'Validação automática' },
                { step: '03', icon: '/servicos/automacao/integraçao.webp', title: 'Integração', detail: 'Sincronização entre Apps' },
                { step: '04', icon: '/servicos/automacao/relatorios.webp', title: 'Relatórios', detail: 'Dashboards atualizados' }
            ],
            metric: 'Zero erros de introdução manual e 100% de consistência'
        },
        experiencia: {
            title: 'Suporte & Notificações de Cliente',
            nodes: [
                { step: '01', icon: '/servicos/automacao/contacto.webp', title: 'Contacto do Cliente', detail: 'Chat, Email ou WhatsApp' },
                { step: '02', icon: '/servicos/automacao/agente.webp', title: 'Agente de IA', detail: 'Resposta imediata' },
                { step: '03', icon: '/servicos/automacao/notificaçao.webp', title: 'Notificação', detail: 'Atualização em tempo real' },
                { step: '04', icon: '/servicos/automacao/satisfaçao.webp', title: 'Satisfação', detail: 'Feedback do Cliente' }
            ],
            metric: 'NPS +42% através de respostas e acompanhamento instantâneos'
        }
    };

    // 2. Before vs After Comparison Mode
    const [compareMode, setCompareMode] = useState('auto'); // 'manual' | 'auto'
    const compareGridRef = useRef(null);
    const nodesFlowRef = useRef(null);

    const handleCompareSwitch = (mode) => {
        setCompareMode(mode);
        if (compareGridRef.current) {
            const container = compareGridRef.current;
            const targetCard = container.querySelector(mode === 'manual' ? '.manual-card' : '.auto-card');
            if (targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                const scrollLeft = mode === 'manual' ? 0 : container.scrollWidth;
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    };

    const handleCompareScroll = (e) => {
        const container = e.currentTarget;
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 0) return;
        const newMode = scrollLeft > maxScroll / 2 ? 'auto' : 'manual';
        if (newMode !== compareMode) {
            setCompareMode(newMode);
        }
    };

    useEffect(() => {
        if (compareGridRef.current && window.innerWidth <= 768) {
            const container = compareGridRef.current;
            const autoCard = container.querySelector('.auto-card');
            if (autoCard) {
                const timer = setTimeout(() => {
                    autoCard.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'center' });
                }, 100);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    // 3. Interactive Hours & ROI Saved Calculator
    const [teamSize, setTeamSize] = useState(12);
    const [hoursPerWeek, setHoursPerWeek] = useState(8);

    // 4. Mobile Roadmap & Metrics Active State Hooks & Carousel Navigation
    const [roadmapActiveIndex, setRoadmapActiveIndex] = useState(0);
    const [metricsActiveIndex, setMetricsActiveIndex] = useState(0);
    const roadmapGridRef = useRef(null);
    const metricsGridRef = useRef(null);

    const getActiveIndexFromScroll = (container, selector) => {
        try {
            const items = container.querySelectorAll(selector);
            if (!items || !items.length) return 0;
            const firstItem = items[0];
            if (!firstItem) return 0;
            const itemWidth = firstItem.offsetWidth || 285;
            const gap = 20; // 1.25rem gap
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

    const handleRoadmapScroll = (e) => setRoadmapActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.auto-roadmap-card'));
    const handleMetricsScroll = (e) => setMetricsActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.auto-metric-card'));

    const hoursSavedPerMonth = Math.round(teamSize * hoursPerWeek * 4.33);
    const estimatedCapacityBoost = (hoursPerWeek * 2.5).toFixed(0);

    useEffect(() => {
        document.body.classList.add('auto-body');
        return () => document.body.classList.remove('auto-body');
    }, []);

    useEffect(() => {
        if (nodesFlowRef.current) {
            nodesFlowRef.current.scrollTo({ left: 0 });
        }
    }, [activeScenario]);

    return (
        <main className="automacao-page">

            {/* ==========================================
                1. HERO SECTION (SIMPLIFIED WITH ANIMATION)
            ========================================== */}
            <section className="auto-hero reveal">
                <Hyperspeed
                    effectOptions={{
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xffffff,
                            brokenLines: 0xffffff,
                            leftCars: [0x3A00FF, 0xBF0040, 0x7a00a0], // Variantes do vosso degradê
                            rightCars: [0xBF0040, 0x3A00FF, 0x8a008a], // Variantes do vosso degradê
                            sticks: 0x3A00FF
                        }
                    }}
                />
                <div className="container">
                    <div className="auto-hero-content">
                        <h1 className="auto-hero-h1">
                            Menos Tarefas<br />
                            <span className="auto-gradient-text">Mais Crescimento.</span>
                        </h1>
                        <p className="auto-hero-p">
                            Automatizamos tarefas repetitivas e criamos fluxos inteligentes para que a sua equipa se concentre no que realmente importa.
                        </p>
                        <div className="auto-hero-ctas">
                            <Link href="/contactos" className="auto-btn-primary">
                                Agendar Diagnóstico Gratuito
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================
                2. INTERACTIVE WORKFLOW SIMULATOR
            ========================================== */}
            <section className="auto-simulator-section">
                <div className="container">
                    <div className="text-center reveal mb-5">
                        <h2 className="auto-section-title">
                            O Seu Negócio em <span className="auto-gradient-text">Piloto Automático</span>
                        </h2>
                        <p className="auto-section-desc">
                            Selecione um cenário abaixo e veja como a nossa automação integra diferentes ferramentas e processos.
                        </p>
                    </div>

                    {/* Desktop: Tabs + Pipeline (hidden on mobile) */}
                    <div className="auto-simulator-wrapper reveal auto-simulator-desktop">
                        <div className="auto-simulator-header">
                            <div className="auto-simulator-tabs">
                                <button
                                    className={`auto-tab-btn ${activeScenario === 'vendas' ? 'active' : ''}`}
                                    onClick={() => setActiveScenario('vendas')}
                                >
                                    Vendas & CRM
                                </button>
                                <button
                                    className={`auto-tab-btn ${activeScenario === 'marketing' ? 'active' : ''}`}
                                    onClick={() => setActiveScenario('marketing')}
                                >
                                    Conteúdo & Marketing
                                </button>
                                <button
                                    className={`auto-tab-btn ${activeScenario === 'operacoes' ? 'active' : ''}`}
                                    onClick={() => setActiveScenario('operacoes')}
                                >
                                    Processos Internos
                                </button>
                                <button
                                    className={`auto-tab-btn ${activeScenario === 'experiencia' ? 'active' : ''}`}
                                    onClick={() => setActiveScenario('experiencia')}
                                >
                                    Suporte ao Cliente
                                </button>
                            </div>
                            <div className="auto-sim-status">
                                <span className="auto-status-pulse"></span>
                                Execução em Tempo Real
                            </div>
                        </div>

                        <div className="auto-pipeline-canvas">
                            <div className="auto-nodes-flow" ref={nodesFlowRef}>
                                {activeScenario && scenarios[activeScenario] && scenarios[activeScenario].nodes.map((node, index) => (
                                    <React.Fragment key={index}>
                                        <div className="auto-node-card active-step">
                                            <span className="auto-node-step">Passo {node.step}</span>
                                            <div className="auto-node-icon">
                                                {node.icon.startsWith('/') ? (
                                                    <img src={node.icon} alt={node.title} style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                                ) : (
                                                    node.icon
                                                )}
                                            </div>
                                            <div className="auto-node-title">{node.title}</div>
                                            <div className="auto-node-detail">{node.detail}</div>
                                        </div>
                                        {index < scenarios[activeScenario].nodes.length - 1 && (
                                            <div className="auto-connector-line">
                                                <div className="auto-connector-pulse"></div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div className="auto-sim-footer">
                            <span>⚡ <strong>Processos executados automaticamente, 24/7</strong></span>
                        </div>
                    </div>

                    {/* Mobile: Accordion (hidden on desktop) */}
                    <div className="auto-simulator-accordion-mobile reveal">
                        {Object.entries(scenarios).map(([key, scenario]) => (
                            <WorkflowAccordionItem
                                key={key}
                                scenarioKey={key}
                                scenario={scenario}
                                isOpen={activeScenario === key}
                                onToggle={() => setActiveScenario(activeScenario === key ? null : key)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ==========================================
                2. METRICS & IMPACT BAR
            ========================================== */}
            <section className="auto-impact-section">
                <div className="container">
                    <div className="auto-metrics-grid" ref={metricsGridRef} onScroll={handleMetricsScroll}>
                        <div className={`auto-metric-card reveal delay-1 ${metricsActiveIndex === 0 ? 'active' : ''}`}>
                            <div className="auto-metric-val">+85%</div>
                            <div className="auto-metric-label">Redução de Tarefas Repetitivas</div>
                            <div className="auto-metric-sub">A equipa foca-se no que cria valor</div>
                        </div>
                        <div className={`auto-metric-card reveal delay-2 ${metricsActiveIndex === 1 ? 'active' : ''}`}>
                            <div className="auto-metric-val">0.0s</div>
                            <div className="auto-metric-label">Tempo de Resposta a Novas Leads</div>
                            <div className="auto-metric-sub">Qualificação e contacto imediato.</div>
                        </div>
                        <div className={`auto-metric-card reveal delay-3 ${metricsActiveIndex === 2 ? 'active' : ''}`}>
                            <div className="auto-metric-val">100%</div>
                            <div className="auto-metric-label">Consistência nos Processos</div>
                            <div className="auto-metric-sub">Menos erros. Mais controlo.</div>
                        </div>
                    </div>
                    {/* Carousel navigation dots for mobile view */}
                    <div className="carousel-dots">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${metricsActiveIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(metricsGridRef, '.auto-metric-card', idx, setMetricsActiveIndex)}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    scrollToCard(metricsGridRef, '.auto-metric-card', idx, setMetricsActiveIndex);
                                }}
                                aria-label={`Ir para a métrica ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ==========================================
                3. BEFORE VS AFTER (MANUAL VS AUTOMATED)
            ========================================== */}
            <section className="auto-compare-section">
                <div className="container">
                    <div className="text-center reveal">
                        <h2 className="auto-section-title">
                            O próximo nível <span className="auto-gradient-text">da sua operação</span>
                        </h2>
                        <p className="auto-section-desc">
                            Pequenas automatizações geram grandes ganhos em produtividade, rapidez e eficiência.
                        </p>
                    </div>

                    <div className="auto-compare-toggle-container reveal">
                        <div className="auto-compare-switch">
                            <button
                                className={`auto-switch-btn ${compareMode === 'manual' ? 'active-manual' : ''}`}
                                onClick={() => handleCompareSwitch('manual')}
                            >
                                ⚠️ Operação Manual
                            </button>
                            <button
                                className={`auto-switch-btn ${compareMode === 'auto' ? 'active-auto' : ''}`}
                                onClick={() => handleCompareSwitch('auto')}
                            >
                                🚀 Operação Inteligente
                            </button>
                        </div>
                    </div>

                    <div
                        className="auto-compare-grid reveal"
                        ref={compareGridRef}
                        onScroll={handleCompareScroll}
                    >
                        <div className={`auto-compare-card manual-card ${compareMode === 'manual' ? 'active highlight-side' : ''}`}>
                            <ul className="auto-compare-list">
                                <li className="auto-compare-item">
                                    <span className="icon">
                                        <img src="/servicos/automacao/cross.webp" alt="Cruz" style={{ height: '24px', width: 'auto' }} />
                                    </span>
                                    <span><strong>Atendimento Lento:</strong> Leads esperam demasiado por uma resposta.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">
                                        <img src="/servicos/automacao/cross.webp" alt="Cruz" style={{ height: '24px', width: 'auto' }} />
                                    </span>
                                    <span><strong>Desperdício de Talento:</strong> Horas perdidas a copiar informação.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">
                                        <img src="/servicos/automacao/cross.webp" alt="Cruz" style={{ height: '24px', width: 'auto' }} />
                                    </span>
                                    <span><strong>Falhas de Follow-up:</strong> Oportunidades acabam por escapar.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">
                                        <img src="/servicos/automacao/cross.webp" alt="Cruz" style={{ height: '24px', width: 'auto' }} />
                                    </span>
                                    <span><strong>Custo Proibitivo de Escala:</strong> Mais trabalho exige mais pessoas.</span>
                                </li>
                            </ul>
                        </div>

                        <div className={`auto-compare-card auto-card ${compareMode === 'auto' ? 'active highlight-side' : ''}`}>
                            <ul className="auto-compare-list">
                                <li className="auto-compare-item">
                                    <span className="icon">
                                        <img src="/servicos/automacao/check.webp" alt="Visto" style={{ height: '24px', width: 'auto' }} />
                                    </span>
                                    <span><strong>Resposta em Segundos:</strong> Clientes recebem resposta em segundos.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">
                                        <img src="/servicos/automacao/check.webp" alt="Visto" style={{ height: '24px', width: 'auto' }} />
                                    </span>
                                    <span><strong>Foco em Tarefas de Alto Valor:</strong> Menos tarefas repetitivas, mais resultados.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">
                                        <img src="/servicos/automacao/check.webp" alt="Visto" style={{ height: '24px', width: 'auto' }} />
                                    </span>
                                    <span><strong>CRM Inteligente:</strong> Nenhum contacto fica esquecido.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">
                                        <img src="/servicos/automacao/check.webp" alt="Visto" style={{ height: '24px', width: 'auto' }} />
                                    </span>
                                    <span><strong>Escala Ilimitada:</strong> O negócio cresce sem aumentar a equipa.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center reveal auto-compare-cta">
                        <Link href="/contactos" className="auto-btn-primary">
                            Mudar para Operação Inteligente
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==========================================
                4. CORE MANIFESTO SECTION
            ========================================== */}
            <section className="auto-manifesto-section">
                <div className="container">
                    <div className="auto-manifesto-box reveal">
                        <div className="auto-manifesto-quote">
                            Automação não é sobre substituir pessoas. <br />
                            <span className="auto-gradient-text">É sobre permitir que negócios cresçam sem crescer a complexidade.</span>
                        </div>
                        <div className="mt-4">
                            <Link href="/contactos" className="auto-btn-secondary">
                                Falar com um Especialista
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================
                7. 4-STEP DEPLOYMENT ROADMAP
            ========================================== */}
            <section className="auto-roadmap-section">
                <div className="container">
                    <div className="text-center reveal">
                        <h2 className="auto-section-title">
                            Como Transformamos <span className="auto-gradient-text">a Sua Operação</span>
                        </h2>
                        <p className="auto-section-desc">
                            Um método simples e rápido para implementar automação e IA sem interromper o seu negócio.
                        </p>
                    </div>

                    <div className="auto-roadmap-grid" ref={roadmapGridRef} onScroll={handleRoadmapScroll}>
                        <div className={`auto-roadmap-card reveal delay-1 ${roadmapActiveIndex === 0 ? 'active' : ''}`}>
                            <div className="auto-step-num">01</div>
                            <h4>Mapeamento de Processos</h4>
                            <p>Analisamos os processos e identificamos oportunidades de automação.</p>
                        </div>
                        <div className={`auto-roadmap-card reveal delay-2 ${roadmapActiveIndex === 1 ? 'active' : ''}`}>
                            <div className="auto-step-num">02</div>
                            <h4>Solução Personalizada</h4>
                            <p>Desenhamos fluxos e IA adaptados ao seu negócio.</p>
                        </div>
                        <div className={`auto-roadmap-card reveal delay-3 ${roadmapActiveIndex === 2 ? 'active' : ''}`}>
                            <div className="auto-step-num">03</div>
                            <h4>Implementação</h4>
                            <p>Ligamos as ferramentas e colocamos tudo a funcionar.</p>
                        </div>
                        <div className={`auto-roadmap-card reveal delay-4 ${roadmapActiveIndex === 3 ? 'active' : ''}`}>
                            <div className="auto-step-num">04</div>
                            <h4>Otimização Contínua</h4>
                            <p>Monitorizamos, melhoramos e escalamos os resultados.</p>
                        </div>
                    </div>
                    {/* Carousel navigation dots for mobile view */}
                    <div className="carousel-dots">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${roadmapActiveIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(roadmapGridRef, '.auto-roadmap-card', idx, setRoadmapActiveIndex)}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    scrollToCard(roadmapGridRef, '.auto-roadmap-card', idx, setRoadmapActiveIndex);
                                }}
                                aria-label={`Ir para a etapa ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <div className="text-center reveal mt-5">
                        <Link href="/contactos" className="auto-btn-primary">
                            Iniciar Diagnóstico Gratuito
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==========================================
                8. FAQ ACCORDION
            ========================================== */}
            <section className="auto-faq-section reveal">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="auto-section-label">Perguntas Frequentes</span>
                        <h2 className="auto-section-title">
                            Esclareça As Suas Dúvidas
                        </h2>
                    </div>

                    <div className="auto-faq-container">
                        <FaqItem
                            defaultOpen={true}
                            question="É preciso mudar os programas ou softwares que a minha empresa já usa?"
                            answer="Não. Integramos os softwares que a sua empresa já utiliza (CRM, ERP, email, WhatsApp, entre outros), ligando tudo através de automações inteligentes, sem necessidade de mudar de plataforma."
                        />
                        <FaqItem
                            question="A automação torna o contacto com o cliente impessoal?"
                            answer="Pelo contrário. A automação trata das tarefas repetitivas, enquanto a sua equipa ganha mais tempo para conversas humanas e de maior valor."
                        />
                        <FaqItem
                            question="A minha equipa vai precisar de conhecimentos técnicos para utilizar?"
                            answer="Não. Criamos soluções simples de utilizar. A tecnologia trabalha nos bastidores para que a sua equipa continue a usar as ferramentas do dia a dia."
                        />
                        <FaqItem
                            question="Quanto tempo demora até vermos os primeiros resultados?"
                            answer="Depende da complexidade do projeto, mas muitas automações começam a gerar resultados imediatamente após a implementação."
                        />
                    </div>
                </div>
            </section>

            {/* ==========================================
                9. CLOSING CTA
            ========================================== */}
            <section className="auto-cta-section">
                <div className="container">
                    <div className="auto-cta-box reveal">
                        <h2 className="auto-cta-h2">
                            Pronto para operar no <br />
                            <span className="auto-gradient-text">próximo nível de eficiência?</span>
                        </h2>
                        <p className="auto-cta-p">
                            Descubra como a automação pode libertar tempo, reduzir custos e acelerar o crescimento do seu negócio.
                        </p>
                        <Link href="/contactos" className="auto-btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
                            Agendar Diagnóstico Gratuito
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AutomacaoPage;
