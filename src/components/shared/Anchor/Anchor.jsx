import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({
    children,
    to,
    className,
    title,
    ariaLabel,
    ...props
}) => {
    return (
        <a
        href={to}
        className={className}
        title={title}
        {...props}
        >
         {children}
        </a>
    )
}

Anchor.defaultProps = {
    title: '',
    to: ''
};

Anchor.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    ariaLabel: PropTypes.string,
};

export default Anchor;