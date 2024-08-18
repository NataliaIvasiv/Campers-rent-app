import css from './CamperList.module.css';
import CamperItem from '../CamperItem/CamperItem';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import { useDispatch } from 'react-redux';
import fetchCampers from '../../redux/campers/operations';
import { useEffect } from 'react';

const CamperList = () => {
  //const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const campers = useSelector(selectCampers);

  if (!campers || campers.length === 0) {
    return <p>No campers available</p>;
  }

  return (
    <ul className={css.camperList}>
      {campers.map(camper => (
        <li className={css.camperItem} key={camper._id}>
          <CamperItem
            id={camper._id}
            name={camper.name}
            price={camper.price}
            rating={camper.rating}
            //location={camper.location}
            adults={camper.adults}
            engine={camper.engine}
            transmission={camper.transmission}
            description={camper.description}
            details={camper.details}
            gallery={camper.gallery}
          />
        </li>
      ))}
    </ul>
  );
};
export default CamperList;
