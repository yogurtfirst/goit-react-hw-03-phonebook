import PropTypes from 'prop-types';
import { Contact, Btn } from './ContactItem.styled';

const ContactItem = ({ name, id, number, deleteContact }) => (
    <Contact name="contact">
        {name}: {number}
        <Btn type="button" onClick={() => deleteContact(id)} id={id}>Delete</Btn>
    </Contact>
);

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;