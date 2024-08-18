import css from './Favourites.module.css';
import { selectFavorites } from '../../redux/favourites/selectors';
import { useSelector } from 'react-redux';
import CamperItem from '../../components/CamperItem/CamperItem';

const Favourites = () => {
  const favourites = useSelector(selectFavorites);
  console.log(favourites);

  return (
    <div className={css.favouriteCont}>
      <h1 className={css.favouriteTitle}>Favourites</h1>
      <p>Best campers for you!</p>
      {favourites.length > 0 ? (
        <ul className={css.favoritesList}>
          {favourites.map(item => {
            return <CamperItem key={item._id} data={item} />;
          })}
        </ul>
      ) : (
        <p className={css.noCampersText}>
          Please, make your choise! add some campers to favourites!
        </p>
      )}
    </div>
  );
};
export default Favourites;
