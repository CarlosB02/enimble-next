import React, { useState } from 'react';
import CountUp from './CountUp';
import './AnimatedDashboard.css';

const AnimatedDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="dash-container">
            <div className="dash-header">
                <div
                    className={`dash-header-item ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Visão Geral
                </div>
                <div
                    className={`dash-header-item ${activeTab === 'reports' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reports')}
                >
                    Encomendas
                </div>
                <div
                    className={`dash-header-item ${activeTab === 'analysis' ? 'active' : ''}`}
                    onClick={() => setActiveTab('analysis')}
                >
                    Análises
                </div>
            </div>
            <div className="dash-body">
                {activeTab === 'overview' && (
                    <>
                        <div className="dash-main-chart">
                            <div className="dash-chart-header">
                                <span className="dash-chart-title">Crescimento Anual</span>
                                <span className="dash-chart-value">
                                    <CountUp end={127} prefix="+" suffix="%" duration={2500} />
                                </span>
                            </div>
                            <div className="dash-chart-area">
                                <svg viewBox="0 0 300 150" className="dash-graph-svg">
                                    <defs>
                                        <linearGradient id="dashGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#3A00FF" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#BF0040" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="dashLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#3A00FF" />
                                            <stop offset="100%" stopColor="#BF0040" />
                                        </linearGradient>
                                    </defs>
                                    {/* Main fluctuating line */}
                                    <path
                                        className="dash-graph-line dash-continuous-wave"
                                        d="M0,150 L30,120 L60,130 L90,100 L120,110 L150,80 L180,90 L210,60 L240,40 L270,50 L300,20"
                                        fill="none"
                                        stroke="url(#dashLineGradient)"
                                        strokeWidth="3"
                                    />
                                    <path
                                        className="dash-graph-area"
                                        d="M0,150 L30,120 L60,130 L90,100 L120,110 L150,80 L180,90 L210,60 L240,40 L270,50 L300,20 V150 H0 Z"
                                        fill="url(#dashGradient)"
                                    />
                                    {/* Animated Dots - matching the path coordinates */}
                                    <g className="dash-dots-group">
                                        <circle className="dash-graph-dot" cx="30" cy="120" r="3" />
                                        <circle className="dash-graph-dot" cx="60" cy="130" r="3" />
                                        <circle className="dash-graph-dot" cx="90" cy="100" r="3" />
                                        <circle className="dash-graph-dot" cx="120" cy="110" r="3" />
                                        <circle className="dash-graph-dot" cx="150" cy="80" r="3" />
                                        <circle className="dash-graph-dot" cx="180" cy="90" r="3" />
                                        <circle className="dash-graph-dot" cx="210" cy="60" r="3" />
                                        <circle className="dash-graph-dot" cx="240" cy="40" r="3" />
                                        <circle className="dash-graph-dot" cx="270" cy="50" r="3" />
                                        <circle className="dash-graph-dot" cx="300" cy="20" r="3" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="dash-side-stats">
                            <div className="dash-stat-card">
                                <div className="dash-stat-label">Receita</div>
                                <div className="dash-stat-value-container">
                                    <span className="dash-stat-value">
                                        <CountUp end={45200} separator=" " suffix=" €" duration={2000} />
                                    </span>
                                    <span className="dash-stat-indicator">↑ 12%</span>
                                </div>
                            </div>
                            <div className="dash-stat-card">
                                <div className="dash-stat-label">Despesas</div>
                                <div className="dash-stat-value-container">
                                    <span className="dash-stat-value">
                                        <CountUp end={12800} separator=" " suffix=" €" duration={2000} />
                                    </span>
                                    <span className="dash-stat-indicator-down">↓ 5%</span>
                                </div>
                            </div>
                            <div className="dash-stat-card">
                                <div className="dash-stat-label">Lucro Líquido</div>
                                <div className="dash-stat-value-container">
                                    <span className="dash-stat-value">
                                        <CountUp end={32400} separator=" " suffix=" €" duration={2000} />
                                    </span>
                                    <span className="dash-stat-indicator">↑ 18%</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'reports' && (
                    <div className="dash-tab-content">
                        <div className="dash-chart-header">
                            <span className="dash-chart-title">Comparativo Mensal</span>
                            <span className="dash-chart-value">2026</span>
                        </div>
                        <div className="dash-bar-chart-container">
                            {[60, 80, 45, 90, 75, 50, 85, 95].map((height, i) => (
                                <div key={i} className="dash-bar-column">
                                    <div
                                        className="dash-bar-fill"
                                        style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                                    ></div>
                                    <span className="dash-bar-label">{['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'][i]}</span>
                                </div>
                            ))}
                        </div>
                        <div className="dash-report-summary">
                            <p>Análise detalhada de evolução de encomendas recebidas.</p>
                        </div>
                    </div>
                )}
                {activeTab === 'analysis' && (
                    <div className="dash-tab-content">
                        <div className="dash-chart-header">
                            <span className="dash-chart-title">Distribuição de Custos</span>
                        </div>
                        <div className="dash-progress-bars">
                            <div className="dash-progress-item">
                                <div className="dash-progress-header">
                                    <span>Pessoal</span>
                                    <span><CountUp end={45} suffix="%" duration={1500} delay={0} /></span>
                                </div>
                                <div className="dash-progress-track">
                                    <div className="dash-progress-bar" style={{ width: '100%', transform: 'scaleX(0.45)', background: 'var(--shop-accent, #3A00FF)', animationDelay: '0s' }}></div>
                                </div>
                            </div>
                            <div className="dash-progress-item">
                                <div className="dash-progress-header">
                                    <span>Fornecedores</span>
                                    <span><CountUp end={30} suffix="%" duration={1500} delay={0.2} /></span>
                                </div>
                                <div className="dash-progress-track">
                                    <div className="dash-progress-bar" style={{ width: '100%', transform: 'scaleX(0.30)', background: 'var(--shop-secondary, #BF0040)', animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                            <div className="dash-progress-item">
                                <div className="dash-progress-header">
                                    <span>Impostos</span>
                                    <span><CountUp end={25} suffix="%" duration={1500} delay={0.4} /></span>
                                </div>
                                <div className="dash-progress-track">
                                    <div className="dash-progress-bar" style={{ width: '100%', transform: 'scaleX(0.25)', background: '#48bb78', animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="dash-decoration-1"></div>
            <div className="dash-decoration-2"></div>
        </div>
    );
};

export default AnimatedDashboard;
