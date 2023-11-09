import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <>
      <p className={css.contactText}>
        {contact.name}: {contact.phone}
      </p>
      <button className={css.contactButton} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
