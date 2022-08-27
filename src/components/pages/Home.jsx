import './Home.css';

export const Home = () => {
  document.title = 'skullzado';

  return (
    <div className="home">
      <section className="hero">
        <h2 className="hero__heading">Paul Calzado</h2>
        <p className="hero__copy">Frontend Web Developer</p>
      </section>
      <section className="cta">
        <a
          href="PaulCalzadoCV.pdf"
          download
          target="_blank"
          className="btn btn__cta"
        >
          Download CV
        </a>
      </section>
    </div>
  );
};
