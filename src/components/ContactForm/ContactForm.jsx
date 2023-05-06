import PropTypes from 'prop-types';
import { Component } from 'react';
import { ContactWrapper, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    onChange = event => {this.setState({ [event.target.name]: event.target.value })};

    onAddToContactSubmit = event => {
        event.preventDefault();

        if (this.props.contacts.some(contact => contact.name === this.state.name))
            this.callAlert(this.state.name)
        else this.props.onSubmit(this.state);

        this.setState({
            name: '',
            number: '',
        });
    };

    callAlert = () => alert(`${this.state.name} is already in contacts`);

    render() {
        return (
            <ContactWrapper onSubmit={this.onAddToContactSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.onChange}
                    value={this.state.name}
                />
                <Label htmlFor="tel">Number</Label>
                <Input
                    type="tel"
                    id="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.onChange}
                    value={this.state.number}
                />
                <Button type="submit">Add to contact</Button>
            </ContactWrapper>
        );
    }
};

ContactForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
};

export default ContactForm;