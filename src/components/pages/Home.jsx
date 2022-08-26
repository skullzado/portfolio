import { Link } from 'react-router-dom';
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
        <Link to="/download" download="filename" className="btn btn__cta">
          Download CV
        </Link>
      </section>
    </div>
  );
};
