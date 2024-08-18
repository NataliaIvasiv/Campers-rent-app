import css from './CamperItem.module.css';
const camperItem = ({
  name,
  id,
  price,
  rating,
  location,
  adults,
  engine,
  transmission,
  details,
  gallery,
  reviews,
}) => {
  return (
    <div className={css.camperItemContainer}>
      <div className={css.galleryCont}>
        <img className={css.galleryImg} src={gallery[0]} alt="camperImage" />
      </div>
      <div className={css.sideCont}>
        <div className={css.sideTopCont}>
          <h1 className={css.name}>{name}</h1>
          <h1 className={css.name}>
            {price}
            <svg className={css.iconHeart} width="24" height="24">
              <use href="/src/assets/symbol-defs.svg#icon-heart"></use>
            </svg>
          </h1>
        </div>
        <div className={css.ratingLocation}>
          <div className={css.ratingReview}>
            <svg className={css.iconStar} width="18" height="18">
              <use href="/src/assets/symbol-defs.svg#icon-star"></use>
            </svg>
            {rating}
            {reviews}reviews
          </div>
          <div className={css.location}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-map-pin"></use>
            </svg>
            {location}
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
            {adults} adults
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-automatic"></use>
            </svg>
            {transmission}
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-petrol"></use>
            </svg>
            {engine}
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-kitchen"></use>
            </svg>
            {details.kitchen} kitchen
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-bed"></use>
            </svg>
            {details.beds}beds
          </li>
          <li className={css.detailsItem}>
            <svg className={css.iconLocation} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-Vertical-container-2"></use>
            </svg>
            {details.airConditioner}AC
          </li>
        </ul>
        <button className={css.showMoreBtn}>Show more</button>
      </div>
    </div>
  );
};
export default camperItem;
