import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

const ContactList = ({ filteredList, deleteContact }) => (
    <Contacts>
        {filteredList.map(({ id, name, number }) => (
            <ContactItem
                name = {name}
                key = {id}
                id = {id}
                number = {number}
                deleteContact = {deleteContact}
            />
        ))}
    </Contacts>
);

ContactList.propTypes = {
    filteredList: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
};

export default ContactList;