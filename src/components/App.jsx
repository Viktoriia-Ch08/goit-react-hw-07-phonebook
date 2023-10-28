import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { Container, Headline, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations/operations';
import { useEffect, CSSProperties } from 'react';
import { ClipLoader } from 'react-spinners';
import { failedNotification } from 'services/notifications';

export default function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'black',
  };

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(error =>
        failedNotification(
          `😭 Sorry, smth wrong with your URL: ${error.message}`
        )
      );
  }, [dispatch]);

  return (
    <Container>
      <Headline>Phonebook</Headline>
      <ContactForm />
      {contacts.length !== 0 && (
        <>
          <Title>Contacts</Title>
          <Filter />
          <ContactsList />
        </>
      )}
      {contacts.length === 0 && !loading && (
        <Title>There are no contacts</Title>
      )}
      <ClipLoader
        color={'black'}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
}
