import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    children,
    className,
    ariaLabel,
    type,
    ...otherProps
}) => {
    return (
        <button
            aria-label={ariaLabel}
            className={className}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
    type: PropTypes.string,
};

export default Button;