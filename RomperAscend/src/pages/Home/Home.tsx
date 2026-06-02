import Navbar from '../../components/Navbar/Navbar.tsx';
import branding from '../../assets/featured/branding.png';
import instagram from '../../assets/featured/instagram.png';
import thumbnail from '../../assets/featured/thumbnail.png';
import automotive from '../../assets/featured/automotive.png';
import './Home.css';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="home">

        {/* HERO */}
        <section className="hero">

          <div className="hero-content">

            <span className="hero-tag">
              Design • Marketing • Estratégia
            </span>

            <h1>
              Romper padrões.
              <br />
              Ascender com estratégia.
            </h1>

            <p>
              Design, marketing e criatividade para marcas
              que querem crescer com propósito,
              clareza e performance.
            </p>

            <div className="hero-buttons">

              <a
                href="https://wa.me/5567998887742"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                Solicitar orçamento
              </a>

              <a
                href="/portfolio"
                className="secondary-btn"
              >
                Ver projetos
              </a>

            </div>

          </div>

        </section>

        {/* SOBRE */}
        <section className="about-section">

          <div className="about-card">

            <span className="section-label">
              SOBRE A ROMPER ASCEND
            </span>

            <h2>
              Crescer não é confortável.
              <br />
              E nunca foi.
            </h2>

            <p className="about-text">
              A Romper Ascend nasce da convicção de que
              todo crescimento real começa com confronto:
              com números, decisões e verdades que não podem
              mais ser ignoradas.
            </p>

            <div className="about-grid">

              <div className="about-item">
                <h3>Romper é decidir</h3>

                <p>
                  Sair do automático, abandonar o que não funciona
                  e assumir a realidade como ela é.
                </p>
              </div>

              <div className="about-item">
                <h3>Ascend é sustentar</h3>

                <p>
                  Crescimento sólido, estratégico
                  e sustentável.
                </p>
              </div>

              <div className="about-item">
                <h3>Criatividade com propósito</h3>

                <p>
                  Design, vídeo, marketing e estratégia
                  unidos para construir presença.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* SERVIÇOS */}
<section className="services-section">

  <div className="services-header">

    <span className="section-label">
      O QUE FAZEMOS
    </span>

    <h2>
      Criatividade,
      estratégia e
      performance.
    </h2>

    <p>
      Soluções visuais e estratégicas para marcas
      que querem crescer com clareza,
      autoridade e presença digital.
    </p>

  </div>

  <div className="services-grid">

    <div className="service-card">
      <span>01</span>
      <h3>Identidade Visual</h3>

      <p>
        Construção de marcas memoráveis,
        estratégicas e visualmente consistentes.
      </p>
    </div>

    <div className="service-card">
      <span>02</span>
      <h3>Carrosséis para Instagram</h3>

      <p>
        Conteúdo pensado para engajamento,
        retenção e posicionamento digital.
      </p>
    </div>

    <div className="service-card">
      <span>03</span>
      <h3>Thumbnails</h3>

      <p>
        Miniaturas visuais criadas para aumentar
        cliques e percepção profissional.
      </p>
    </div>

    <div className="service-card">
      <span>04</span>
      <h3>Vídeos de Produtos</h3>

      <p>
        Conteúdo visual pensado para fortalecer
        marcas e aumentar conversão.
      </p>
    </div>

    <div className="service-card">
      <span>05</span>
      <h3>Marketing Automotivo</h3>

      <p>
        Conteúdo criativo para concessionárias,
        oficinas e negócios automotivos.
      </p>
    </div>

    <div className="service-card featured-service">
      <h3>
        Crescimento não acontece por acaso.
      </h3>

      <p>
        Estratégia, design e execução
        trabalhando juntos.
      </p>

      <a
        href="https://wa.me/5567998887742"
        target="_blank"
        rel="noreferrer"
      >
        Solicitar orçamento
      </a>
    </div>

  </div>

</section>

{/* PROJETOS */}
<section className="projects-section">

  <div className="projects-header">

    <span className="section-label">
      PROJETOS EM DESTAQUE
    </span>

    <h2>
      Criamos marcas,
      presença e impacto.
    </h2>

    <p>
      Projetos desenvolvidos com estratégia,
      criatividade e posicionamento visual.
    </p>

  </div>

  <div className="projects-grid">

    <div className="project-card large">
      <img
        src={branding}
        alt="Identidade Visual"
      />

      <div className="project-overlay">
        <span>Branding</span>
        <h3>Identidade Visual</h3>
      </div>
    </div>

    <div className="project-card">
      <img
        src={instagram}
        alt="Instagram"
      />

      <div className="project-overlay">
        <span>Social Media</span>
        <h3>Carrosséis</h3>
      </div>
    </div>

    <div className="project-card">
      <img
        src={thumbnail}
        alt="Thumbnail"
      />

      <div className="project-overlay">
        <span>Youtube</span>
        <h3>Thumbnails</h3>
      </div>
    </div>

    <div className="project-card wide">
      <img
        src={automotive}
        alt="Marketing Automotivo"
      />

      <div className="project-overlay">
        <span>Automotivo</span>
        <h3>Marketing Criativo</h3>
      </div>
    </div>

  </div>

</section>

{/* CTA FINAL */}
<section className="cta-section">

  <div className="cta-content">

    <span>ROMPER ASCEND</span>

    <h2>
      Sua marca está pronta
      para crescer?
    </h2>

    <p>
      Design, estratégia e marketing
      para empresas que querem crescer
      com clareza e posicionamento.
    </p>

    <div className="cta-buttons">

      <a
        href="https://wa.me/5567998887742"
        target="_blank"
        rel="noreferrer"
        className="cta-primary"
      >
        Solicitar orçamento
      </a>

      <a
        href="https://www.instagram.com/romper.ascend?igsh=Njhka2F0c2trY2pz"
        target="_blank"
        rel="noreferrer"
        className="cta-secondary"
      >
        Instagram
      </a>

    </div>

  </div>

</section>

<footer className="footer">

  <div className="footer-content">

    <h3>RomperAscend</h3>

    <p>
      Romper padrões.
      Ascender com estratégia.
    </p>

    <div className="footer-links">
      <a href="/">Home</a>
      <a href="/sobre">Sobre</a>
      <a href="/portfolio">Portfólio</a>
      <a href="/servicos">Serviços</a>
      <a href="/contato">Contato</a>
    </div>

    <p className="footer-email">
      igor@romperascend.com
    </p>

  </div>

</footer>

      </main>
    </>
  );
}