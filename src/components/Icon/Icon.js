import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  icon,
  ...props
}) => (
  <img
    alt="icon"
    src={icon}
    {...props}
  />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
