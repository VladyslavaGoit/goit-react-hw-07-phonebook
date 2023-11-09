import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/operations';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.contactList}>
          {visibleContacts.map(contact => (
            <li className={css.contactItem} key={contact.id}>
              <p className={css.contactText}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={css.contactButton}
                onClick={() => dispatch(deleteContacts(contact.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
