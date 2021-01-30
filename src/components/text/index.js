import React from 'react';
import PropTypes from 'prop-types';
import { Text as BaseText } from 'theme-ui';

const Text = ({ size, label, sx }) => {
  return (
    <BaseText variant={`paragraph.${size}`} sx={sx}>
      {label}
    </BaseText>
  );
};

export default Text;

Text.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  sx: PropTypes.object
};

Text.defaultProps = {
  size: 'medium',
  label: 'No set label',
  sx: {}
};
