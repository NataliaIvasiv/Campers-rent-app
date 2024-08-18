import css from './Location.module.css';
const Location = () => {
  return (
    <div className={css.locationCont}>
      <p className={css.locationLabel}>Location</p>
      <div className={css.inputWrapper}>
        <input
          className={css.locationInput}
          type="text"
          //value={filterValue}
          //onChange={handleChangeInput}
          placeholder="Kyiv, Ukraine"
        />
      </div>
    </div>
  );
};

export default Location;
