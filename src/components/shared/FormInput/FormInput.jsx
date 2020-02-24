import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = ({
    type,
    name,
    placeholder,
    size,
    onChange,
    className,
    value,
    ariaRequired,
    label,
    error,
    children,
    ...props
}) => {
    return (
        <div className={`form_${className}`}>
            <label htmlFor={name} className={`${className}_label`}>{label}</label>
            <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            size={size}
            onChange={onChange}
            value={value}
            className={className}
            aria-required={ariaRequired}
            />
            { error && <p className={error ? 'error': ''}>{ error }</p>}
        </div>
    )
}

FormInput.defaultProps = {
    type: "text",
    className: ""
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    size: PropTypes.number,
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    ariaRequired: PropTypes.bool
}

export default FormInput;