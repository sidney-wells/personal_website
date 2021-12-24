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
  start: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  end: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  sx: PropTypes.object
};

export default Flex;
