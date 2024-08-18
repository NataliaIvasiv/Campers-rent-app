import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import fetchCampers from '../../redux/campers/operations';
import css from './Catalog.module.css';
import { useEffect } from 'react';
import CamperList from '../../components/CamperList/CamperList';
import SideBar from '../../components/SideBar/SideBar';

const Catalog = () => {
  const dispatch = useDispatch();
  //const isLoading = useSelector(selectIsLoading);
  //const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div className={css.catalogContainer}>
      <div className={css.sidebarCatalog}>
        <SideBar />
      </div>
      <div className={css.catalogList}>
        <CamperList />
      </div>
    </div>
  );
};

export default Catalog;
