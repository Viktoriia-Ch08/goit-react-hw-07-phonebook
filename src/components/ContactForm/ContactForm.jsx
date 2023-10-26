import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormButton,
  FormElement,
  Input,
  Label,
  RadioLabel,
  RadioWrapper,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [type, setType] = useState('friend');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmitButton = e => {
    e.preventDefault();
    const data = { name, number, type, id: nanoid() };
    contacts.some(element => element.name === data.name)
      ? alert('This contact has already exists')
      : dispatch(addContact(data));
    reset();
  };

  const handleRadioButtons = event => {
    const { value } = event.target;
    switch (value) {
      case 'friend':
        setType(value);
        break;
      case 'business':
        setType(value);
        break;
      case 'family':
        setType(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
    setType('friend');
  };

  return (
    <FormElement onSubmit={handleSubmitButton}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Adam Smith"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          placeholder="+380(88)-233-22-22"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <RadioWrapper>
        <RadioLabel>
          <input
            type="radio"
            name="type"
            value="business"
            onChange={handleRadioButtons}
            checked={type === 'business'}
          />
          buisness
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            name="type"
            value="friend"
            onChange={handleRadioButtons}
            checked={type === 'friend'}
          />
          friend
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            name="type"
            value="family"
            onChange={handleRadioButtons}
            checked={type === 'family'}
          />
          family
        </RadioLabel>
      </RadioWrapper>
      <FormButton type="submit">Add contact</FormButton>
    </FormElement>
  );
}
