import PropTypes from 'prop-types';
import { Image as BaseImage } from 'theme-ui';

const Image = ({ size, ...props }) => {
  return <BaseImage variant={size} {...props} />;
};

Image.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'fill']),
  src: PropTypes.string
};

Image.defaultProps = {
  size: 's',
  src: '../../images/home.jpg'
};

export default Image;
