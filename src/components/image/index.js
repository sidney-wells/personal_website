import PropTypes from 'prop-types';
import { Image as BaseImage } from 'theme-ui';

const Image = ({ size, ...props }) => {
  return <BaseImage variant={size} {...props} />;
};

Image.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', 'fill']),
  src: PropTypes.string,
  href: PropTypes.string
};

Image.defaultProps = {
  size: 's',
  src: '../../images/home.jpg',
  href: 'https:www.google.com'
};

export default Image;
