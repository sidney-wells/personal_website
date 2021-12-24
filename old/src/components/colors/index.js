import React from 'react';
import PropTypes from 'prop-types';
import { Heading as BaseHeading } from 'theme-ui';

const Color = ({ as, color, ...props }) => {
  return (
    <BaseHeading variant={`heading.${as}`} sx={{ color: color }} {...props} />
  );
};

Color.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3']),
  color: PropTypes.string
};

Color.defaultProps = {
  as: 'h3',
  color: 'darkGray'
};

export default Color;
