import {Component} from "react";
import {ContactForm} from "./ContactForm/ContactForm"
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  // contacts: [],
  filter: '',
  
  }
  
  addContacts = (newContact) => {
    console.log(newContact);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }]
    }))
  }

  onChange = newFilter => {
    this.setState({
      filter: newFilter,
    })
  }

render() {
    return (<div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={this.addContacts } />
      
      <h2>Contacts</h2>
      <Filter filter = {this.state.filter} onChahgeFilter = {this.onChange} />
      <ContactList contacts={this.state.contacts} />
</div>
    
      
    
  );
}
  
};
