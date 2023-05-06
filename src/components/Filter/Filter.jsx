import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onChange }) => (
    <div>
        <Label htmlFor="filter">Find contacts by name</Label>
        <Input
            type = "text"
            name = "filter"
            id = "filter"
            value = {filter}
            onChange = {onChange}
        />
    </div>
);

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default Filter;