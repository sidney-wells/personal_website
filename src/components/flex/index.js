import { Flex as BaseFlex } from 'theme-ui';
import PropTypes from 'prop-types';

const Flex = ({ start, end, span, sx, ...props }) => (
  <BaseFlex
    sx={{
      gridColumnStart: start,
      gridColumnEnd: span ? `span ${span}` : end,
      ...sx
    }}
    {...props}
  />
);

Flex.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  span: PropTypes.number,
  sx: PropTypes.object
};

export default Flex;
