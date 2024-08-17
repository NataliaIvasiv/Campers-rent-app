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
  description,
  details,
  gallery,
}) => {
  return (
    <div className={css.camperItemContainer}>
      <div className={css.galleryCont}>{gallery[0]}</div>
      <div className={css.sideCont}>
        <div className={css.sideTopCont}>
          <h2>{name}</h2>
          {price}
        </div>
        <p className={css.ratingLocation}>
          {rating}
          {location}
        </p>
        <p className={css.description}>{description}</p>
        <ul className={css.detailsBut}>
          <li className={css.detailsItem}>{adults}</li>
          <li className={css.detailsItem}>{transmission}</li>
          <li className={css.detailsItem}>{engine}</li>
          <li className={css.detailsItem}>{details.kitchen}</li>
          <li className={css.detailsItem}>{details.beds}</li>
          <li className={css.detailsItem}>{details.airConditioner}</li>
        </ul>
        <button className={css.LoadMoreBtn}>Load more</button>
      </div>
    </div>
  );
};
export default camperItem;
