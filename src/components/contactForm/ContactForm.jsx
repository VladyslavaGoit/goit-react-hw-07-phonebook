import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = evt => {
    evt.preventDefault();
    const newName = evt.target.elements.name.value;
    const newNumber = evt.target.elements.number.value;
    const isSameContact = contacts.find(
      ({ name, number }) =>
        name.toLowerCase().trim() === newName.toLowerCase().trim() ||
        number === newNumber
    );
    if (isSameContact) {
      evt.target.reset();
      return alert(`${newName} is already in contacts`);
    }
    dispatch(
      addContacts({
        name: newName,
        number: newNumber,
      })
    );
    evt.target.reset();
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.contactLabel}>
        {' '}
        Name
        <input
          className={css.contactInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.contactLabel}>
        Number
        <input
          className={css.contactInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.contactButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
