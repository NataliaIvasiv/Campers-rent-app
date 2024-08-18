import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const HomePage = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.HomePageContainer}>
      <h1 className={css.welcomeText}>
        Welcome to <span className={css.homeLogo}>Campers</span>!
      </h1>
      <nav className={css.nav}>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="/favourites" className={buildLinkClass}>
          Favourites
        </NavLink>
      </nav>
    </div>
  );
};
export default HomePage;
