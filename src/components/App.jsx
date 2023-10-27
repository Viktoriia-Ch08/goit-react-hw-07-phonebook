import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { Container, Headline, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations/operations';
import { useEffect, CSSProperties } from 'react';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

export default function App() {
  const contacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'black',
  };

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(resp => {
        toast.success(`We have found ${resp.length} contact!`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
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
