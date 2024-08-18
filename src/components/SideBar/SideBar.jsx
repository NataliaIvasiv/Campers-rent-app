import Filter from '../Filter/Filter';
import Location from '../Location/Location';
import css from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={css.sideBarCont}>
      <Location />
      <Filter />
    </div>
  );
};

export default SideBar;
