import { Input } from 'components/ContactForm/ContactForm.styled';
import { FilterContainer, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/selectors';
import { filterName } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(filterValue);
  const dispatch = useDispatch();

  const filterInputNames = event => {
    dispatch(filterName(event.currentTarget.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contact name:
        <Input
          type="text"
          name="search"
          value={filter}
          onChange={filterInputNames}
          placeholder="Adam Smith"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
