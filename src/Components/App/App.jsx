import React from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends React.Component {
    state = {
        contacts: [],
        filter: '',
    }

    addContact = data => {
        const contact = {
            id: shortid.generate(),
            name: data.name,
            number: data.number,
        }
        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts]
        }))
    }
    changeFilter = evt => {
        this.setState({filter: evt.currentTarget.value})
    }
    getFiltredContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter));
    }

    render() {
        const { filter} = this.state;
        
        const filtredNames = this.getFiltredContacts();
        
        return (    
            <>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact}/>
                <h2>Contacts</h2>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList value={filtredNames}/>
            </>
        )
    }
}
export default App;