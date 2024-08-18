import css from './CamperItem.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { selectFavorites } from '../../redux/favourites/selectors';
import { addFavorites, deleteFavorites } from '../../redux/favourites/slice';

const CamperItem = camper => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavorites);
  console.log(favourites);

  const isFavouriteFunction = camper => {
    const isCamperFavourite = favourites.some(
      favourites => favourites._id === camper._id
    );
    console.log(isCamperFavourite);
    if (!isCamperFavourite) {
      console.log('added');
      dispatch(addFavorites(camper));
    } else {
      console.log('removed');
      dispatch(deleteFavorites(camper._id));
    }
  };

  return (
    <div className={css.camperItemContainer}>
      <div className={css.galleryCont}>
        <img
          className={css.galleryImg}
          src={camper.gallery[0]}
          alt="camperImage"
        />
      </div>
      <div className={css.sideCont}>
        <div className={css.sideTopCont}>
          <h1 className={css.name}>{camper.name}</h1>
          <h1 className={css.name}>
            {camper.price}
            <button
              className={css.heartBtn}
              onClick={() => isFavouriteFunction(camper)}
            >
              {favourites.some(
                favouriteCamper => favouriteCamper._id === camper._id
              ) ? (
                <svg className={css.iconHeart} width="24" height="24">
                  <use href="/src/assets/symbol-defs.svg#icon-heart"></use>
                </svg>
              ) : (
                <svg className={css.iconHeartRed} width="24" height="24">
                  <use href="/src/assets/symbol-defs.svg#icon-heart-red"></use>
                </svg>
              )}
            </button>
          </h1>
        </div>
        <div className={css.ratingLocation}>
          <div className={css.ratingReview}>
            <svg className={css.iconStar} width="18" height="18">
              <use href="/src/assets/symbol-defs.svg#icon-star"></use>
            </svg>
            {camper.rating}
            {camper.reviews}reviews
          </div>
          <div className={css.location}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-map-pin"></use>
            </svg>
          </div>
        </div>
        <p className={css.description}>
          The pictures shown here are example vehicles of the respective.
        </p>
        <ul className={css.detailsBut}>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-users"></use>
            </svg>
            {camper.adults} adults
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-automatic"></use>
            </svg>
            {camper.transmission}
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-petrol"></use>
            </svg>
            {camper.engine}
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-kitchen"></use>
            </svg>
            {camper.details.kitchen} kitchen
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-bed"></use>
            </svg>
            {camper.details.beds}beds
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-Vertical-container-2"></use>
            </svg>
            {camper.details.airConditioner}AC
          </li>
        </ul>
        <button className={css.showMoreBtn}>Show more</button>
      </div>
    </div>
  );
};
export default CamperItem;
