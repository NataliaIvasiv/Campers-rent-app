import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import Favourites from '../Favourites/Favourites';

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
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
};
export default HomePage;
