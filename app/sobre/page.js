'use client';

import React, { useEffect, useState, useRef } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Sobre.css';

const Sobre = () => {
    useScrollReveal();
    const [valuesActiveIndex, setValuesActiveIndex] = useState(0);
    const valuesRef = useRef(null);

    const values = [
        { title: 'Obsessão', sub: 'Pelo detalhe' },
        { title: 'Velocidade', sub: 'Sem pressa' },
        { title: 'Verdade', sub: 'Transparência total' },
        { title: 'Coragem', sub: 'Para inovar' },
    ];

    const getActiveIndexFromScroll = (container, selector) => {
        try {
            const items = container.querySelectorAll(selector);
            if (!items || !items.length) return 0;
            const firstItem = items[0];
            if (!firstItem) return 0;
            const itemWidth = firstItem.offsetWidth || 200;
            const gap = 24; // ~1.5rem gap
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

    const handleValuesScroll = (e) => {
        setValuesActiveIndex(getActiveIndexFromScroll(e.currentTarget, '.value-orb'));
    };

    useEffect(() => {
        document.body.classList.add('about-body');

        return () => {
            document.body.classList.remove('about-body');
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

                {/* Core Values (DNA) */}
                <section className="dna-section container reveal">
                    <div 
                        className="dna-values"
                        ref={valuesRef}
                        onScroll={handleValuesScroll}
                    >
                        {values.map((v, idx) => (
                            <div 
                                key={idx} 
                                className={`value-orb ${valuesActiveIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(valuesRef, '.value-orb', idx, setValuesActiveIndex)}
                            >
                                <div className="value-text">
                                    <span className="value-title">{v.title}</span>
                                    <span className="value-sub">{v.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Carousel navigation dots for mobile view */}
                    <div className="carousel-dots">
                        {values.map((_, idx) => (
                            <button
                                key={idx}
                                className={`carousel-dot ${valuesActiveIndex === idx ? 'active' : ''}`}
                                onClick={() => scrollToCard(valuesRef, '.value-orb', idx, setValuesActiveIndex)}
                                onTouchEnd={(e) => {
                                    e.preventDefault();
                                    scrollToCard(valuesRef, '.value-orb', idx, setValuesActiveIndex);
                                }}
                                aria-label={`Ir para valor ${idx + 1}`}
                            />
                        ))}
                    </div>
                </section>

                {/* Founders Note */}
                <section className="founders-section container reveal">
                    <div className="founder-note">
                        <h3 className="founder-note-title">Uma nota pessoal</h3>
                        <p className="founder-note-body">
                            "Criámos a ENimble porque estávamos cansados de agências que vendiam fumo.
                            Queríamos um lugar onde o design fosse respeitado, não apenas como &quot;bonecos&quot;, mas como
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
