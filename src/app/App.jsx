import ContactForm from '../components/contactForm/ContactForm';
import { ContactList } from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
