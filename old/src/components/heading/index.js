import React from 'react';
import PropTypes from 'prop-types';
import { Heading as BaseHeading } from 'theme-ui';

const Heading = ({ as, color, ...props }) => {
  return (
    <BaseHeading variant={`heading.${as}`} sx={{ color: color }} {...props} />
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3']),
  color: PropTypes.string
};

Heading.defaultProps = {
  as: 'h1',
  color: 'darkGray'
};

export default Heading;
