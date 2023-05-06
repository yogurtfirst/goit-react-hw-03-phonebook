import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    addContact = contact => {
        this.setState(previous => ({
            contacts: [...previous.contacts, { ...contact, id: nanoid() }],
        }));
    };

    deleteContact = id => {
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(contact => contact.id !== id),
        }));
    };

    onChange = event => { this.setState({ [event.target.name]: event.target.value }) };

    getFilterNormalize = () => this.state.filter.toLowerCase();

    getFilteredContacts = () => this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.getFilterNormalize()));

    render() {
        const { contacts, filter } = this.state;
        return (
            <div style={{ margin: 10 }}>
                <h1>Phonebook</h1>
                <ContactForm contacts={contacts} onSubmit={this.addContact} onChange={this.onChange} />
                <h2 style={{ fontSize: 32 }}>Contacts</h2>
                <Filter filter={filter} onChange={this.onChange} />
                <ContactList contacts={contacts} filteredList={this.getFilteredContacts()} deleteContact={this.deleteContact} />
            </div>
        );
    }
}