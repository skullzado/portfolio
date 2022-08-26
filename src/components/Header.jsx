import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../data/data';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">skullzado</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          {mainRoutes.map(({ name, route }) => (
            <li key={name} className="header__list-item">
              <NavLink
                to={route}
                className={({ isActive }) =>
                  isActive
                    ? `header__list-link header--active`
                    : 'header__list-link'
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
