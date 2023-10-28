import { ButtonWrapper, DeleteButton, Item, List } from './ContactsList.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterValue,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContacts } from 'redux/operations/operations';
import {
  failedNotification,
  successfullNotification,
} from 'services/notifications';

export default function ContactsList() {
  const [contactsIdsToDelete, setContactIdsToDelete] = useState([]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const loading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleDeleteContacts = contactsToDelete => {
    dispatch(deleteContacts(contactsToDelete))
      .unwrap()
      .then(() =>
        successfullNotification(
          `You have deleted ${contactsToDelete.length} contact(s)!`
        )
      )
      .catch(error =>
        failedNotification(
          `Smth went wrong, you didn't delete the contact(s): ${error.message} 😭`
        )
      );
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
        {contacts !== null &&
          contacts
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
                  <p>{`${contact.name}: ${contact.phone} ${
                    contact.type ? `*${contact.type}*` : ''
                  }`}</p>
                </Item>
              </label>
            ))}
      </List>

      {!loading && (
        <ButtonWrapper>
          <DeleteButton
            type="button"
            onClick={() => {
              if (contactsIdsToDelete.length === 0) {
                failedNotification('Choose contact(s) to delete');
              } else {
                handleDeleteContacts(contactsIdsToDelete);
                reset();
              }
            }}
          >
            <FaTrashAlt className="icon" />
          </DeleteButton>
        </ButtonWrapper>
      )}
    </>
  );
}
