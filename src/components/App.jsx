import { Filter } from './Filter';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <h2>Contacts</h2>
      <Filter />
    </Container>
  );
};
