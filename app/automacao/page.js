'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import dynamic from 'next/dynamic';
import './Automacao.css';

const Hyperspeed = dynamic(() => import('@/components/ui/Hyperspeed'), { ssr: false });

const AutomacaoPage = () => {
    useScrollReveal();

    // 1. Live Workflow Simulator State & Data
    const [activeScenario, setActiveScenario] = useState('vendas');

    const scenarios = {
        vendas: {
            title: 'Captura & Conversão de Leads',
            nodes: [
                { step: '01', icon: '🎯', title: 'Lead Registado', detail: 'Formulário ou Anúncio' },
                { step: '02', icon: '🤖', title: 'Qualificação IA', detail: 'Análise de perfil em 0.4s' },
                { step: '03', icon: '🔄', title: 'CRM & Follow-up', detail: 'Nutrição & WhatsApp' },
                { step: '04', icon: '📅', title: 'Agendamento', detail: 'Reunião no Calendário' }
            ],
            metric: 'Tempo médio de resposta: 1.2 segundos (vs 4 horas manuais)'
        },
        marketing: {
            title: 'Publicação & Email Marketing',
            nodes: [
                { step: '01', icon: '✍️', title: 'Novo Artigo / Ideia', detail: 'Briefing estratégico' },
                { step: '02', icon: '🧠', title: 'Workflow de IA', detail: 'SEO & Copywriting' },
                { step: '03', icon: '📰', title: 'Blog Automático', detail: 'Publicação & Imagens' },
                { step: '04', icon: '📧', title: 'Sequência Email', detail: 'Disparo para a lista' }
            ],
            metric: 'Publicação multicanal 100% autónoma sem intervenção diária'
        },
        operacoes: {
            title: 'Processos Internos & ERP',
            nodes: [
                { step: '01', icon: '📥', title: 'Entrada de Dados', detail: 'Faturas, PDFs ou Forms' },
                { step: '02', icon: '🔍', title: 'Extração Inteligente', detail: 'Validação sem erro' },
                { step: '03', icon: '🔌', title: 'Integração via API', detail: 'Sincronização entre Apps' },
                { step: '04', icon: '📊', title: 'Relatórios IA', detail: 'Dashboards atualizados' }
            ],
            metric: 'Zero erros de introdução manual e 100% de consistência'
        },
        experiencia: {
            title: 'Suporte & Notificações de Cliente',
            nodes: [
                { step: '01', icon: '💬', title: 'Contacto do Cliente', detail: 'Chat, Email ou WhatsApp' },
                { step: '02', icon: '⚡', title: 'Agente de IA', detail: 'Resolução imediata' },
                { step: '03', icon: '🔔', title: 'Notificação', detail: 'Alerta de estado em tempo real' },
                { step: '04', icon: '⭐', title: 'Satisfação', detail: 'Feedback & Fidelização' }
            ],
            metric: 'NPS +42% através de respostas e acompanhamento instantâneos'
        }
    };

    // 2. Before vs After Comparison Mode
    const [compareMode, setCompareMode] = useState('auto'); // 'manual' | 'auto'

    // 3. Interactive Hours & ROI Saved Calculator
    const [teamSize, setTeamSize] = useState(12);
    const [hoursPerWeek, setHoursPerWeek] = useState(8);

    const hoursSavedPerMonth = Math.round(teamSize * hoursPerWeek * 4.33);
    const estimatedCapacityBoost = (hoursPerWeek * 2.5).toFixed(0);

    // Accordion handler for single-open behavior
    const handleDetailsClick = (e) => {
        const targetDetail = e.currentTarget;
        const details = document.querySelectorAll('.auto-faq-item');
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute('open');
            }
        });
    };

    useEffect(() => {
        document.body.classList.add('auto-body');
        return () => document.body.classList.remove('auto-body');
    }, []);

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
                            O Seu Negócio Trabalha.<br />
                            <span className="auto-gradient-text">Mesmo Quando Dorme.</span>
                        </h1>
                        <p className="auto-hero-p">
                            Automatizamos tarefas repetitivas e criamos fluxos inteligentes para que a sua equipa se concentre no que realmente importa.
                        </p>
                        <div className="auto-hero-ctas">
                            <Link href="/contactos" className="auto-btn-primary">
                                Agendar Sessão de Diagnóstico
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
                            Selecione um cenário abaixo e veja como a nossa automação integra diferentes ferramentas e processos de ponta a ponta.
                        </p>
                    </div>

                    <div className="auto-simulator-wrapper reveal">
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
                                    Conteúdo & Email
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
                                    Suporte & Notificações
                                </button>
                            </div>
                            <div className="auto-sim-status">
                                <span className="auto-status-pulse"></span>
                                Execução em Tempo Real
                            </div>
                        </div>

                        <div className="auto-pipeline-canvas">
                            <div className="auto-nodes-flow">
                                {scenarios[activeScenario].nodes.map((node, index) => (
                                    <React.Fragment key={index}>
                                        <div className="auto-node-card active-step">
                                            <span className="auto-node-step">Passo {node.step}</span>
                                            <div className="auto-node-icon">{node.icon}</div>
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
                            <span>⚡ <strong>Impacto Operacional:</strong> {scenarios[activeScenario].metric}</span>
                            <span className="auto-metrics-pill">Zero fricção humana</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================
                2. METRICS & IMPACT BAR
            ========================================== */}
            <section className="auto-impact-section">
                <div className="container">
                    <div className="auto-metrics-grid">
                        <div className="auto-metric-card reveal delay-1">
                            <div className="auto-metric-val">+85%</div>
                            <div className="auto-metric-label">Redução de Tarefas Repetitivas</div>
                            <div className="auto-metric-sub">A equipa foca-se no que gera receita</div>
                        </div>
                        <div className="auto-metric-card reveal delay-2">
                            <div className="auto-metric-val">0.0s</div>
                            <div className="auto-metric-label">Atraso na Resposta a Leads</div>
                            <div className="auto-metric-sub">Atendimento e qualificação instantâneos</div>
                        </div>
                        <div className="auto-metric-card reveal delay-3">
                            <div className="auto-metric-val">100%</div>
                            <div className="auto-metric-label">Consistência nos Processos</div>
                            <div className="auto-metric-sub">Eliminação total do erro humano</div>
                        </div>
                        <div className="auto-metric-card reveal delay-4">
                            <div className="auto-metric-val">3.4x</div>
                            <div className="auto-metric-label">Capacidade de Escala</div>
                            <div className="auto-metric-sub">Mais volume com a mesma equipa</div>
                        </div>
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
                            Como a sua empresa opera hoje <br />
                            <span className="auto-gradient-text">vs. Como pode operar amanhã</span>
                        </h2>
                        <p className="auto-section-desc">
                            A diferença entre empresas que estagnam e empresas que lideram está na forma como gerem o seu recurso mais valioso: o tempo.
                        </p>
                    </div>

                    <div className="auto-compare-toggle-container reveal">
                        <div className="auto-compare-switch">
                            <button
                                className={`auto-switch-btn ${compareMode === 'manual' ? 'active-manual' : ''}`}
                                onClick={() => setCompareMode('manual')}
                            >
                                ⚠️ Operação Manual
                            </button>
                            <button
                                className={`auto-switch-btn ${compareMode === 'auto' ? 'active-auto' : ''}`}
                                onClick={() => setCompareMode('auto')}
                            >
                                🚀 Operação Inteligente
                            </button>
                        </div>
                    </div>

                    <div className="auto-compare-grid reveal">
                        <div className={`auto-compare-card manual-card ${compareMode === 'manual' ? 'highlight-side' : ''}`}>
                            <div className="auto-compare-header">
                                <span className="auto-compare-badge">Operação Tradicional</span>
                                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Trabalho Manual</h3>
                            </div>
                            <ul className="auto-compare-list">
                                <li className="auto-compare-item">
                                    <span className="icon">❌</span>
                                    <span><strong>Atendimento Lento:</strong> Leads esperam demasiado por uma resposta.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">❌</span>
                                    <span><strong>Desperdício de Talento:</strong> Horas perdidas a copiar informação.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">❌</span>
                                    <span><strong>Falhas de Follow-up:</strong> Oportunidades acabam por escapar.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">❌</span>
                                    <span><strong>Custo Proibitivo de Escala:</strong> Mais trabalho exige mais pessoas.</span>
                                </li>
                            </ul>
                        </div>

                        <div className={`auto-compare-card auto-card ${compareMode === 'auto' ? 'highlight-side' : ''}`}>
                            <div className="auto-compare-header">
                                <span className="auto-compare-badge">Operação Inteligente</span>
                                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Fluxos Inteligentes</h3>
                            </div>
                            <ul className="auto-compare-list">
                                <li className="auto-compare-item">
                                    <span className="icon">✅</span>
                                    <span><strong>Resposta em Segundos:</strong> Clientes recebem resposta em segundos.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">✅</span>
                                    <span><strong>Foco em Tarefas de Alto Valor:</strong> Menos tarefas repetitivas, mais resultados.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">✅</span>
                                    <span><strong>Nutrição e CRM Automático:</strong> Nenhum contacto fica esquecido.</span>
                                </li>
                                <li className="auto-compare-item">
                                    <span className="icon">✅</span>
                                    <span><strong>Escala Ilimitada:</strong> O negócio cresce sem aumentar a equipa.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================
                4. SERVICES WE OFFER (BENTO MATRIX)
            ========================================== */}
            <section className="auto-matrix-section">
                <div className="container">
                    <div className="text-center reveal">
                        <h2 className="auto-section-title">
                            Ecossistemas de Automação & IA <br />
                            <span className="auto-gradient-text">Construídos para Resultados Medíveis</span>
                        </h2>
                        <p className="auto-section-desc">
                            Integrámos ferramentas, dados e inteligência artificial para que cada departamento do seu negócio funcione como uma engrenagem perfeita.
                        </p>
                    </div>

                    <div className="auto-bento-grid">

                        {/* Card 1 - Sales & CRM */}
                        <div className="auto-bento-card col-span-8 reveal delay-1">
                            <div>
                                <div className="auto-bento-icon-wrapper">🚀</div>
                                <h3>Automação de Vendas & Nutrição de Leads</h3>
                                <p>
                                    Revolucione o seu funil comercial. Desde o momento em que a lead preenche um formulário até à reunião agendada no calendário, todos os passos acontecem de forma fluida.
                                </p>
                                <div className="auto-mini-workflow-preview">
                                    <span className="auto-mini-pill">Lead Nurturing</span>
                                    <span>➔</span>
                                    <span className="auto-mini-pill">CRM Automation</span>
                                    <span>➔</span>
                                    <span className="auto-mini-pill">Appointment Scheduling</span>
                                </div>
                            </div>
                            <div className="auto-bento-tags">
                                <span className="auto-tag">Sistemas de Follow-up</span>
                                <span className="auto-tag">Agendamento Automático</span>
                                <span className="auto-tag">CRM Sync</span>
                                <span className="auto-tag">Qualificação IA</span>
                            </div>
                        </div>

                        {/* Card 2 - Content & Blog */}
                        <div className="auto-bento-card col-span-4 reveal delay-2">
                            <div>
                                <div className="auto-bento-icon-wrapper">✍️</div>
                                <h3>Publicação Automática de Blog & Conteúdo</h3>
                                <p>
                                    Manter o site atualizado deixa de ser um encargo. Criamos fluxos de IA que pesquisam temas, geram rascunhos otimizados para SEO e publicam no seu blog com aprovação simples.
                                </p>
                            </div>
                            <div className="auto-bento-tags">
                                <span className="auto-tag">Automatic Blog Publishing</span>
                                <span className="auto-tag">SEO Workflows</span>
                            </div>
                        </div>

                        {/* Card 3 - Customer Experience */}
                        <div className="auto-bento-card col-span-4 reveal delay-1">
                            <div>
                                <div className="auto-bento-icon-wrapper">💌</div>
                                <h3>Comunicação & Experiência do Cliente</h3>
                                <p>
                                    Crie jornadas inesquecíveis. Envie sequências de email automatizadas, notificações de estado do pedido por WhatsApp e lembretes sem depender da memória humana.
                                </p>
                            </div>
                            <div className="auto-bento-tags">
                                <span className="auto-tag">Automated Email Sequences</span>
                                <span className="auto-tag">Customer Notifications</span>
                            </div>
                        </div>

                        {/* Card 4 - Internal Workflows & APIs */}
                        <div className="auto-bento-card col-span-8 reveal delay-2">
                            <div>
                                <div className="auto-bento-icon-wrapper">⚙️</div>
                                <h3>Fluxos Internos & Integração entre Plataformas</h3>
                                <p>
                                    Acabe com as ilhas de informação. Ligamos o seu software de faturação, CRM, folhas de cálculo e ferramentas de equipa através de APIs e automações personalizadas.
                                </p>
                                <div className="auto-mini-workflow-preview">
                                    <span className="auto-mini-pill">API Integrations</span>
                                    <span>➔</span>
                                    <span className="auto-mini-pill">Internal Workflows</span>
                                    <span>➔</span>
                                    <span className="auto-mini-pill">Business Process Automation</span>
                                </div>
                            </div>
                            <div className="auto-bento-tags">
                                <span className="auto-tag">Integrações entre Plataformas</span>
                                <span className="auto-tag">Custom Automations</span>
                                <span className="auto-tag">API Workflows</span>
                            </div>
                        </div>

                        {/* Card 5 - AI Workflows & Reporting */}
                        <div className="auto-bento-card col-span-12 reveal delay-3">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                                <div>
                                    <div className="auto-bento-icon-wrapper">📊</div>
                                    <h3>Workflows de IA & Relatórios de Gestão Automáticos</h3>
                                    <p>
                                        Transforme dados dispersos em decisões estratégicas. O nosso sistema compila dados operacionais de várias fontes e entrega relatórios claros diretamente no seu email ou Slack.
                                    </p>
                                </div>
                                <div className="auto-bento-tags" style={{ marginTop: 0 }}>
                                    <span className="auto-tag">AI-powered Workflows</span>
                                    <span className="auto-tag">Reporting Automations</span>
                                    <span className="auto-tag">Data Extraction</span>
                                    <span className="auto-tag">Dashboards em Tempo Real</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ==========================================
                5. OPERATIONAL ROI & HOURS CALCULATOR
            ========================================== */}
            <section id="calculadora" className="auto-calculator-section">
                <div className="container">
                    <div className="text-center reveal">
                        <h2 className="auto-section-title">
                            Quanto tempo a sua empresa está a perder hoje?
                        </h2>
                        <p className="auto-section-desc">
                            Ajuste os indicadores abaixo e veja quantas horas de trabalho manual a sua equipa pode recuperar todos os meses através da automação.
                        </p>
                    </div>

                    <div className="auto-calculator-box reveal delay-1" style={{ marginTop: '3.5rem' }}>
                        <div className="auto-calc-controls">
                            <div className="auto-slider-group">
                                <div className="auto-slider-header">
                                    <span className="auto-slider-label">Membros na equipa:</span>
                                    <span className="auto-slider-val">{teamSize} colaboradores</span>
                                </div>
                                <input
                                    type="range"
                                    min="2"
                                    max="100"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(Number(e.target.value))}
                                    className="auto-range-input"
                                />
                            </div>

                            <div className="auto-slider-group">
                                <div className="auto-slider-header">
                                    <span className="auto-slider-label">Horas manuais repetitivas/semana por pessoa:</span>
                                    <span className="auto-slider-val">{hoursPerWeek}h / semana</span>
                                </div>
                                <input
                                    type="range"
                                    min="2"
                                    max="25"
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                    className="auto-range-input"
                                />
                            </div>
                        </div>

                        <div className="auto-calc-results">
                            <div className="auto-res-item">
                                <div className="auto-res-num">~{hoursSavedPerMonth.toLocaleString()}h</div>
                                <div className="auto-res-desc">Horas operacionais recuperadas por mês</div>
                            </div>
                            <div className="auto-res-item">
                                <div className="auto-res-num">+{estimatedCapacityBoost}%</div>
                                <div className="auto-res-desc">Aumento estimado de capacidade sem contratar</div>
                            </div>
                            <Link href="/contactos" className="auto-btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                Recupere Este Tempo Agora →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================
                6. CORE MANIFESTO SECTION
            ========================================== */}
            <section className="auto-manifesto-section">
                <div className="container">
                    <div className="auto-manifesto-box reveal">
                        <div className="auto-manifesto-quote">
                            "Automação não é sobre substituir pessoas. <br />
                            <span className="auto-gradient-text">É sobre permitir que negócios cresçam sem crescer a complexidade.</span>"
                        </div>
                        <p className="auto-manifesto-sub">
                            Quando remove o peso do trabalho repetitivo dos ombros da sua equipa, liberta o seu verdadeiro potencial criativo, comercial e estratégico.
                        </p>
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
                            Como Transformamos a Sua Operação
                        </h2>
                        <p className="auto-section-desc">
                            Um método estruturado em 4 passos para implementar automação e IA com segurança e sem interromper o seu negócio.
                        </p>
                    </div>

                    <div className="auto-roadmap-grid">
                        <div className="auto-roadmap-card reveal delay-1">
                            <div className="auto-step-num">01</div>
                            <h4>Mapeamento de Processos</h4>
                            <p>Analisamos os fluxos de trabalho atuais para identificar onde a sua equipa perde tempo e onde ocorrem gargalos.</p>
                        </div>
                        <div className="auto-roadmap-card reveal delay-2">
                            <div className="auto-step-num">02</div>
                            <h4>Arquitetura & IA Customizada</h4>
                            <p>Desenhamos as integrações e modelos de inteligência artificial perfeitamente adaptados ao seu software e modelo de negócio.</p>
                        </div>
                        <div className="auto-roadmap-card reveal delay-3">
                            <div className="auto-step-num">03</div>
                            <h4>Implementação Silenciosa</h4>
                            <p>Conectamos as suas plataformas e testamos cada fluxo em ambiente controlado, garantindo transição sem atritos.</p>
                        </div>
                        <div className="auto-roadmap-card reveal delay-4">
                            <div className="auto-step-num">04</div>
                            <h4>Operação Autónoma & Escala</h4>
                            <p>Os seus sistemas passam a operar em piloto automático enquanto monitorizamos a eficiência e otimizamos os resultados.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================
                8. FAQ ACCORDION
            ========================================== */}
            <section className="auto-faq-section">
                <div className="container">
                    <div className="text-center reveal">
                        <span className="auto-section-label">Perguntas Frequentes</span>
                        <h2 className="auto-section-title">
                            Esclareça As Suas Dúvidas
                        </h2>
                    </div>

                    <div className="auto-faq-container">
                        <details className="auto-faq-item reveal delay-1" open onClick={handleDetailsClick}>
                            <summary className="auto-faq-summary">
                                <span>É preciso mudar os programas ou softwares que a minha empresa já usa?</span>
                                <span className="auto-faq-icon">+</span>
                            </summary>
                            <div className="auto-faq-content">
                                Não. O objetivo da E-Nimble é integrar os softwares que a sua equipa já utiliza diariamente (como CRM, email, ERP, WhatsApp ou ferramentas de gestão), conectando-os através de APIs e automações inteligentes sem forçar novas migrações.
                            </div>
                        </details>

                        <details className="auto-faq-item reveal delay-2" onClick={handleDetailsClick}>
                            <summary className="auto-faq-summary">
                                <span>A automação torna o contacto com o cliente impessoal?</span>
                                <span className="auto-faq-icon">+</span>
                            </summary>
                            <div className="auto-faq-content">
                                Pelo contrário. Com inteligência artificial avançada e fluxos personalizados, a comunicação torna-se imediata, relevante e contextual. Além disso, ao automatizar tarefas mecânicas, a sua equipa fica com mais tempo livre para conversas humanas de alto valor.
                            </div>
                        </details>

                        <details className="auto-faq-item reveal delay-3" onClick={handleDetailsClick}>
                            <summary className="auto-faq-summary">
                                <span>A minha equipa vai precisar de conhecimentos técnicos para utilizar?</span>
                                <span className="auto-faq-icon">+</span>
                            </summary>
                            <div className="auto-faq-content">
                                Zero. Desenhamos sistemas invisíveis que trabalham nos bastidores. A sua equipa apenas nota que as tarefas repetitivas desapareceram e que as informações aparecem prontas nos locais certos.
                            </div>
                        </details>

                        <details className="auto-faq-item reveal delay-4" onClick={handleDetailsClick}>
                            <summary className="auto-faq-summary">
                                <span>Quanto tempo demora até vermos os primeiros resultados?</span>
                                <span className="auto-faq-icon">+</span>
                            </summary>
                            <div className="auto-faq-content">
                                Automações prioritárias de alto impacto (como qualificação instantânea de leads, agendamento automático e notificações) são habitualmente implementadas e operacionais em poucas semanas.
                            </div>
                        </details>
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
                            Agende uma conversa com os nossos especialistas e descubra como a automação inteligente pode transformar o dia-a-dia e a rentabilidade do seu negócio.
                        </p>
                        <Link href="/contactos" className="auto-btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
                            Marcar Reunião Estratégica ☕
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AutomacaoPage;
