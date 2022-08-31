import { NavLink } from 'react-router-dom';
import { projectsData } from '../data/data';
import './ProjectsList.css';

export const ProjectsList = () => {
  document.title = 'skullzado - Projects List';

  return (
    <div className="projects">
      <p className="projects__note">
        <span></span>Practice Projects
      </p>
      <div className="projects__container">
        {projectsData.map(
          ({
            name,
            description: { concept, library },
            route,
            isPractice,
            linkRoute,
          }) => (
            <div
              key={name}
              className={`projects__card ${
                isPractice ? 'project--practice' : ''
              }`}
            >
              <div className="projects__card-header">
                <h3 className="projects__title">{name}</h3>
              </div>
              <div className="projects__card-contents">
                <div className="projects__libraries">
                  <p className="projects__library-title">libraries used</p>
                  {library.map((lib) => (
                    <p key={lib} className="projects__library">
                      {lib}
                    </p>
                  ))}
                </div>
                <div className="projects__concepts">
                  {concept.map((c) => (
                    <p key={c} className="projects__concept">
                      {c}
                    </p>
                  ))}
                </div>
              </div>
              <div className="projects__card-footer">
                <NavLink to={route} className="projects__link">
                  view project
                </NavLink>
                <a
                  href={linkRoute}
                  className="projects__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  view source
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
