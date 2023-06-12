import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Item, Text, Marker } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Marker></Marker>
      <Text>
        {name}: <span>{number}</span>
      </Text>
      <button type="button">Delete</button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
