import { useState } from 'react';
import { FormButton, FormElement, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
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
    const data = { name, number };
    contacts.some(element => element.name === data.name)
      ? toast.error('This contact has already exists', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
      : dispatch(addContact(data))
          .unwrap()
          .then(() => {
            toast.success('You have added the contact!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
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
      <FormButton type="submit">Add contact</FormButton>
    </FormElement>
  );
}
