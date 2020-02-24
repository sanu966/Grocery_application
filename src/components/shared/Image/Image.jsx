import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
    className,
    src,
    srcset,
    alt,
    sizes,
    ...other
}) => {
    return (
        <img
        className={className}
        src={src}
        alt={alt}
        {...other}
        />
    );
};

Image.defaultProps = {
    className: ''
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Image;

