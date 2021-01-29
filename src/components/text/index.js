import React from 'react';
import PropTypes from 'prop-types';
import './text.css';

export const Text = ({ primary, size, label, ...props }) => {
  const mode = primary
    ? 'storybook-text--primary'
    : 'storybook-text--secondary';
  return (
    <p
      className={['storybook-text', `storybook-text--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </p>
  );
};

Text.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
};

Text.defaultProps = {
  primary: false,
  size: 'medium',
  label: 'No set label',
};
