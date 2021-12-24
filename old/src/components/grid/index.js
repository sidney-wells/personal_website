import { Grid as BaseGrid } from 'theme-ui';
import PropTypes from 'prop-types';

const Grid = props => <BaseGrid {...props} />;

Grid.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
};

Grid.defaultProps = {
  columns: [4, 8, 12],
  gap: 10
};

export default Grid;
