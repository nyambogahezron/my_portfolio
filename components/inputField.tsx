import PropTypes from 'prop-types';

const InputField = ({ type, id, className, placeholder, colSize, value, onChange }) => {
    return (
        <div className={`form-item ${colSize}`}>
            <div className="form-group">
                <input type={type} id={id} className={`form-control ${className}`} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
        </div>
    );
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    colSize: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default InputField;