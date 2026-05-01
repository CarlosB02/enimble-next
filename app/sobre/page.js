'use client';

import React, { useEffect, useRef } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Sobre.css';

const Sobre = () => {
    useScrollReveal();
    const sliderRef = useRef(null);

    useEffect(() => {
        document.body.classList.add('about-body');

        const slider = sliderRef.current;
        const handleWheel = (e) => {
            if (window.innerWidth > 768 && slider) {
                e.preventDefault();
                slider.scrollLeft += e.deltaY;
            }
        };

        if (slider) {
            slider.addEventListener('wheel', handleWheel);
        }

        return () => {
            document.body.classList.remove('about-body');
            if (slider) {
                slider.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    return (
        <>
            <div className="noise-overlay"></div>
            <main>
                {/* Poster Hero */}
                <section className="poster-hero">
                    <h1>
                        <span>PESSOAS</span>
                        <span>POR TRÁS</span>
                        <span className="outline-text">DO CÓDIGO.</span>
                    </h1>
                </section>

                {/* Cinematic Manifesto */}
                <section className="manifesto-section reveal">
                    <p className="manifesto-text">
                        Não acreditamos em B2B ou B2C. Acreditamos em <span className="highlight">H2H (Human to Human)</span>.
                        A tecnologia é apenas o meio; a <span className="highlight">Conexão</span> é o fim.
                        Nascemos para descomplicar o digital e torná-lo numa extensão natural da sua marca.
                    </p>
                </section>

                {/* Horizontal Timeline */}
                <div
                    style={{
                        paddingLeft: '10vw', marginBottom: '2rem', fontFamily: "'Syne'", fontSize: '2rem', color: 'var(--text-muted)', fontWeight: 700
                    }}>
                    A Jornada {">"}
                </div>
                <div className="timeline-wrapper reveal" ref={sliderRef}>
                    <div className="timeline-item">
                        <div className="time-year">2021</div>
                        <h3 className="time-title">A Origem</h3>
                        <p style={{ color: 'var(--text-muted)' }}>O início num pequeno escritório, com apenas dois portáteis e
                            uma visão de
                            design disruptivo.</p>
                    </div>
                    <div className="timeline-item">
                        <div className="time-year">2022</div>
                        <h3 className="time-title">Primeiro Big Client</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Ganhámos a confiança de uma marca internacional, provando que
                            criatividade
                            não tem tamanho.</p>
                    </div>
                    <div className="timeline-item">
                        <div className="time-year">2023</div>
                        <h3 className="time-title">Expansão da Equipa</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Integração de especialistas em Marketing e Branding para
                            oferecer um serviço
                            360º.</p>
                    </div>
                    <div className="timeline-item">
                        <div className="time-year">2024</div>
                        <h3 className="time-title">E-Nimble Academy</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Lançamento da área de formação para partilhar conhecimento com
                            o mercado.
                        </p>
                    </div>
                </div>

                {/* Core Values (DNA) */}
                <section className="dna-values container reveal">
                    <div className="value-orb">
                        <div className="value-text">
                            <span className="value-title">Obsessão</span>
                            <span className="value-sub">Pelo detalhe</span>
                        </div>
                    </div>
                    <div className="value-orb">
                        <div className="value-text">
                            <span className="value-title">Velocidade</span>
                            <span className="value-sub">Sem pressa</span>
                        </div>
                    </div>
                    <div className="value-orb">
                        <div className="value-text">
                            <span className="value-title">Verdade</span>
                            <span className="value-sub">Transparência total</span>
                        </div>
                    </div>
                    <div className="value-orb">
                        <div className="value-text">
                            <span className="value-title">Coragem</span>
                            <span className="value-sub">Para inovar</span>
                        </div>
                    </div>
                </section>

                {/* Founders Note */}
                <section className="container reveal" style={{ paddingBottom: '6rem' }}>
                    <div className="founder-note">
                        <h3 style={{ fontFamily: "'Syne'", fontSize: '2rem', marginBottom: '1.5rem' }}>Uma nota pessoal</h3>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--text-color)' }}>
                            "Criámos a E-Nimble porque estávamos cansados de agências que vendiam fumo.
                            Queríamos um lugar onde o design fosse respeitado, não apenas como "bonecos", mas como
                            ferramenta de negócio.
                            Obrigado por confiar na nossa visão."
                        </p>
                        <div className="founder-sig">- Carlos Bernardo</div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Sobre;
