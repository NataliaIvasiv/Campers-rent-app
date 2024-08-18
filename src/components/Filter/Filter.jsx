import css from './Filter.module.css';
const Filter = () => {
  return (
    <div className={css.filtersContainer}>
      <h2 className={css.filterTitle}>Filters</h2>
      {/* vehicle equipment */}

      <div className={css.vehicleEquipment}>
        <p className={css.vehicleEqTitle}>Vehicle equipment</p>
        <ul className={css.equipmentList}>
          <li className={css.equipmentItem}>
            <svg className={css.iconFilter} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-streamline_hotel-air-conditioner"></use>
            </svg>
            AC
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.iconFilter} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-automatic"></use>
            </svg>
            Automatic
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.iconFilter} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-kitchen"></use>
            </svg>
            Kitchen
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.iconFilter} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-tv"></use>
            </svg>
            TV
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.iconFilter} width="16" height="16">
              <use href="/src/assets/symbol-defs.svg#icon-shower"></use>
            </svg>
            Shower/WC
          </li>
        </ul>
      </div>

      {/********  type */}
      <div className={css.vehicleEquipment}>
        <p className={css.vehicleEqTitle}>Vehicle type</p>
        <ul className={css.equipmentList}>
          <li className={css.equipmentItem}>
            <svg className={css.iconFilter} width="40" height="28">
              <use href="/src/assets/symbol-defs.svg#icon-van"></use>
            </svg>
            Van
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.iconFilter} width="40" height="28">
              <use href="/src/assets/symbol-defs.svg#icon-fully-integrated"></use>
            </svg>
            <div className={css.fullyIntegr}>Fully integrated</div>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.iconFilter} width="40" height="28">
              <use href="/src/assets/symbol-defs.svg#icon-alcon"></use>
            </svg>
            Alcon
          </li>
        </ul>
      </div>
      <button className={css.searchBtn}>Search</button>
    </div>
  );
};

export default Filter;
