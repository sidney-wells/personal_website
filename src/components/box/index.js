import PropTypes from 'prop-types';
import { Box as BaseBox } from 'theme-ui';

const Box = ({ start, end, span, sx, ...props }) => {
  return (
    <BaseBox
      sx={{
        gridColumnStart: start,
        gridColumnEnd: span ? `span ${span}` : end,
        ...sx
      }}
      {...props}
    />
  );
};

Box.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  span: PropTypes.number,
  sx: PropTypes.object
};

Box.defaultProps = {
  start: 1,
  end: 12
};

export default Box;
