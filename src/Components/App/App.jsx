import React from 'react';
import shortid from 'shortid';

class App extends React.Component {
    state = {
        contacts: [],
        name: '',
        number: '',
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    addContact = () => {
        const contact = {
            id: shortid.generate(),
            name: this.state.name,
            number: this.state.number,
        }

        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts]
        }))
    }
    
    // reset = () => {
    //     this.setState({ name: '' });
    // }
    handleNameChange = evt => {
        this.setState({ name: evt.currentTarget.value });
    }
    handleNumberChange = evt => {
        this.setState({ number: evt.currentTarget.value });
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
                    <label htmlFor={this.numberInputId}>Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            onChange={this.handleNumberChange}
                            id={this.numberInputId}
                            required
                            
                        />
                    </label>
                    <button type='submit' >Add contact</button>
                </form>
                <h2>Contacts</h2>
                <ul>
                    {contacts.map(({id, name, number}) => {
                        return (
                            <li key={id}>{name}: {number}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default App;