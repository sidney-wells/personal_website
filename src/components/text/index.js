import PropTypes from 'prop-types';
import { Text as BaseText } from 'theme-ui';

const Text = ({ size, ...props }) => (
  <BaseText variant={`paragraph.${size}`} {...props} />
);

Text.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l'])
};

Text.defaultProps = {
  size: 'm'
};

export default Text;
