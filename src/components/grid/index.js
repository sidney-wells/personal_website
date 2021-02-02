import { Grid as BaseGrid } from 'theme-ui';
import PropTypes from 'prop-types';

const Grid = props => {
  return <BaseGrid {...props} />;
};

Grid.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
};

Grid.defaultProps = {
  columns: 12,
  gap: 0
};

export default Grid;
