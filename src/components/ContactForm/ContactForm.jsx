import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Form, FormLabel, Input } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const contact = {
      id: nanoid(),
      name: form.elements.name.value,
      phone: form.elements.phone.value,
    };

    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor={nameInputId}>
        <span>Name</span>
      </FormLabel>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameInputId}
      />

      <FormLabel htmlFor={phoneInputId}>
        <span>Phone</span>
      </FormLabel>
      <Input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={phoneInputId}
      />

      <button type="submit">Add contact</button>
    </Form>
  );
};
