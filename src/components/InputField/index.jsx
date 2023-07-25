import PropTypes from 'prop-types';

import './style.css'

const InputField = ({ label, name, value, onChange, type = 'text', required = false }) => {
  return (
    <div className="input-field-container">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field"
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool
}

export default InputField
