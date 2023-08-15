import logo from './logo.svg';
import './App.css';

const ContactList = (props) => {
  const people = props.contacts;

  return (
    <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  );
};

function App() {
  return (
    <div className="App">
      <ContactList contacts={[{ name: "Kevin"}, { name: "Ebin"}, { name: "Tyler"}]}/>
      <ContactList contacts={[{ name: "Sven"}, { name: "Anthony"}, { name: "Karen"}]}/>
      <ContactList contacts={[{ name: "Simon"}, { name: "Tony"}, { name: "Sara"}]}/>
    </div>
  );
}

export default App;
