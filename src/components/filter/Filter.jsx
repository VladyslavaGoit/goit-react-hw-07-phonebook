import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </label>
  );
};

export default Filter;
