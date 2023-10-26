import { ButtonWrapper, DeleteButton, Item, List } from './ContactsList.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { filterValue, getContacts } from 'redux/selectors';

export default function ContactsList() {
  const [contactsIdsToDelete, setContactIdsToDelete] = useState([]);
  const contacts = useSelector(getContacts);
  const filter = useSelector(filterValue);

  const dispatch = useDispatch();

  const handleDeleteContacts = contactsToDelete => {
    dispatch(deleteContacts(contactsToDelete));
  };

  const handleCheckboxStatus = selectedContactId => {
    setContactIdsToDelete(
      contactsIdsToDelete.includes(selectedContactId)
        ? contactsIdsToDelete.filter(id => id !== selectedContactId)
        : [...contactsIdsToDelete, selectedContactId]
    );
  };

  const reset = () => setContactIdsToDelete([]);

  return (
    <>
      <List>
        {contacts
          .filter(
            contact =>
              filter === '' ||
              contact.name.toLowerCase().includes(filter.toLowerCase().trim())
          )
          .map(contact => (
            <label key={contact.id}>
              <Item>
                <input
                  type="checkbox"
                  name="contactToDelete"
                  checked={contactsIdsToDelete.includes(contact.id)}
                  onChange={() => handleCheckboxStatus(contact.id)}
                />
                <p>{`${contact.name}: ${contact.number} ${
                  contact.type ? `*${contact.type}*` : ''
                }`}</p>
              </Item>
            </label>
          ))}
      </List>

      <ButtonWrapper>
        <DeleteButton
          type="button"
          onClick={() => {
            if (contactsIdsToDelete.length === 0)
              alert('Choose contact(s) to delete');
            else {
              handleDeleteContacts(contactsIdsToDelete);
              reset();
            }
          }}
        >
          <FaTrashAlt className="icon" />
        </DeleteButton>
      </ButtonWrapper>
    </>
  );
}
