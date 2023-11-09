import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import ContactForm from '../components/contactForm/ContactForm';
import { ContactList } from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subTitle}>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && error && <b>Something went wrong...</b>}
      <ContactList />
    </div>
  );
};

export default App;
