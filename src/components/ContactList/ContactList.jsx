import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <p>Request in progress...</p>}
      {error && <p>An error occurred!</p>}
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} phone={phone} />
        ))}
      </List>
    </>
  );
};
