import React from 'react';
import PropTypes from 'prop-types';
import { Heading as BaseHeading } from 'theme-ui';

const Heading = ({ as, ...props }) => (
  <BaseHeading variant={`heading.${as}`} {...props} />
);

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Heading.defaultProps = {
  as: 'h1',
  size: 'medium'
};

export default Heading;
