import {Component} from "react";
import {ContactForm} from "./ContactForm/ContactForm"
//import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
state = {
  contacts: [],
  filter: ''
}

render() {
    return (<div>
      <h1>Phonebook</h1>
    <ContactForm />
      
      <h2>Contacts</h2>
      <Filter  />
      <ContactList contacts={this.state.contacts} />
</div>
    
      
    
  );
}
  
};
