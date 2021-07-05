import React from 'react';
import shortid from 'shortid';

class App extends React.Component {
    state = {
        contacts: [],
        name: ''
    }

    nameInputId = shortid.generate();

    addContact = () => {
        const contact = {
            id: shortid.generate(),
            name: this.state.name,
        }

        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts]
        }))
    }

    handleNameChange = evt => {
        this.setState({ name: evt.currentTarget.value });
    }
    
    handleSubmit = evt => {
        evt.preventDefault();
        this.addContact();
    }
    render() {
        const { contacts } = this.state;

        return (
            <>
                <h1>Phonebook</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.nameInputId}>Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            onChange={this.handleNameChange}
                            id={this.nameInputId}
                            required
                        />
                    </label>
                    <button type='submit'>Add contact</button>
                </form>
                <h2>Contacts</h2>
                <ul>
                    {contacts.map(({id, name}) => {
                        return (
                            <li key={id}>{name}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default App;