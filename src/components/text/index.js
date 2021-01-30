import React from 'react';
import PropTypes from 'prop-types';
// import './text.css';
import { Text as BaseText } from 'theme-ui';

const Text = ({ primary, size, label, sx, ...props }) => {
  // const mode = primary
  //   ? 'storybook-text--primary'
  //   : 'storybook-text--secondary';
  return (
    <BaseText
      // className={['storybook-text', `storybook-text--${size}`, mode].join(' ')}
      // {...props}
      sx={sx}
    >
      {label}
    </BaseText>
  );
};

export default Text;

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
