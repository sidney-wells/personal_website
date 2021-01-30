import React from 'react';
import PropTypes from 'prop-types';
import './heading.css';

export const Heading = ({ primary, size, label, ...props }) => {
  const mode = primary
    ? 'storybook-heading--primary'
    : 'storybook-heading--secondary';

  return (
    <p
      className={['storybook-heading', `storybook-heading--${size}`, mode].join(
        ' '
      )}
      {...props}
    >
      {label}
    </p>
  );
};

Heading.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired
};

Heading.defaultProps = {
  primary: false,
  size: 'medium',
  label: 'No set label'
};
