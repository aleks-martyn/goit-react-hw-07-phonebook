import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, Text, Marker } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Marker></Marker>
      <Text>
        {name}: <span>{phone}</span>
      </Text>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
