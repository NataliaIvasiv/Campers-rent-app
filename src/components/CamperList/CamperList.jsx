import css from './CamperList.module.css';
import CamperItem from '../CamperItem/CamperItem';

const ContactList = () => {
  //const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.camperList}>
      {campers.map(camper => (
        <li className={css.camperItem} key={camper.id}>
          <CamperItem
            name={camper.name}
            price={camper.price}
            rating={camper.rating}
            location={camper.location}
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
export default ContactList;
