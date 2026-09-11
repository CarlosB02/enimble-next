'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Termos.css';

const sections = [
  { id: 'aceitacao', title: '1. Aceitação dos Termos' },
  { id: 'propriedade-intelectual', title: '2. Propriedade Intelectual' },
  { id: 'utilizacao-website', title: '3. Condições de Utilização' },
  { id: 'prestacao-servicos', title: '4. Prestação de Serviços' },
  { id: 'limitacao-responsabilidade', title: '5. Limitação de Responsabilidade' },
  { id: 'privacidade-dados', title: '6. Proteção de Dados' },
  { id: 'links-terceiros', title: '7. Ligações Externas' },
  { id: 'alteracoes-termos', title: '8. Alterações aos Termos' },
  { id: 'lei-aplicavel', title: '9. Lei Aplicável e Foro' },
  { id: 'contacto-suporte', title: '10. Contactos & Informações' },
];

export default function TermosClient() {
  useScrollReveal();
  const [activeSection, setActiveSection] = useState('aceitacao');
  const [searchQuery, setSearchQuery] = useState('');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.add('terms-body-page');
    return () => document.body.classList.remove('terms-body-page');
  }, []);

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="terms-noise-overlay"></div>

      <main className="terms-page">
        {/* HERO SECTION */}
        <section className="terms-hero">
          <div className="container">
            <div className="terms-hero-content">
              <h1>
                Termos e <span className="gradient-text">Condições</span>
              </h1>
              <p className="terms-hero-subtitle">
                Bem-vindo à ENimble. Os presentes Termos e Condições regem o acesso e utilização do nosso website
                e o enquadramento geral dos serviços prestados pela nossa agência.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN BODY CONTAINER */}
        <section className="terms-body-section">
          <div className="container terms-layout">
            {/* SIDEBAR NAVIGATION / TOC */}
            <aside className="terms-sidebar">
              <div className="sidebar-sticky">
                <div className="terms-search-box">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Pesquisar nos termos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Pesquisar termos e condições"
                  />
                  {searchQuery && (
                    <button
                      className="search-clear-btn"
                      onClick={() => setSearchQuery('')}
                      aria-label="Limpar pesquisa"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="terms-toc-card">
                  <h3 className="toc-title">Índice dos Termos</h3>
                  <nav className="toc-nav">
                    <ul>
                      {filteredSections.map((sec) => (
                        <li key={sec.id}>
                          <a
                            href={`#${sec.id}`}
                            className={activeSection === sec.id ? 'active' : ''}
                            onClick={(e) => {
                              e.preventDefault();
                              const target = document.getElementById(sec.id);
                              if (target) {
                                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                setActiveSection(sec.id);
                              }
                            }}
                          >
                            {sec.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>

            {/* CONTENT ARTICLES */}
            <div className="terms-content">

              {/* SECTION 1 */}
              <article id="aceitacao" className="terms-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">01</span>
                  <h2>Aceitação dos Termos</h2>
                </div>
                <p>
                  Ao aceder e navegar no website <a href="https://enimble.pt" target="_blank" rel="noopener noreferrer">https://enimble.pt</a>,
                  ou ao contratar qualquer um dos serviços disponibilizados pela <strong>ENimble</strong> (Agência de Marketing Digital, Web Design,
                  Tráfego Pago, Automação, Branding e Gestão de Redes Sociais), o utilizador declara ter lido, compreendido e aceite integralmente os presentes Termos e Condições.
                </p>
                <p>
                  Caso não concorde com qualquer uma das disposições aqui estabelecidas, deverá interromper de imediato a utilização deste website.
                </p>
              </article>

              {/* SECTION 2 */}
              <article id="propriedade-intelectual" className="terms-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">02</span>
                  <h2>Propriedade Intelectual e Direitos de Autor</h2>
                </div>
                <p>
                  Todos os conteúdos presentes neste website — incluindo textos, grafismos, logótipos, ícones, imagens, ilustrações, peças áudio e vídeo, código-fonte, layout e estrutura de navegação — são propriedade exclusiva da ENimble ou foram devidamente licenciados por terceiros, encontrando-se protegidos pelas leis nacionais e internacionais de Direitos de Autor e Propriedade Intelectual.
                </p>
                <p>
                  É expressamente proibida a cópia, reprodução, alteração, distribuição, publicação ou exploração comercial de qualquer conteúdo deste website sem o prévio consentimento por escrito da ENimble.
                </p>
              </article>

              {/* SECTION 3 */}
              <article id="utilizacao-website" className="terms-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">03</span>
                  <h2>Condições de Utilização do Website</h2>
                </div>
                <p>
                  O utilizador compromete-se a utilizar o website de forma responsável, ética e em cumprimento com a legislação em vigor em Portugal e na União Europeia. É estritamente proibido:
                </p>
                <ul className="styled-list">
                  <li>Utilizar o website para fins ilegais, difamatórios, fraudulentos ou nocivos a terceiros;</li>
                  <li>Tentar obter acesso não autorizado aos sistemas, servidores ou bases de dados da ENimble;</li>
                  <li>Introduzir vírus, cavalos de Tróia, código malicioso ou qualquer software prejudicial;</li>
                  <li>Realizar operações de extração automatizada de dados (<em>scraping</em> ou <em>data mining</em>) sem autorização prévia.</li>
                </ul>
              </article>

              {/* SECTION 4 */}
              <article id="prestacao-servicos" className="terms-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">04</span>
                  <h2>Prestação de Serviços e Orçamentos</h2>
                </div>
                <p>
                  As informações disponibilizadas no website sobre serviços de Web Design, Gestão de Redes Sociais, Tráfego Pago, Automação e Branding possuem caráter informativo e promocional.
                </p>
                <p>
                  A contratação efetiva de qualquer serviço da ENimble rege-se por proposta comercial ou contrato formal acordado entre as partes, onde serão especificados com precisão o âmbito do trabalho, prazos de entrega, valores, condições de pagamento e garantias aplicáveis.
                </p>
              </article>

              {/* SECTION 5 */}
              <article id="limitacao-responsabilidade" className="terms-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">05</span>
                  <h2>Isenção e Limitação de Responsabilidade</h2>
                </div>
                <p>
                  A ENimble envida todos os esforços razoáveis para garantir que a informação contida neste website seja correta, atualizada e isenta de erros técnicos. No entanto, não garantimos o funcionamento ininterrupto ou totalmente livre de falhas do website.
                </p>
                <p>
                  A ENimble não assume qualquer responsabilidade por eventuais danos diretos ou indiretos, perdas de dados ou interrupções de atividade decorrentes da utilização ou incapacidade de utilização deste website, nem por erros de servidores de terceiros ou falhas na rede de comunicações.
                </p>
              </article>

              {/* SECTION 6 */}
              <article id="privacidade-dados" className="terms-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">06</span>
                  <h2>Proteção de Dados Pessoais</h2>
                </div>
                <p>
                  A ENimble atribui prioridade absoluta à proteção da privacidade e dos dados pessoais dos seus utilizadores. O tratamento de dados pessoais recolhidos através deste website é efetuado em rigorosa conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
                </p>
                <p>
                  Para conhecer em detalhe as nossas práticas de recolha, utilização, conservação e os seus direitos enquanto titular dos dados, consulte a nossa{' '}
                  <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
                </p>
              </article>

              {/* SECTION 7 */}
              <article id="links-terceiros" className="terms-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">07</span>
                  <h2>Ligações a Sites de Terceiros (Hyperlinks)</h2>
                </div>
                <p>
                  O website da ENimble pode conter hiperligações para websites de terceiros. Estas ligações são fornecidas apenas para conveniência do utilizador.
                </p>
                <p>
                  A ENimble não exerce qualquer controlo sobre o conteúdo, políticas de privacidade ou práticas desses websites externos, não assumindo qualquer responsabilidade pelos mesmos. Recomendamos que consulte as políticas de cada site que visite.
                </p>
              </article>

              {/* SECTION 8 */}
              <article id="alteracoes-termos" className="terms-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">08</span>
                  <h2>Alterações aos Termos e Condições</h2>
                </div>
                <p>
                  A ENimble reserva-se o direito de alterar, atualizar ou substituir os presentes Termos e Condições a qualquer momento, sem aviso prévio. As modificações entrarão em vigor na data da sua publicação no website.
                </p>
                <p>
                  É da responsabilidade do utilizador consultar periodicamente esta página para se manter informado sobre eventuais alterações.
                </p>
              </article>

              {/* SECTION 9 */}
              <article id="lei-aplicavel" className="terms-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">09</span>
                  <h2>Lei Aplicável e Foro Competente</h2>
                </div>
                <p>
                  Os presentes Termos e Condições regem-se e são interpretados de acordo com a legislação portuguesa.
                </p>
                <p>
                  Para a resolução de qualquer litígio emergente da interpretação, validade ou execução dos presentes Termos, fica designado como competente o Foro da Comarca de Lisboa, com expressa renúncia a qualquer outro.
                </p>
              </article>

              {/* SECTION 10 */}
              <article id="contacto-suporte" className="terms-card terms-card-cta reveal">
                <div className="cta-content">
                  <span className="cta-badge">Apoio & Esclarecimentos</span>
                  <h2>Dúvidas sobre os nossos Termos?</h2>
                  <p>
                    Se tiver qualquer questão ou necessitar de esclarecimentos adicionais sobre os nossos Termos e Condições ou serviços:
                  </p>
                  <div className="cta-actions">
                    <Link href="/contactos" className="btn btn-primary">
                      Falar com a Equipa ENimble
                    </Link>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
