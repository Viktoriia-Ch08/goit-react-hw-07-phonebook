import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { Container, Headline, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations/operations';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Headline>Phonebook</Headline>
      <ContactForm />
      {contacts.length !== 0 ? (
        <>
          <Title>Contacts</Title>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <Title>There are no contacts</Title>
      )}
    </Container>
  );
}
