'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import './Privacidade.css';

const sections = [
  { id: 'enquadramento', title: '1. Quem Somos & Enquadramento' },
  { id: 'dados-recolhidos', title: '2. Dados Pessoais Recolhidos' },
  { id: 'finalidade-base-legal', title: '3. Finalidades & Base Legal' },
  { id: 'conservacao-dados', title: '4. Conservação dos Dados' },
  { id: 'partilha-terceiros', title: '5. Partilha com Terceiros' },
  { id: 'direitos-titular', title: '6. Os Seus Direitos (RGPD)' },
  { id: 'seguranca-encriptacao', title: '7. Segurança e Encriptação' },
  { id: 'cookies-tecnologias', title: '8. Cookies & Analytics' },
  { id: 'alteracoes-politica', title: '9. Alterações à Política' },
  { id: 'contacto-privacidade', title: '10. Contactos & Apoio' },
];

export default function PrivacidadeClient() {
  useScrollReveal();
  const [activeSection, setActiveSection] = useState('enquadramento');
  const [searchQuery, setSearchQuery] = useState('');

  // Active section tracker on scroll
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
    document.body.classList.add('privacy-body-page');
    return () => document.body.classList.remove('privacy-body-page');
  }, []);

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="privacy-noise-overlay"></div>

      <main className="privacy-page">
        {/* HERO SECTION */}
        <section className="privacy-hero">
          <div className="container">
            <div className="privacy-hero-content">
              <h1>
                Política de <span className="gradient-text">Privacidade</span>
              </h1>
              <p className="privacy-hero-subtitle">
                Na ENimble, a transparência e a proteção dos seus dados são fundamentais.
                Conheça em detalhe como recolhemos, tratamos, guardamos e protegemos as suas informações pessoais.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN BODY CONTAINER */}
        <section className="privacy-body-section">
          <div className="container privacy-layout">
            {/* SIDEBAR NAVIGATION / TOC */}
            <aside className="privacy-sidebar">
              <div className="sidebar-sticky">
                <div className="privacy-search-box">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Pesquisar nesta política..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Pesquisar política de privacidade"
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

                <div className="privacy-toc-card">
                  <h3 className="toc-title">Índice da Política</h3>
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
            <div className="privacy-content">

              {/* SECTION 1 */}
              <article id="enquadramento" className="privacy-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">01</span>
                  <h2>Quem Somos & Enquadramento</h2>
                </div>
                <p>
                  A <strong>ENimble</strong> é uma agência portuguesa especializada em serviços de Marketing Digital, Web Design,
                  Tráfego Pago, Automação, Branding e Gestão de Redes Sociais, com o site oficial acessível em{' '}
                  <a href="https://enimble.pt" target="_blank" rel="noopener noreferrer">https://enimble.pt</a>.
                </p>
                <p>
                  Assumimos o compromisso público e inegociável de respeitar a privacidade de todos os visitantes, clientes e parceiros.
                  A presente Política de Privacidade explica detalhadamente de que forma recolhemos, utilizamos, armazenamos e protegemos os seus dados
                  pessoais no estrito cumprimento do <strong>Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679)</strong> e da
                  legislação nacional conexa (Lei n.º 58/2019).
                </p>
                <div className="info-box-highlight">
                  <strong>Entidade Responsável pelo Tratamento:</strong> ENimble Portugal
                  <br />
                  <strong>Email de Privacidade:</strong>{' '}
                  <a href="mailto:privacidade@enimble.pt">privacidade@enimble.pt</a>
                </div>
              </article>

              {/* SECTION 2 */}
              <article id="dados-recolhidos" className="privacy-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">02</span>
                  <h2>Dados Pessoais Recolhidos</h2>
                </div>
                <p>
                  A ENimble limita a recolha de dados pessoais ao estritamente necessário para o fornecimento dos seus serviços e prestação de esclarecimentos.
                  Estes dados podem ser obtidos das seguintes formas:
                </p>

                <div className="data-type-grid">
                  <div className="data-type-card">
                    <div className="type-badge">Dados Fornecidos Ativamente</div>
                    <ul>
                      <li><strong>Identificação:</strong> Nome completo.</li>
                      <li><strong>Contactos:</strong> Endereço de e-mail e número de telefone.</li>
                      <li><strong>Profissional:</strong> Nome da empresa, cargo e website.</li>
                      <li><strong>Mensagens:</strong> Informações detalhadas introduzidas nos formulários de contacto ou agendamento de reuniões.</li>
                    </ul>
                  </div>

                  <div className="data-type-card">
                    <div className="type-badge">Dados Recolhidos Automaticamente</div>
                    <ul>
                      <li><strong>Dados Técnicos:</strong> Endereço IP (anonimizado), tipo de dispositivo e navegador.</li>
                      <li><strong>Navegação:</strong> Páginas visitadas, tempo de permanência, origem da visita e cliques.</li>
                      <li><strong>Cookies:</strong> Informações analíticas e de desempenho recolhidas através do Google Analytics (G-RFPP2HGL4F).</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="finalidade-base-legal" className="privacy-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">03</span>
                  <h2>Finalidades e Base Legal do Tratamento</h2>
                </div>
                <p>
                  Todos os dados recolhidos pela ENimble destinam-se unicamente a finalidades legítimas e transparentes:
                </p>

                <div className="table-responsive">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>Finalidade do Tratamento</th>
                        <th>Base Legal (RGPD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Resposta a pedidos de contacto e orçamentos</strong></td>
                        <td>Diligências pré-contratuais a pedido do utilizador (Art. 6.º, n.º 1, al. b)</td>
                      </tr>
                      <tr>
                        <td><strong>Prestação de serviços contratados (Web design, tráfego, automação)</strong></td>
                        <td>Execução de contrato (Art. 6.º, n.º 1, al. b)</td>
                      </tr>
                      <tr>
                        <td><strong>Envio de comunicações de marketing e newsletters</strong></td>
                        <td>Consentimento prévio e livre (Art. 6.º, n.º 1, al. a)</td>
                      </tr>
                      <tr>
                        <td><strong>Análise de desempenho e otimização do website</strong></td>
                        <td>Interesse legítimo em melhorar os serviços (Art. 6.º, n.º 1, al. f)</td>
                      </tr>
                      <tr>
                        <td><strong>Cumprimento de obrigações legais e fiscais</strong></td>
                        <td>Obrigação jurídica aplicável (Art. 6.º, n.º 1, al. c)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="conservacao-dados" className="privacy-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">04</span>
                  <h2>Conservação dos Dados (Retenção)</h2>
                </div>
                <p>
                  A ENimble conserva os seus dados pessoais apenas durante o período estritamente necessário para cumprir as finalidades para as quais foram recolhidos:
                </p>
                <ul className="styled-list">
                  <li>
                    <strong>Pedidos de informação e contacto:</strong> Conservados durante <strong>24 meses</strong> após a última interação, caso não se concretize uma relação contratual.
                  </li>
                  <li>
                    <strong>Dados de Clientes e Contratos:</strong> Mantidos durante a vigência do contrato e por um período obrigatório de <strong>10 anos</strong> para cumprimento de obrigações legais e fiscais em Portugal.
                  </li>
                  <li>
                    <strong>Dados de Marketing / Newsletter:</strong> Conservados até que retire o seu consentimento através da hiperligação de cancelamento (<em>unsubscribe</em>) ou pedido direto.
                  </li>
                </ul>
              </article>

              {/* SECTION 5 */}
              <article id="partilha-terceiros" className="privacy-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">05</span>
                  <h2>Partilha com Terceiros</h2>
                </div>
                <p>
                  <strong>Garantia ENimble:</strong> NUNCA vendemos, alugamos ou comercializamos os seus dados pessoais a terceiros para fins publicitários ou de prospeção comercial.
                </p>
                <p>
                  Os dados pessoais poderão ser partilhados apenas com prestadores de serviços de confiança (subencarregados) estritamente necessários ao funcionamento do nosso ecossistema digital, garantindo contratualmente o cumprimento rigoroso do RGPD:
                </p>

                <div className="partners-grid">
                  <div className="partner-box">
                    <span className="partner-icon">🌐</span>
                    <h4>Alojamento Web & Infraestrutura</h4>
                    <p>Servidores seguros com encriptação e proteção em solo europeu.</p>
                  </div>
                  <div className="partner-box">
                    <span className="partner-icon">📊</span>
                    <h4>Google Analytics</h4>
                    <p>Métricas de utilização e tráfego anonimizadas.</p>
                  </div>
                  <div className="partner-box">
                    <span className="partner-icon">✉️</span>
                    <h4>Plataformas de Emailing (Resend)</h4>
                    <p>Processamento seguro de emails transacionais e pedidos de formulário.</p>
                  </div>
                </div>
              </article>

              {/* SECTION 6 */}
              <article id="direitos-titular" className="privacy-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">06</span>
                  <h2>Os Seus Direitos enquanto Titular dos Dados</h2>
                </div>
                <p>
                  Ao abrigo do Regulamento Geral sobre a Proteção de Dados, enquanto titular dos dados, goza dos seguintes direitos fundamentais:
                </p>

                <div className="rights-grid">
                  <div className="right-card">
                    <div className="right-num">01</div>
                    <h4>Direito de Acesso</h4>
                    <p>Saber se os seus dados estão a ser tratados e obter cópia completa das informações retidas.</p>
                  </div>
                  <div className="right-card">
                    <div className="right-num">02</div>
                    <h4>Direito de Retificação</h4>
                    <p>Solicitar a correção imediata de dados incorretos, desatualizados ou incompletos.</p>
                  </div>
                  <div className="right-card">
                    <div className="right-num">03</div>
                    <h4>Direito ao Apagamento</h4>
                    <p>Exigir a eliminação permanente dos seus dados pessoais ("direito a ser esquecido").</p>
                  </div>
                  <div className="right-card">
                    <div className="right-num">04</div>
                    <h4>Direito de Oposição</h4>
                    <p>Opor-se a qualquer momento ao tratamento dos seus dados para efeitos de marketing direto.</p>
                  </div>
                  <div className="right-card">
                    <div className="right-num">05</div>
                    <h4>Direito à Portabilidade</h4>
                    <p>Receber os seus dados num formato estruturado, de uso corrente e de leitura automática.</p>
                  </div>
                  <div className="right-card">
                    <div className="right-num">06</div>
                    <h4>Direito de Reclamação</h4>
                    <p>Apresentar reclamação junto da autoridade nacional (CNPD - Comissão Nacional de Proteção de Dados em cnpd.pt).</p>
                  </div>
                </div>
              </article>

              {/* SECTION 7 */}
              <article id="seguranca-encriptacao" className="privacy-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">07</span>
                  <h2>Segurança da Informação</h2>
                </div>
                <p>
                  A ENimble implementa medidas técnicas e organizativas rigorosas para proteger os seus dados pessoais contra destruição acidental ou ilícita,
                  perda acidental, alteração, difusão ou acesso não autorizado.
                </p>
                <div className="security-features">
                  <div className="sec-feature">
                    <span className="sec-icon">🔒</span>
                    <div>
                      <strong>Encriptação SSL / TLS (HTTPS)</strong>
                      <p>Toda a comunicação entre o seu navegador e os nossos servidores é cifrada.</p>
                    </div>
                  </div>
                  <div className="sec-feature">
                    <span className="sec-icon">🔑</span>
                    <div>
                      <strong>Acesso Restrito & Autenticação</strong>
                      <p>Apenas colaboradores autorizados têm acesso estrito aos dados necessários para as suas funções.</p>
                    </div>
                  </div>
                  <div className="sec-feature">
                    <span className="sec-icon">🛡️</span>
                    <div>
                      <strong>Monitorização e Defesa Contínua</strong>
                      <p>Sistemas protegidos por firewalls atualizadas e varrimentos regulares de segurança.</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 8 */}
              <article id="cookies-tecnologias" className="privacy-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">08</span>
                  <h2>Cookies e Tecnologias de Rastreio</h2>
                </div>
                <p>
                  O website da ENimble utiliza cookies para assegurar o correto funcionamento da plataforma, personalizar a experiência de navegação e analisar o tráfego de forma agregada.
                </p>
                <p>
                  Pode consultar, gerir ou alterar as suas preferências de cookies a qualquer momento através das definições do seu navegador web (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
                </p>
              </article>

              {/* SECTION 9 */}
              <article id="alteracoes-politica" className="privacy-card reveal">
                <div className="card-header-flex">
                  <span className="section-number">09</span>
                  <h2>Alterações a esta Política de Privacidade</h2>
                </div>
                <p>
                  A ENimble reserva-se o direito de atualizar ou restruturar a presente Política de Privacidade sempre que necessário para refletir alterações legislativas ou melhorias nos nossos processos.
                  Recomendamos a consulta periódica desta página. As alterações entram em vigor na data da sua publicação.
                </p>
              </article>

              {/* SECTION 10 */}
              <article id="contacto-privacidade" className="privacy-card privacy-card-cta reveal">
                <div className="cta-content">
                  <span className="cta-badge">Exerça os seus Direitos</span>
                  <h2>Fale com a Equipa ENimble</h2>
                  <p>
                    Para exercer os seus direitos de acesso, retificação, eliminação ou esclarecer qualquer dúvida sobre a nossa gestão de dados pessoais:
                  </p>
                  <div className="cta-actions">
                    <Link href="/contactos" className="btn btn-outline-dark">
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
