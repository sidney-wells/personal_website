import PropTypes from 'prop-types';
import { Image as BaseImage } from 'theme-ui';

const Image = ({ size, name, ...props }) => (
  <BaseImage {...props} variant={size} src={`/images/${name}`} />
);

Image.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', 'fill']),
  name: PropTypes.string,
  href: PropTypes.string
};

Image.defaultProps = {
  size: 's',
  name: 'home.jpg',
  href: 'https:www.google.com'
};

export default Image;
